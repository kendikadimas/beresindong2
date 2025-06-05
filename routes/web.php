<?php

use Illuminate\Support\Facades\Route;

Route::get('/register', function () {
    return view('register'); // Kita akan membuat file Blade ini
})->name('register');

Route::get('/profile', function () {
    return view('profile');
})->name('profile');

// Rute untuk menampilkan landing page
Route::get('/', function () {
    return view('welcome'); // Mengembalikan view Blade bernama 'welcome'
})->name('home');


Route::get('/repairing', function () {
    return view('repairing'); // Kita akan membuat file Blade ini
})->name('repairing');