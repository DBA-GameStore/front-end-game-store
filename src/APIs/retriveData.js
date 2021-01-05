export async function retrive(collection) {
  const snapshot = await this.axios
    .get("http://127.0.0.1/sqlproject/" + collection)
    .then(function(response) {
      console.log("getter: ", response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
  return snapshot;
}
