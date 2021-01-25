import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isDropdownOpen: false,
            data: {},
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    handleToggle() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen,
        });
    }

    render() {
        return (
            <Navbar className="sticky-top" style={{backgroundColor:"black"}} dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar className="dark">
                        <Nav navbar className="mx-auto">
                            <NavItem className="mt-1 mr-4">
                                <NavLink className="nav-link" to='/home'>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1 mr-4">
                                <NavLink className="nav-link" to='/aboutMe'>
                                    About Me
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1 mr-4">
                                <NavLink className="nav-link" to='/projects'>
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1 mr-4">
                                <NavLink className="nav-link" to='/achievements'>
                                    Achievements
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1 mr-4">
                                <NavLink className="nav-link" to='/experience'>
                                    Experience
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1 mr-4">
                                <NavLink className="nav-link" to='/contactMe'>
                                   Contact Me
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }

}

export default Header;