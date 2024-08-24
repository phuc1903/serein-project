<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController\AboutController;
use App\Http\Controllers\UserController\AuthController;
use App\Http\Controllers\UserController\ContactController;
use App\Http\Controllers\UserController\DetailController;
use App\Http\Controllers\UserController\HomeController;
use App\Http\Controllers\UserController\InfoController;
use App\Http\Controllers\UserController\ShopController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/shop', [ShopController::class, 'index'])->name('shop');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/detail/{product}', [DetailController::class, 'index'])->name('show');

Route::controller(AuthController::class)->group(function() {
    Route::get('/login', 'login')->name('login');
    Route::post('/login', 'loginStore')->name('login.store');
    Route::get('/register', 'register')->name('register');
    Route::post('/register', 'registerStore')->name('register.store');
    Route::get('/forgot-password', 'forgotPassword')->name('forgot-password');
    Route::get('/change-password', 'changePassword')->name('change-password');
    Route::get('/reset-password', 'passwordReset')->name('reset-password');
    Route::get('/logout', 'logout')->name('logout');
});

Route::get('/info', [InfoController::class, 'index'])->name('info');

Route::controller(ShopController::class)->group(function() {
    Route::get('/shop/{category}', 'index')->name('shop.category');
});