import http from "../axios-common";
const getAll = () => {
  return http.get();
};

const getbyId = id => {
  return http.get(`${id}`);
};

const remove = id => {
  return http.delete(`/${id}`);
};

const TutorialService = {
  getAll,
  getbyId,
  remove,
};

export default TutorialService;
