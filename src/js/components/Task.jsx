const React = require('react');
const ActionCreator = require('../actions/TodoActionCreators');
const ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
const Input = require('react-bootstrap/lib/Input');

let Task = React.createClass({
  // TODO add propTypes here
  //getDefaultProps() {
  //  return {
  //    task: {
  //      title: '',
  //      completed: false
  //    }
  //  };
  //},

  handleToggleCompleted(task) {
    if (this.refs.checkbox.getDOMNode().completed) {
      ActionCreator.completeTask(task);
    }
  },
  handleToggleVerified(task) {
    if (this.refs.checkbox.getDOMNode().verified) {
      //ActionCreator.completeTask(task);
    }
  },

  render() {
    //let {task} = this.props;
    var task = this.props.task;

    return (

    <tr>
      <td>{task.id}</td>
      <td>{task.section}</td>
      <td>{task.details}</td>
      <td>
        <Input type="checkbox" ref="completed" checked={task.completed}
        onChange={this.handleToggleCompleted.bind(this, task)} />
      </td>
      <td>
        <Input type="checkbox" ref="verified" checked={task.verified}
          onChange={this.handleToggleVerified.bind(this, task)} />
      </td>
    </tr>
    );
  }
});

module.exports = Task;
