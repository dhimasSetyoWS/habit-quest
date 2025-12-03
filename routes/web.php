<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'gwprops' => "Test123"
    ]);
})->name("welcome");


Route::prefix('/dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Dashboard');
    })->name('dashboard');
});

Route::prefix('/dashboard/tasks')->controller(TaskController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', 'index')->name('dashboard.tasks.index');
    Route::get('/create', 'create')->name('dashboard.tasks.create');
    Route::post('/store', 'store')->name('dashboard.tasks.store');
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__ . '/auth.php';
require __DIR__ . '/service.php';
