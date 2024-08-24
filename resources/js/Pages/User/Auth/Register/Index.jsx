import { useForm } from "react-hook-form";
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

function Register() {
    const route = useRoute();

    const passwordToggle = TogglePassword();
    const passwordConfirmToggle = TogglePassword();

    const { register, handleSubmit, formState: { errors  }, trigger } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });
    const { data, setData, post, processing, errors: {errorsInertia}} = useFormInertia({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const onSubmit = async formData => {
        setData(formData)
        await post(route('register.store', data));
    }

    const allError = {...errors, ...errorsInertia}

    console.log(errorsInertia);

    return (  
        <>
            <Head title="Đăng ký"/>

            <div className="col-4 mx-auto mt-5">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <>
                        <InputText 
                                register={
                                    register('name',
                                        { 
                                            required: "Vui lòng nhập Họ và tên", 
                                            minLength: { value: 4, message: "Vui lòng nhập tối thiểu 4 ký tự"},
                                            maxLength: { value: 40, message: "Vui lòng nhập tối đa 40 ký tự"},
                                        }
                                    )
                                } 
                                activeError={!!errors.name || !!errorsInertia}
                                onBlur={() => trigger('name')}
                                typeInput="text" 
                                title="Nhập Họ và tên" 
                                autoComplete="name"
                                onChange={(e) => setData('name', e.target.value)}
                            />
                        <MessageForm name="name" errors={allError} />
                    </>
                    <>
                        <InputText 
                            register={
                                register('email',
                                    { 
                                        required: "Vui lòng nhập email", 
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Vui lòng nhập địa chỉ email hợp lệ"
                                        },
                                        minLength: { value: 5, message: "Vui lòng nhập tối thiểu 5 ký tự"},
                                    }
                                )
                            } 
                            activeError={!!errors.email || !!errorsInertia}
                            onBlur={() => trigger('email')}
                            typeInput="email" 
                            title="Nhập email" 
                            autoComplete="email"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <MessageForm name="email" errors={allError} />
                    </>
                    <>
                        <InputGroupCustom
                            register={
                                register('password', 
                                    { 
                                        required: "Vui lòng nhập mật khẩu",
                                        minLength: {
                                            value: 4,
                                            message: "Vui lòng nhập ít nhất 4 ký tự"
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Vui lòng nhập tối đa 50 ký tự"
                                        },
                                    })
                            } 
                            activeError={!!errors.password || !!errorsInertia}
                            onBlur={() => trigger('password')}
                            title="Nhập mật khẩu" 
                            type={passwordToggle.isVisible ? "text" : "password"} 
                            onClick={passwordToggle.toggleVisibility} 
                            autoComplete="new-password"
                            icon={<FontAwesomeIcon icon={passwordToggle.isVisible ? faEyeSlash : faEye} />}
                        />
                        <MessageForm name="password" errors={allError} />
                    </>
                    <>
                        <InputGroupCustom
                            register={
                                register('password_confirmation',
                                    {
                                        required: "Vui lòng nhập lại mật khẩu",
                                        minLength: {
                                            value: 4,
                                            message: "Vui lòng nhập ít nhất 4 ký tự"
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Vui lòng nhập tối đa 50 ký tự"
                                    },
                                    }
                                )
                            } 
                            activeError={!!errors.password || !!errorsInertia}
                            onBlur={() => trigger('password_confirmation')}
                            title="Nhập lại mật khẩu" 
                            type={ passwordConfirmToggle.isVisible ? "text" : "password"} 
                            onClick={passwordConfirmToggle.toggleVisibility} 
                            autoComplete="new-password"
                            icon={<FontAwesomeIcon icon={passwordConfirmToggle.isVisible ? faEyeSlash : faEye} />}
                        />
                        <MessageForm name="password_confirmation" errors={allError} />
                    </>

                    <Button disabled={processing} className={clsx("w-100 mt-3")}>{processing ? 'Đang đăng ký...' : 'Đăng ký' }</Button>
                </Form>
            </div>
        </>
    );
}

export default Register;
