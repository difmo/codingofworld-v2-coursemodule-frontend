import axios from 'axios';

export const getCourses = (category) => {
  return axios
    .get(`https://codingofworldv2-coursemodule-backend.onrender.com/course/browse/${category}`)
    .then((res) => {
      // console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
