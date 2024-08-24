import clsx from "clsx";
import styles from './NavbarStyles.module.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, usePage } from "@inertiajs/react";

function NavDropdownCustom({children, active, to, href, className, datas}) {
    
    return (
        <NavDropdown title={children} id="NavDropdownCustom" className={clsx('mx-3', styles.navbarItem, className)}>
            {datas.map(data => {
                if(!data.line) {
                    return (
                        <NavDropdown.Item className={clsx(styles.dropdownItem)} key={data.id} as={Link} href={data.route}>
                            {data.title}
                        </NavDropdown.Item>
                    );
                } else {
                    return <NavDropdown.Divider key={data.id} />;
                }
            })}
        </NavDropdown>
    );
}

export default NavDropdownCustom;
