import clsx from "clsx";
import styles from "./InputStyles.module.scss";
import InputGroupReact from "react-bootstrap/InputGroup";
import Input from "./Input";
import { Form } from "react-bootstrap";

function InputGroupCustom({ title, type, icon, onClick, register, activeError, ...props}) {
    return (
        <Form.Group className={clsx("mb-3", styles.formGroup)}>
            <Form.Label htmlFor="basic-url" className={clsx(styles.label)}>{title}</Form.Label>
            <InputGroupReact className={clsx(styles.inputGroup)}>
                <Input register={register} type={type} title={title} activeError={activeError} className={styles.inputGroupItem} {...props} />
                <InputGroupReact.Text 
                    className={clsx(styles.icon, {[styles.error]: activeError})} 
                    onClick={onClick} 
                >
                    {icon}
                </InputGroupReact.Text>
            </InputGroupReact>
        </Form.Group>
    );
}

export default InputGroupCustom;

