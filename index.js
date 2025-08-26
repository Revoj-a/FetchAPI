fetch("https://swapi.tech/api/people/1/")
  .then((res) => {
    console.log("RESOLVED", res);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
