import { Link } from "@inertiajs/react";
import Nav from "react-bootstrap/Nav";
import clsx from "clsx";
import styles from "./NavbarStyles.module.scss";

function NavItem({ children, active, to, href, className }) {
    return (
        <Nav.Link
            as={Link}
            href={to}
            className={clsx(
                "mx-3",
                styles.navbarItem,
                { [styles.active]: active },
                className
            )}
        >
            {children}
        </Nav.Link>
    );
}

export default NavItem;
