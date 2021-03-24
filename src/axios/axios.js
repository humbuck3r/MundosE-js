import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/contact",
});

const sendEmail = async (data) => {
  const response = await instance({
    method: "post",
    url: "email",
    data: data,
  });

  return response;
};

export { sendEmail };
