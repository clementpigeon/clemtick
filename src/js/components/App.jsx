const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
const Button = require('react-bootstrap/lib/Button');
const TaskList = require('./TaskList.jsx');

let App = React.createClass({

  getInitialState() {
    var first_task = {
      id: 'MB-1',
      section: "home page",
      description: "logo pas aligné",
      details: "déplacer 5 px à droite",
      priority: 3,
      completed: true,
      verified: false,
      comments : [],
      file_url: null,
      reporter: "clement",
      created: Date.now()
    };

    return {
      tasks: [first_task]
    }
  },

  _onChange() {
    this.setState(TodoStore.getAll());
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClearListClick(e) {
    ActionCreator.clearList();
  },

  render() {
    var tasks = this.state.tasks;
    return (
      <div className="container">
        <h1>Tickets</h1>

        <TaskList tasks={tasks} />

        <Button onClick={this.handleAddNewClick} bsStyle="primary">Add New</Button>
        <Button onClick={this.handleClearListClick} bsStyle="danger">Clear List</Button>
      </div>
    );
  }

});

module.exports = App;
