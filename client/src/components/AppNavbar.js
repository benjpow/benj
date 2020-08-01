import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

class AppNavbar extends Component{
    state = {
        isOpen: false
    }
    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color = "dark" dark expands = "sm" className = "mb-5">
                    <Container>
                        <NavbarBrand href = "/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick = {this.toggle}/>
                        <Collapse isOpen = {this.state.isOpen} navbar>
                            <Nav classname = "ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/benjpow">
                                        github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div> 
        );
    }
}

export default AppNavbar;