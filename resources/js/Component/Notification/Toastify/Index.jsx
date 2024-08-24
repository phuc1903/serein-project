import { ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import styles from "./ToastifyStyles.module.scss";

function Toastify({ children }) {
  
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {children}
        </>
    );
}

export default Toastify;