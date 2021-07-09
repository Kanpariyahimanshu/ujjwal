import {
  RETRIEVE_TUTORIALS,
  RETRIEVE_TUTORIAL,
  DELETE_TUTORIAL,
} from "./types";

import TutorialDataService from "../services/TutorialService";

export const retrieveTutorials = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.getAll();
    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveTutorial = (id) => async (dispatch) => {
  try {
    const res = await TutorialDataService.getbyId(id);
    dispatch({
      type: RETRIEVE_TUTORIAL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await TutorialDataService.remove(id);

    dispatch({
      type: DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};