import axios from "axios";
import toaster from "../toaster/toaster";
// import Store from "../store";
const url=process.env.NEXT_PUBLIC_APP_URL
const callApi = (endpoint, method, payload, loginToken) => {
  let token;
  if (loginToken) {
    token = loginToken;
  } 


  const authHeaders = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  const configaxios = {
    method,
    // url: `${process.env.REACT_APP_URL}${endpoint}`,
    url: `${endpoint}`,
    data: payload,
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Max-Age": "6000",
      "Access-Control-Allow-Headers": "*",

      ...authHeaders,
    },
  };
  return new Promise((resolve, reject) => {
    axios(configaxios)
      .then((res) => {
        console.log(res)
        resolve(res.data);
      })
      .catch((error) => {
        const isMatched =
          error.response?.data?.responseMessage?.toLowerCase() ===
          "Token expired. Kindly Re-login".toLowerCase();
        if (isMatched && error.response.status === 401) {
          toaster(error.response.data.responseMessage, "error");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        if (error && error.response) {
          if (error.response.status === 404) {
            reject({
              message: "404 not found",
              statusCode: 404,
            });
          }
          if (error.response.data && error.response.data.isError) {
            reject({
              message: error.response.data.responseMessage,
              statusCode: error.response.data.statusCode,
            });
          } else if (error && error.response) {
            if (error.response.data && error.response.data.errors) {
              const parsederrors = error.response.data.errors;
              for (const value in parsederrors) {
                parsederrors[value].forEach((errmsg) => {
                  reject({
                    message: errmsg,
                    statusCode: error.response.data.status,
                  });
                });
              }
            }
          } else {
            reject({
              message: "Something went wrong, Please re-login",
              statusCode: 500,
            });
          }
        } else {
          reject({
            message: "Something went wrong, Please re-login",
            statusCode: 500,
          });
        }
      });
  });
};

const callPublicApi = (endpoint, method, payload) => {
  const configaxios = {
    method,
    url: `${url}/${endpoint}`,
    data: payload,
    headers: {
      Accept: "*/*",
      //"Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Max-Age": "6000",
     // "Access-Control-Allow-Headers": "*",
      // ...authHeaders,
    },
  };
  return new Promise((resolve, reject) => {
    axios(configaxios)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        if (error && error.response) {
          if (error.response.data && error.response.data.isError) {
            reject({
              message: error.response.data.responseMessage,
              statusCode: error.response.data.statusCode,
            });
          } else if (error && error.response) {
            if (error.response.data && error.response.data.errors) {
              const parsederrors = error.response.data.errors;
              for (const value in parsederrors) {
                parsederrors[value].forEach((errmsg) => {
                  reject({
                    message: errmsg,
                    statusCode: error.response.data.status,
                  });
                });
              }
            }
          } else {
            reject({
              message: "Something went wrong, Please re-login",
              statusCode: 500,
            });
          }
        } else {
          reject({
            message: "Something went wrong, Please re-login",
            statusCode: 500,
          });
        }
      });
  });
};

export { callApi, callPublicApi }
