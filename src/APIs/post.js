import axios from "axios";

export async function postLogin(e) {
  console.log(e);
  let config = {
    method: "post",
    url: "api/member/login",
    headers: { uid: e.uid },
    data: { uid: e.uid },
  };
  axios(config)
    .then(function(response) {
      //   console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  let c = {
    method: "patch",
    url: "api/member",
    headers: { uid: e.uid },
    data: { picture: e.photoURL, name: e.displayName },
  };
  axios(c)
    .then(function(reponse) {})
    .catch(function(error) {
      console.log(error);
    });
}
