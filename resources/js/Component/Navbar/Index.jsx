import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import NavItem from "./NavItem";

function Navbar() {
    return (
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavItem children="Home" />
                <NavItem children="Shop" />
                <NavItem children="about" />
                <NavItem children="contact" />
            </Nav>
        </NavbarBootstrap.Collapse>
    );
}

export default Navbar;
