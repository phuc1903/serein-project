import React from "react";
import clsx from "clsx";
import {useRoute} from "../../../../vendor/tightenco/ziggy";
import { usePage } from "@inertiajs/react";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import NavItem from "./NavItem";
import NavDropdownCustom from "./NavDropdownCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

import styles from "./NavbarStyles.module.scss";


function Navbar() {

    const { user, categories } = usePage().props;

    const route = useRoute();

    const navUser = [
        {
            id: 1,
            title: "Tài khoản",
            route: route('info'),
            auth: true,
        },
        {
            id: 2,
            title: "Đăng nhập",
            route: route('login'),
            auth: false,
        },
        {
            id: 3,
            title: "Đăng ký",
            route: route('register'),
            auth: false,
        },
        {
            id: 4,
            line: true, 
            auth: "default"
        },
        {
            id: 5,
            title: "Đổi mật khẩu",
            route: route('reset-password'),
            auth: true,
        },
        {
            id: 6,
            title: "Đăng xuất",
            route: route('logout'),
            auth: true,
        },
        {
            id: 7,
            title: "Quên mật khẩu",
            route: route('forgot-password'),
            auth: false,
        },
    ];

    const filteredDatas = navUser.filter(data => {
        if (data.auth === "default") {
            return true;
        }
        if (user && data.auth === true) {
            return true;
        }
        if (!user && data.auth === false) {
            return true;
        }
        return false;
    });

    const categoriesNew = categories.data.map(({id, name, ...rest }) => ({
        ...rest,
        id,
        route: route('shop.category', id),
        title: name
    }));

    return (
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavItem to={route('home')} active={route().current('home')}>Home</NavItem>
                <NavDropdownCustom to={route('shop')} active={route().current('shop')} datas={categoriesNew} >Shop</NavDropdownCustom>
                <NavItem to={route('about')} active={route().current('about')}>About</NavItem>
                <NavItem to={route('contact')} active={route().current('contact')}>Contact</NavItem>
                <NavDropdownCustom to={route('login')} active={route().current('login')} datas={filteredDatas} >{user ?  <Image className={clsx(styles.avatar)} roundedCircle src={user.avatar} alt="User Avatar"/> : <FontAwesomeIcon icon={faUser}/>}</NavDropdownCustom>
            </Nav>
        </NavbarBootstrap.Collapse>
    );
}

export default Navbar;
