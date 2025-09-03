<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;

    protected $table = 'conversations'; // opcional si el nombre sigue la convención

    // Campos que se pueden llenar en mass assignment
    protected $fillable = [
        'client_id',
        'control_status',
        'user_id',
    ];

    public $timestamps = false;

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    // Relación con usuario asignado
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación con mensajes
    public function messages()
    {
        return $this->hasMany(Whatsapp::class, 'conversation_id');
    }
}
