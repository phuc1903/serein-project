import "./bootstrap";
import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import LayoutUser from "./Layout/LayoutUser/Index";
import GlobalStyles from "@/GlobalStyles/Index";

const appName = import.meta.env.VITE_APP_NAME || "Serein Jewelry Shop";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <LayoutUser>{page}</LayoutUser>);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <GlobalStyles>
                <App {...props} />
            </GlobalStyles>
        );
    },
});
