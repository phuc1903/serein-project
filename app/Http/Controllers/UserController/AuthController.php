<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLoginRequest;
use App\Http\Requests\StoreRegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller
{

    public function changePassword(User $user) 
    {
        // Gate::authorize('changePassword', $user);

        return view('auth.change-password', ['user' => $user]);
    }

    public function changePasswordStore(Request $request, User $user)
    {
        $request->validate([
            'passwordOld' => 'required|min:3|max:255',
            'password' => 'required|min:3|max:255|confirmed',
        ]);

        if (Hash::check($request->passwordOld, $user->password)) {
            $user->update(['password' => Hash::make($request->password)]);
            return redirect()->route('info')->with('success', 'Thay đổi mật khẩu thành công');
        } else {
            return redirect()->back()->with('error', 'Mật khẩu cũ sai');
        }
    }

    // Page Đăng nhập
    public function login()
    {
        return inertia('User/Auth/Login/Index');
    }
    
    // Handler đăng nhập
    public function loginStore(StoreLoginRequest $request)
    {
        $request->validated();
        if (Auth::guard('web')->attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            return redirect()->route('home')->with('notify', ['type' => 'success', 'message' => 'Đăng nhập thành công']);
        }
        return back()->with('notify', ['type' => 'error', 'message' => 'Đăng nhập thất bại']);
    }

    // Page đăng ký
    public function register()
    {
        return inertia('User/Auth/Register/Index');
    }

    // Handler đăng ký
    public function registerStore(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:40',
            'email' => 'required|email',
            'password' => 'required|min:4|max:50|confirmed'
        ]);
        // $user = User::create([
        //     'name' => $request->fullname,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password)
        // ]);

        // // dispatch(new SendCreateAccountMailJob($user));

        // Auth::login($user);

        // // event(new Registered($user));

        // return redirect()->route('home')->with("notify", ['type' => 'success', 'message' => 'Đăng ký thành công và bạn đã được đăng nhập']);
    }

    // Handler đăng xuất tài khoản
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home')->with('notify', ['type' => 'success', 'message' => 'Đăng xuất thành công']);
    }

    // Page Đổi mật khẩu

    

    // Page thông báo xác nhận email
    public function verifyNotice() 
    {
        return view('auth.verify-email');
    }

    // Handler xử lý xác nhận email
    public function verifyEmail(EmailVerificationRequest $request) {
        $request->fulfill();
     
        return redirect()->route('home')->with('success', 'Xác minh thành công');
    }

    // Handler gửi lại email xác nhận email
    public function verifyHandler(Request $request) {
        $request->user()->sendEmailVerificationNotification();
     
        return back()->with('success', 'Đã gửi liên kết xác minh!');
    }

    // Page gửi email xác nhận đổi mật khẩu
    public function forgotPassword() {
        return inertia('User/Auth/ForgotPassword/Index');
    }

    // Sending token resset password
    public function passwordEmail(Request $request) {
        $request->validate(['email' => 'required|email']);
     
        $status = Password::sendResetLink(
            $request->only('email')
        );
     
        return $status === Password::RESET_LINK_SENT
                    ? back()->with(['success' => __($status)])
                    : back()->with(['error' => __($status)]);
    }

    public function passwordReset(string $token) {
        return inertia('User/Auth/ResetPassword/Index', ['token' => $token]);
    }

    public function passwordUpdate(Request $request) {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);
     
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));
     
                $user->save();
     
                event(new PasswordReset($user));
            }
        );
     
        return $status === Password::PASSWORD_RESET
                    ? redirect()->route('login')->with('success', __($status))
                    : back()->with(['error' => [__($status)]]);
    }
}
