import axios from "axios";

const instance = axios.create({
<<<<<<< HEAD
  baseURL: "https://laravel-api-back.herokuapp.com/public/api/contact/store",
=======
  baseURL: "https://frontend-mundose.herokuapp.com/api/",
>>>>>>> 3cf246b4a01396963b36df0221144f98334963fd
});

const sendEmail = async (data) => {
  const response = await instance({
    method: "post",
    url: "contact/store",
    data: data,
  });

  return response;
};

export { sendEmail };
