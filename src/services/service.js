import instance from "../axios";

const getAll = () => {
  return instance.get("/all");
};

const getDetailByCountry = () => {
    return instance.get("/countries");
};

  const getCaseAll = () => {
    return instance.get("/historical");
};

export default {
  getAll,
  getDetailByCountry,
  getCaseAll
};