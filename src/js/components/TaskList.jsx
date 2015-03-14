const React = require('react');
const Task = require('./Task.jsx');
const Table = require('react-bootstrap/lib/Table');
const Alert = require('react-bootstrap/lib/Alert');
const Input = require('react-bootstrap/lib/Input');

let TaskList = React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    //let {tasks} = this.props;
    var tasks = this.props.tasks;

    if (tasks.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Page/section</th>
            <th>Description</th>
            <th>Complété</th>
            <th>Validé</th>
          </tr>

        </thead>
        <tbody>
          {tasks.map(task =>
              <Task task={task} key={task.id} />
          )}
        </tbody>
      </Table>
    );
  }
});

module.exports = TaskList;
