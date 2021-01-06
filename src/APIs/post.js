import axios from "axios";

export function postLogin(e) {
  axios.defaults.timeout = 5000;
  axios.defaults.baseURL = process.env.API_ROOT; // 域名

  // http request 欄截
  axios.interceptors.request.use(
    (config) => {
      config.data = JSON.stringify(config.data);
      config.headers = {
        // 如果沒有cors的問題則可以都不加
        "Access-Control-Allow-Origin": process.env.API_ROOT,
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
        "Access-Control-Max-Age": "86400",
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.defaults.headers.common["uid"] = e.uid;
  axios
    .post("http://127.0.0.1/sqlproject/member/login", {
      uid: e.uid,
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
