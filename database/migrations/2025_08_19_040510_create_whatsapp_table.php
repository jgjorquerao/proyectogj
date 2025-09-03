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
        Schema::create('whatsapp', function (Blueprint $table) {
            $table->id(); // PK autoincrement

            $table->text('message');
            $table->timestamp('currentdate')->useCurrent();

            $table->boolean('client_message')
                ->comment('0: enviado por nosotros | 1: enviado por el cliente');

            $table->boolean('processed')
                ->default(0)
                ->comment('indica si ya fue procesado por el sistema');
            $table->unsignedBigInteger('conversation_id');
            $table->foreign('conversation_id')->references('id')->on('conversations')->onDelete('cascade');
            $table->string('wa_message_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('whatsapp');
    }
};
