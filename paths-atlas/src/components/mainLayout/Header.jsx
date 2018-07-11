import React, { Component } from 'react';
import { NavLink, Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, DropdownMenu, DropdownToggle, DropdownItem, Collapse, UncontrolledDropdown } from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom';

import Database from '../Services/Database/Database';

class FixedNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


render() {

    return (
          <div>
            <Navbar color="dark" dark expand="md" className="fixed-top">
              <NavbarBrand to="/" tag={Link}>PAThs Atlas</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink to="/map" tag={RRNavLink}>Map</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/places" tag={RRNavLink}>Places</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/manuscripts" tag={RRNavLink}>Manuscripts</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/works" tag={RRNavLink}>Works</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/authors" tag={RRNavLink}>Authors</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/titles" tag={RRNavLink}>Titles</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/colophons" tag={RRNavLink}>Colophons</NavLink>
                  </NavItem>


                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Pelagios LOD
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem to="/lod/void" tag={RRNavLink}>VoiD</DropdownItem>
                      <DropdownItem target="_blank" href={ Database.getBaseUrl() + "places?verb=search&type=encoded&q_encoded=MSBMSU1JVCAwLCA1MDA=&fullRecords=true&format=turtle"}>
                          Places
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
    );
  }
}

export default FixedNavbar;
