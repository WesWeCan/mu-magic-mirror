<?php

use App\Http\Controllers\BaseImageController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\PoolController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [FrontController::class, 'index'])->name('mirror');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/pool/upload', function () {
    return Inertia::render('PoolUploader');
})->middleware(['auth', 'verified'])->name('pool.upload');

Route::get('/pool/process', [PoolController::class, "poolProcessor"])->middleware(['auth', 'verified'])->name('pool.process');

Route::post('/pool/baseupload', [PoolController::class, 'uploadBase'])->middleware(['auth', 'verified'])->name('pool.base.upload');

Route::post('/pool/maskupload', [PoolController::class, 'uploadMasked'])->middleware(['auth', 'verified'])->name('pool.mask.upload');

Route::get('/pool/manager', function () {
    return Inertia::render('PoolManager');
})->middleware(['auth', 'verified'])->name('pool.manage');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
