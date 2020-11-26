const PROJECT_ADD = "project/projectAdd";
const PROJECT_DELETE = "project/delete";

export const projectAdd = (project) => {
  return {
    type: PROJECT_ADD,
    project,
  };
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
  const minData = data;
  console.log(data);
  // dispatch(projectLoad(minData));

  for (const d of minData.projects) {
    dispatch(projectAdd(d));
  }
};

const projectReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case PROJECT_ADD:
      return [{ ...action.project }, ...state];
    case PROJECT_DELETE:
      return [
        {
          ...state.slice(0, action.project),
          ...state.slice(action.project + 1),
        },
      ];
    default:
      return state;
  }
};

export default projectReducer;
