fetch("https://swapi.tech/api/people/1/")
  .then((res) => {
    console.log("RESOLVED", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
