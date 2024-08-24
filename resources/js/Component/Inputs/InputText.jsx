import clsx from "clsx";
import styles from "./InputStyles.module.scss";
import { Form } from "react-bootstrap";
import Input from "./Input";

function InputText({ title, typeInput, labelProps = {}, register, activeError, ...props }) {
    return (
        <Form.Group className={clsx("mb-3", styles.formGroup)}>
            <Form.Label className={clsx("", styles.label)} {...labelProps}>{title}</Form.Label>
            <Input register={register} type={typeInput} title={title} activeError={activeError} {...props} />
        </Form.Group>
    );
}

export default InputText;

