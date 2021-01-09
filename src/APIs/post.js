import axios from "axios";
import store from "../store/index";

export async function postLogin(e) {
  //   console.log(e);
  let config = {
    method: "post",
    url: "api/member/login",
    headers: { uid: e.uid },
    data: { uid: e.uid },
  };
  let user = await axios(config)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  if (user.isManager) store.commit("setAdmin");
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
