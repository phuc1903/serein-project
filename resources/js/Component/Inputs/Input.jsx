import clsx from "clsx";
import styles from "./InputStyles.module.scss";
import { Form } from "react-bootstrap";

function Input({
    type,
    title,
    className,
    register,
    activeError = false,
    ...props
}) {
    return (
        <Form.Control
            {...register}
            className={clsx(styles.input, {[styles.error]: activeError}, className)}
            type={type}
            placeholder={title}
            {...props}
        />
    );
}

export default Input;
