<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::patch('/task/change-status/{task}' , [TaskController::class, 'cycleStatus'])->name('task.cycle');
// Route::get('/task/walawe' , function () {
//     return response()->json('test route');
// })->name('task.test');
