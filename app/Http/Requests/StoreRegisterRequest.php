<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|min:3|max:40',
            'email' => 'required|email',
            'password' => 'required|min:4|max:50|confirmed'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => "Vui lòng nhập Họ và tên",
            'name.min' => "Vui lòng nhập ít nhất 4 ký tự",
            'name.max' => "Vui lòng nhập tối đa 40 ký tự",
            'email.required' => 'Vui lòng nhập email .',
            'email.email' => 'Trường này phải là email.',
            'password.required' => 'Vui lòng nhập mật khẩu.',
            'password.min' => 'Mật khẩu phải có ít nhất 4 ký tự.',
            'password.max' => 'Mật khẩu nhiều nhất là 50 ký tự.',
            'password.confirmed' => 'Mật khẩu và xác nhận mật khẩu không khớp.',
        ];
    }
}
