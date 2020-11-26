const express = require("express");
const router = express.Router();
const db = require("../../db/models");
const { checkAuth } = require("../../utils/auth.js");

const { Project, Step, User } = db;

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

// router.post(
//   "/projectAdd",
//   asyncHandler(async (req, res) => {
//     const { projectTitle, projectDescription, userId, photo, video } = req.body;
//     const project = await Project.create({
//       projectTitle,
//       projectDescription,
//       userId,
//       photo,
//       video,
//     });
//     res.json({ project });
//   })
// );

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    // get all the projects
    const projects = await Project.findAll();
    res.json({ projects });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, nex) => {
    const projectId = parseInt(req.params.id);
    // include users
    const project = await Project.findByPk(projectId, { include: User });
    res.json(project);
  })
);

module.exports = router;
