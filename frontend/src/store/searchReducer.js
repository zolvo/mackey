const SEARCH = "/search";

export const search = (search) => {
  return {
    type: SEARCH,
    search,
  };
};

export const searchAll = () => async (dispatch) => {
  const res = await fetch("/api/search");
  const data = await res.json();
  return data;
};

const searchReducer = (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case SEARCH:
      return [{ ...action.search }, ...state];
    default:
      return state;
  }
};

export default searchReducer;
