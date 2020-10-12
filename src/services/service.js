import instance from "../axios";

const getAll = () => {
  return instance.get("/all");
};

const getDetailByCountry = () => {
    return instance.get("/countries");
  };


export default {
  getAll,
  getDetailByCountry
};