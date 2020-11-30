const express = require("express");
const db = require("../../db/models");
const { User, Project, Step, Comment } = db;
const { Op } = require("sequelize");
const router = express.Router();
const { checkAuth } = require("../../utils/auth");

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

router.post(
  "/",
  checkAuth,
  asyncHandler(async (req, res, next) => {
    let { search } = req.body;

    let relevantProjects = [];
    let projectIds = [];
    let stepDescriptions = [];

    console.log(req.body);
    search = search.toLowerCase();
    const projects = await Project.findAll();

    // Search through step list to find relevant projects
    for (let i = 0; i < projects.length; i++) {
      let projectTitle = projects[i].projectTitle.toLowerCase();
      let projectDescription = projects[i].projectDescription.toLowerCase();

      if (
        projectTitle.includes(`${search}`) ||
        projectDescription.includes(`${search}`) ||
        projectTitle.startsWith(search) ||
        projectDescription.startsWith(search)
      ) {
        relevantProjects.push(projects[i]);
        projectIds.push(projects[i].id);
      }
    }

    let noRelevantProjects;

    if (relevantProjects.length === 0) {
      noRelevantProjects = {
        projectTitle: `No result found`,
        projectDescription: `We couldn't find any result for your search!`,
        stepDescriptions: [],
      };
    } else {
      // console.log(projectIds);

      // Loop throught steps and find associated projects
      stepDescriptions = await Step.findAll({
        where: {
          projectId: {
            [Op.in]: projectIds,
          },
        },
      });
      relevantProjects = relevantProjects.map((project) => {
        project.stepDescriptions = [];
        for (let i = 0; i < stepDescriptions.length; i++) {
          if (project.id === stepDescriptions[i].projectId) {
            project.stepDescriptions.push(stepDescriptions[i]);
          }
        }
        return project;
      });
    }
    res.render("search", {
      restoreUser: req.user,
      relevantProjects,
      noRelevantProjects,
      search,
    });
  })
);

module.exports = router;
