// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.tech/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.tech/api/people/3/");
//   })
//   .then((res) => {
//     console.log("THIRD REQUEST RESOLVED", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

const loadStarWarsPeople = async () => {
  const res = await fetch("https://swapi.tech/api/people/1/");
  const data = await res.json();
  console.log(data);
};

loadStarWarsPeople();
