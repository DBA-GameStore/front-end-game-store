import axios from "axios";

export function postLogin(e) {
  let config = {
    method: "post",
    url: "member/login",
    headers: { uid: e.uid },
    data: { uid: e.uid },
  };
  axios(config)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
