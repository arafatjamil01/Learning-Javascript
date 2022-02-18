// find the string properties of an object
const man = {
  name: "Arafat",
  age: 25,
  homeDistrict: "Jashore",
  height: 5.6,
};

showProperties(man);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key + ":" + obj[key]);
}
