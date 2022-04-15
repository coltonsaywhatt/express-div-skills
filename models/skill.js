const skills = [
    {id: 12345, skill: 'Average', done: true},
    {id: 12346, skill: 'Super', done: true},
    {id: 12347, skill: 'Basic', done: true},
    {id: 12348, skill: 'Superior', done: true}
]

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
};

function getAll() {
    return skills;
};