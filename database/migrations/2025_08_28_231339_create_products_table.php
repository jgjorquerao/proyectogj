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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("brand");
            $table->string("model");
            $table->string("year");
            $table->integer("price");
            $table->text("description")->nullable();
            $table->string("url_image")->nullable();
            $table->string("url_original_image")->nullable();
            $table->string("croppie_points")->nullable();
            $table->string("croppie_zoom")->nullable();
            $table->string("croppie_viewport")->nullable();
            $table->integer("croppie_orientation")->nullable();
            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};