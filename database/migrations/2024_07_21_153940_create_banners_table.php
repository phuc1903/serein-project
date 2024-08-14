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
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('collection',40)->nullable();
            $table->string('title',50)->nullable();
            $table->string('description',255)->nullable();
            $table->string('link', 255)->nullable();
            $table->string('image', 255)->nullable();
            $table->boolean('banner_show')->default(true)->nullable();
            $table->string('action', 30)->nullable();
            $table->string('background', 255)->nullable();
            $table->string('slug')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
