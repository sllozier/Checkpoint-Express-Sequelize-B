let tasks = {
}; //

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
    return Object.keys(tasks);
  },

  add: function (name, task) {
    if(!task.complete){
      task.complete = false;
    }else{
      task.complete = true;
    }
    if(tasks[name]){
      tasks[name].push(task);
    }else {
      tasks[name] = [task];
    }
    return task;
  },

  list: function (name) {
   return tasks[name];
  },

  complete: function (name, idx) {
       tasks[name][idx].complete = true;
  },

  remove: function (name, idx) {
    tasks[name].splice(idx, 1);
  },
};
