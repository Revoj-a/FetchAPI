fetch("https://swapi.tech/api/people/1/")
  .then((res) => {
    console.log("RESOLVED", res);
  })
  .catch((e) => {
    console.log("ERROR", e);
  });
