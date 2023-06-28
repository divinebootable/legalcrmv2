import axios from "axios";

const API_URL = "http://locahost:3001/api/auth";

const register = (account_name, email, phone, law_firm) => {
  return axios.post(API_URL + "REGISTER", {
    account_name: account_name,
    email: email,
    phone: phone,
    law_firm: law_firm,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "LOGIN", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.first_name) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
