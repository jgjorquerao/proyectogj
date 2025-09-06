<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $table = 'schedules';

    protected $fillable = [
        'day',
        'start_hour',
        'end_hour',
        'enabled',
        'company_id',
    ];

    protected $casts = [
        'start_hour' => 'string',
        'end_hour' => 'string',
    ];

    public $timestamps = false;

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
    
    // Accessor para que start_hour no tenga segundos
    public function getStartHourAttribute($value)
    {
        return substr($value, 0, 5); // "HH:MM:SS" → "HH:MM"
    }

    // Accessor para que end_hour no tenga segundos
    public function getEndHourAttribute($value)
    {
        return substr($value, 0, 5);
    }
}
