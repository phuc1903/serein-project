import Nav from "react-bootstrap/Nav";

import clsx from "clsx";
import styles from './NavbarStyles.module.scss';

function NavItem({children, active}) {
    return (  
        <Nav.Link className="text-uppercase test" href="#home">{children}</Nav.Link>
    );
}

export default NavItem;