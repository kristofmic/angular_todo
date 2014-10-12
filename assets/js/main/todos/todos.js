(function(angular) {
  /** TODO
  Todos service (can be Factory or Service).

  Public api should expose #init, #create, #archive, #destroy and #model.
  #init should initialize the model.
  #create should add a new todo based on a description passed in.
  #archive should set the archived property on the todo passed in.
  #destroy should remove the todo passed in from the model
  #model is the underlying data model

  Dependencies: N/A
  */

  function data() {
    return [
      {
        description: 'Build a todo app',
        completed: false,
        archived: false
      },
      {
        description: 'Teach angular',
        completed: false,
        archived: false
      },
      {
        description: 'Take over the world',
        completed: false,
        archived: false
      },
      {
        description: 'Feed Boomer the cat',
        completed: true,
        archived: true
      },
      {
        description: 'Clean Boomer\'s litter box',
        completed: true,
        archived: false
      }
    ];
  }

})(angular);