import React, { useState } from 'react'
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CartBtn from './CartBtn';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="nav-link" to="/">
          <h4>Marketplace</h4>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/about-us/">About Us</Link>
          </NavItem>
        </Nav>

        <CartBtn/>
        
        <Link to="/auth/logout">logout</Link>
      </Navbar>
    </div>
  )
}

export default Header
