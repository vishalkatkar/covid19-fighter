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
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/donate/">Donate</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Help
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <b>Call us: </b>1234567890
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/donate/">Donate</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/get-help/">Need Help</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/donar/">Donor List</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/seeker/">Seeker List</NavLink>
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
