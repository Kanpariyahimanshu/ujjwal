import {
  RETRIEVE_TUTORIALS,
  RETRIEVE_TUTORIAL,
  DELETE_TUTORIAL,
} from "../actions/types";

const initialState = {
  alldata: [],
  singleItem: []
};

const tutorialReducer = (tutorials = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_TUTORIALS:
      return {...tutorials, alldata:payload};

    case RETRIEVE_TUTORIAL:
      return {...tutorials, singleItem:payload};
      
    case DELETE_TUTORIAL:
      const datas = tutorials.alldata.filter(({ id }) => id !== payload.id);
      return {...tutorials, alldata:datas};
      
    default:
      return tutorials;
  }
};

export default tutorialReducer;