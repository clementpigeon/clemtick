const React = require('react');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Navbar = require('react-bootstrap/lib/Navbar');


let Topbar = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <Navbar brand="Tickets">
        <Nav>
          <NavItem onClick={this.props.handleCreateNewItem} bsStyle="primary">Add New</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Topbar;
