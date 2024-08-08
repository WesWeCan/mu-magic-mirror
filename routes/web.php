<?php

use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\BaseImageController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\MaskImageController;
use App\Http\Controllers\PoolController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [FrontController::class, 'index'])->name('mirror');
Route::post('/archive', [FrontController::class, 'archive'])->name('upload');


Route::prefix('/pool')->middleware(['auth', 'verified'])->group(function () {

    Route::get('/', function(){
        return redirect()->route('pool.manage');
    });

    Route::get('/upload', [PoolController::class, "upload"])->name('pool.upload');

    Route::get('/process', [PoolController::class, "poolProcessor"])->name('pool.process');

    Route::post('/baseupload', [PoolController::class, 'uploadBase'])->name('pool.base.upload');

    Route::post('/maskupload', [PoolController::class, 'uploadMasked'])->name('pool.mask.upload');
    Route::delete('/maskupload/{id}', [PoolController::class, 'deleteMasked'])->name('pool.mask.destroy');


    Route::post('/markasprocessed/{id}', [PoolController::class, 'markAsProcessed'])->name('pool.markasprocessed');

    Route::get('/manager', [PoolController::class, "poolManager"])->name('pool.manage');

    Route::get("/archive", [ArchiveController::class, "archive"])->name('pool.archive');
    Route::delete("/archive/{id}", [ArchiveController::class, "destroy"])->name('pool.archive.destroy');
});


Route::prefix('/baseimage')->middleware(['auth', 'verified'])->group(function () {
    Route::patch('/set-processed', [BaseImageController::class, 'setProcessed'])->name('baseimage.setprocessed');
    Route::delete('/{id}', [BaseImageController::class, 'destroy'])->name('baseimage.destroy');
    Route::patch('/set-title', [BaseImageController::class, 'setTitle'])->name('baseimage.settitle');
    Route::patch('/set-description', [BaseImageController::class, 'setLink'])->name('baseimage.setlink');
});

Route::prefix('/maskimage')->middleware(['auth', 'verified'])->group(function () {
    Route::patch('/set-included', [MaskImageController::class, 'setIncluded'])->name('maskimage.setincluded');
    Route::delete('/{id}', [MaskImageController::class, 'destroy'])->name('maskimage.destroy');
    Route::patch('/set-label', [MaskImageController::class, 'setLabel'])->name('maskimage.setlabel');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
