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
        Schema::create('conversations', function (Blueprint $table) {
            $table->id(); // PK autoincrement
            /* $table->string('name');
            $table->string('client_phone');
            $table->unsignedBigInteger('company_id'); */
            $table->unsignedBigInteger('user_id')->nullable(); // usuario asignado, opcional
            $table->boolean('control_status')
                ->default(1)
                ->comment('0: manual | 1: agente ia');

            // Llaves foráneas
            /* $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade'); */
            $table->unsignedBigInteger('client_id');
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conversations');
    }
};
