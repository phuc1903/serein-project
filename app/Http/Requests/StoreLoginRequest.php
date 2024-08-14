<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLoginRequest extends FormRequest
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
            'email' => 'required|email',
            'password' => 'required|min:4|max:50'
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Vui lòng nhập email .',
            'email.email' => 'Trường này phải là email.',
            'password.required' => 'Vui lòng nhập mật khẩu.',
            'password.min' => 'Mật khẩu phải có ít nhất 4 ký tự.',
            'password.max' => 'Mật khẩu nhiều nhất là 50 ký tự.',
        ];
    }
}
