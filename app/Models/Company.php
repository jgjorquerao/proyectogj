<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Company extends Model
{
    use HasFactory;

    protected $table = 'companies';

    public $timestamps = false;

    protected $fillable = [
        'name',
    ];

    protected static function boot()
    {
        parent::boot();

        // Este código se ejecuta justo ANTES de crear un registro en la BD
        static::creating(function ($model) {
            if (empty($model->uuid)) {
                // Genera un UUID único y lo asigna al campo "uuid"
                $model->uuid = (string) Str::uuid();
            }
        });
    }


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
