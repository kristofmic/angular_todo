(function(angular) {
  /** TODO
  Todos service (can be Factory or Service).

  Public api should expose #init, #create, #destroy and #model.
  #init should initialize the model.
  #create should add a new todo based on a description passed in.
  #destroy should remove the todo based on the index in the model
  #model is the underlying data model

  Dependencies: N/A
  */


  function data() {
    return [
      {
        description: 'Build a todo app',
        completed: false
      },
      {
        description: 'Teach angular',
        completed: false
      },
      {
        description: 'Take over the world',
        completed: false
      },
      {
        description: 'Feed Boomer the cat',
        completed: true
      },
      {
        description: 'Clean Boomer\'s litter box',
        completed: true
      }
    ];
  }

})(angular);