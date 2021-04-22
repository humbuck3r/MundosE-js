import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
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
