import { useState } from "react";
import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormInertia, Head} from "@inertiajs/react";
import { useRoute } from "V/tightenco/ziggy/src/js";
import clsx from "clsx";
import { Form } from "react-bootstrap";

import InputText from "@/Component/Inputs/InputText";
import Button from "@/Component/Button/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import InputGroupCustom from "@/Component/Inputs/InputGroupCustom";
import MessageForm from "@/Component/Notification/MessageForm/Index";
import TogglePassword from "@/Services/Auth/TogglePassword";

function Login() {
    const route = useRoute();

    const { showPassword, handleShowPassword } = TogglePassword();

    const { register, handleSubmit, formState: { errors }, trigger } = useReactHookForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });
    const { data, setData, post, processing, errors: {erorrsInertia}} = useFormInertia({
        email: "",
        password: ""
    });

    const onSubmit = formData => {
        setData(formData)
        post(route('login.store', data));
    }

    console.log(erorrsInertia);
    

    return (  
        <>
            <Head title="Đăng nhập"/>

            <div className="col-4 mx-auto mt-5">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <>
                        <InputText 
                            register=
                                {register('email', 
                                    {
                                    required: "Vui lòng nhập email", 
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Vui lòng nhập địa chỉ email hợp lệ"
                                    },
                                    minLength: { value: 5, message: "Vui lòng nhập tối thiểu 5 ký tự"},})
                                } 
                            activeError={!!errors.email || !!erorrsInertia.email}
                            onBlur={() => trigger('email')}
                            typeInput="email" 
                            title="Nhập email" 
                        />
                        <MessageForm name="email" errors={{...errors, ...erorrsInertia}} />
                    </>
                    <>
                        <InputGroupCustom
                            register={
                                register('password', {
                                    required: "Vui lòng nhập mật khẩu",
                                    minLength: {
                                        value: 4,
                                        message: "Vui lòng nhập ít nhất 4 ký tự"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Vui lòng nhập tối đa 50 ký tự"
                                    },})
                                } 
                            activeError={!!errors.password || !!erorrsInertia.password}
                            onBlur={() => trigger('password')}
                            title="Nhập mật khẩu" 
                            type={showPassword ? 'text' : 'password'}
                            onClick={handleShowPassword}
                            icon={<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />}
                        />
                        <MessageForm name="password" errors={{...errors, ...erorrsInertia}} />
                    </>
                    <Button disabled={processing} className={clsx("w-100 mt-3")}>{processing ? 'Đang đăng nhập...' : 'Đăng nhập' }</Button>
                </Form>
            </div>
        </>
    );
}

export default Login;
