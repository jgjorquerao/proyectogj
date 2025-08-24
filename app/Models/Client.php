<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory;

    // Tabla asociada
    protected $table = 'clients';

    // Campos que se pueden asignar masivamente
    protected $fillable = [
        'name',
        'rut',
        'phone',
        'company_id',
    ];

    public $timestamps = false;

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function conversations()
    {
        return $this->hasMany(Conversation::class);
    }
}
