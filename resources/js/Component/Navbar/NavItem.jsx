import Nav from "react-bootstrap/Nav";

import clsx from "clsx";
import styles from './NavbarStyles.module.scss';

function NavItem({title}) {
    return (  
        <Nav.Link className="text-uppercase" href="#home">{title}</Nav.Link>
    );
}

export default NavItem;