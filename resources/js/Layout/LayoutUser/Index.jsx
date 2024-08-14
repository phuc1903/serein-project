import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarMain from "@/Component/Navbar/Index";
    
import clsx from "clsx";
import styles from "./LayoutUser.module.scss";

function LayoutUser({ children }) {
    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="/images/logo3.png"
                                width="180"
                                height="60"
                                className="d-inline-block align-top object-cover"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <NavbarMain/>
                    </Container>
                </Navbar>
            </header>

            <main>{children}</main>
        </>
    );
}

export default LayoutUser;
