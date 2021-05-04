import axios from "axios";

const instance = axios.create({
  baseURL: "https://laravel-api-back.herokuapp.com/public/api/"
})

const sendEmail = async (dataConsole) => {
  const response = await instance({
    method: "post",
    url: "contact/store",
    data: dataConsole,
  });

  return response;
};

export { sendEmail };
