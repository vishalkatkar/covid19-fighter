import React, { useState } from "react";
import {
  Container,
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
} from "reactstrap";
import { Link } from "react-router-dom";
import { Logo } from "../../utils/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="pl-5 pr-5">
        <NavbarBrand>
          <NavLink href="/">
            <Logo />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/"><NavLink>Home</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/donate/"><NavLink>Donate</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Help
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <b>Call us: </b>7977043566
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/donate/"><NavLink>Donate</NavLink></Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/get-help/"><NavLink>Need Help</NavLink></Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/donar/"><NavLink>Donor List</NavLink></Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/seeker/"><NavLink>Seeker List</NavLink></Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>COVID-19 FIGHTER</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
