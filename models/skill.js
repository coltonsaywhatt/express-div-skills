const skills = [
  {id: 1234, skill: 'JavaScript', quality: true},
  {id: 5678, skill: 'CSS', quality: true},
  {id: 9876, skill: 'Express', quality: false}
];
  
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getAll() {
  return skills;
};

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
};

function create(skill) {
  skill.id = 1;
  skill.quality = false;
  skills.push(skill);
};

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.find((skill) => skill.id === id);
  skills.splice(idx, 1);
};

function update(id, skill) {
  id = parseInt(id);
  const updatedSkill = skills.find((skill) => skill.id === id);
  Object.assign(updatedSkill, skill);
};
  
  
  
  
  
  