var
  express = require('express'),
  router = express.Router();

router.get('/todos', todos);

module.exports = router;

function todos(req, res) {
  res.json(data());
}

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
      archived: false
    },
    {
      description: 'Clean Boomer\'s litter box',
      completed: true,
      archived: true
    }
  ];
}