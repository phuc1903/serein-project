import clsx from "clsx";
import { ErrorMessage } from "@hookform/error-message";

import styles from "./MessageFormStyles.module.scss";

function MessageForm({errors, name}) {
    return (  
        <ErrorMessage errors={errors} name={name} render={({message}) => <p className={clsx(styles.message)}>{message}</p>} />
    );
}

export default MessageForm;