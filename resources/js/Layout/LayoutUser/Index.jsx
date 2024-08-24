import { usePage } from "@inertiajs/react";
import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarMain from "@/Component/Navbar/Index";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Toastify from "@/Component/Notification/Toastify/Index";

function LayoutUser({ children }) {

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.notify) {
            switch (flash.notify.type) {
                case "success":
                    toast.success(flash.notify.message);
                    break;
                case "error":
                    toast.error(flash.notify.message);
                    break;
                case "warning":
                    toast.warning(flash.notify.message);
                    break;
                case "info":
                    toast.info(flash.notify.message);
                    break;
                default:
                    toast.success(flash.notify.message);
                    break;
            }
        }
    }, [flash]);


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
                        <NavbarMain />
                    </Container>
                </Navbar>
            </header>

            <main>
                {children}
            </main>

            <Toastify/>
        </>
    );
}

export default LayoutUser;
