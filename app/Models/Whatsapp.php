<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Whatsapp extends Model
{
    protected $table = 'whatsapp';
    public $timestamps = false;

    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }
}