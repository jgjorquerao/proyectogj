<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layouts.app');
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/contact', [App\Http\Controllers\HomeController::class, 'send'])->name('contact.send');

Route::get('/privacy_policies', [App\Http\Controllers\HomeController::class, 'privacy_policies'])->name('privacy_policies');