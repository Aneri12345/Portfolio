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
                        <Nav navbar className="ml-auto">
                            <NavItem className="mt-1">
                                <NavLink className="nav-link" to='/home'>
                                    <span className="fa fa-home fa-lg mr-2"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1">
                                <NavLink className="nav-link" to='/aboutMe'>
                                    <span className="fa fa-plus fa-lg mr-2 mt-1"></span>About Me
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1">
                                <NavLink className="nav-link" to='/projects'>
                                    <span className="fa fa-info fa-lg mr-2"></span>Projects
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1">
                                <NavLink className="nav-link" to='/achievements'>
                                    <span className="fa fa-info fa-lg mr-2"></span>Achievements
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1">
                                <NavLink className="nav-link" to='/experience'>
                                    <span className="fa fa-info fa-lg mr-2"></span>Experience
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-1">
                                <NavLink className="nav-link" to='/contactMe'>
                                    <span className="fa fa-phone fa-lg mr-2"></span>Contact Me
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