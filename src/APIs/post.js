import axios from "axios";

export function postLogin(e) {
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
