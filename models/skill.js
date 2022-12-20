let skills = [
  {id:1, skill:"HTML", done: true},
  {id:2, skill:"CSS", done: false},
  {id:3, skill:"Javascript", done: true},
  {id:4, skill:"Python", done: false},
  {id:5, skill:"React", done: false},
]
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id)
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 10000000
  skill.done = false
  skills.push(skill)
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, skill) {

  id = parseInt(id)
  const idx = skills.findIndex(skill => skill.id === id);
  skill.id = parseInt(id)
  skills.splice(idx, 1, skill)
}