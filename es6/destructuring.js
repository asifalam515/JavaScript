const user = {
  id: 3988,
  name: "asibul alam",
  age: 23,
  job: "nothing",
  education: {
    bachelor: "physics",
    masters: "cloud computing",
  },
};
const {
  id,
  name: studentName,
  age,
  education: { bachelor, masters },
} = user;
console.log(id, studentName, age, bachelor, masters);
