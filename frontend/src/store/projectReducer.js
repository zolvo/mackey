const PROJECT_ADD = "project/projectAdd";
const PROJECT_DELETE = "project/delete";

export const projectAdd = (projects) => {
  return {
    type: PROJECT_ADD,
    projects,
  };
};

export const addProject = (project) => async (dispatch) => {
  const { projectTitle, projectDescription, userId, photo, video } = project;
  const res = await fetch("/api/projects", {
    method: "POST",
    body: JSON.stringify({
      projectTitle,
      projectDescription,
      userId,
      photo,
      video,
    }),
  });
  dispatch(projectAdd(res.project));
  return res;
};

export const projectDelete = (projectId) => {
  return {
    type: PROJECT_DELETE,
    projectId,
  };
};

export const projectFetch = () => async (dispatch) => {
  const res = await fetch("/api/projects");
  const data = await res.json();
  // const minData = data;
  // console.log(data);

  // for (const d of minData.projects) {
  //   dispatch(projectAdd(d));
  // }
  const { projects } = data;
  dispatch(projectAdd(projects));
};

const projectReducer = (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case PROJECT_ADD:
      return action.projects;
    case PROJECT_DELETE:
      return [
        ...state.slice(0, action.project),
        ...state.slice(action.project + 1),
      ];
    default:
      return state;
  }
};

export default projectReducer;
