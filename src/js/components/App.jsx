const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
const Button = require('react-bootstrap/lib/Button');
const TaskList = require('./TaskList.jsx');
const Topbar = require('./Topbar.jsx');
const TaskDetailView = require('./TaskDetailView.jsx');


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

  handleCreateNewItem(e) {
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
        <div className="row">
          <div className="col-sm-12">
            <Topbar handleCreateNewItem={this.handleCreateNewItem}></Topbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <TaskList tasks={tasks} />
          </div>
          <div className="col-sm-3">
            <TaskDetailView />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = App;
