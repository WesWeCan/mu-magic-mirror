<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mask_images', function (Blueprint $table) {
            $table->id();


            $table->string('label');
            $table->string('path');

            $table->foreignId('base_image_id')->constrained('base_images')->onDelete('cascade');

            $table->boolean('included')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mask_images');
    }
};
