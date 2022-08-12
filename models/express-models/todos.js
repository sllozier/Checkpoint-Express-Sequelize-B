let tasks = {}; //

const listPeople = [];
const add = [];
/*
  tasks (defined above) will be a place to store tasks by person;
  example:
  {
    person1: [{task object 1}, {task object 2}, etc.],
    person2: [{task object 1}, {task object 2}, etc.],
    etc.
  }
*/

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },

  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    return listPeople
  },

  add: function (name, task) {
    return [add.name, add.task]
  },

  list: function (name) {
    // returns tasks for specified person
  },

  complete: function (name, idx) {
    // marks a task complete
  },

  remove: function (name, idx) {
    // removes a tasks
  },
};
