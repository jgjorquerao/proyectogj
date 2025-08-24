<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    
    protected $table = 'companies'; // opcional si el nombre sigue la convención

    protected $fillable = [
        'name', // agrega otros campos que quieras
    ];

    // Relación con usuarios
    public function users()
    {
        return $this->hasMany(User::class);
    }

    // Relación con conversaciones
    public function conversations()
    {
        return $this->hasMany(Conversation::class);
    }
}
