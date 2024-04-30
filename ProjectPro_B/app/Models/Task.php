<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    protected $fillable =[
        'titre',
        'description',
        'status',
        'productbacklog_id',
        'utilisateur_id',
    ];

    protected $attributes = [
        'status' => 'todo',
    ];
    public function productbacklog(): BelongsTo
    {
        return $this->belongsTo(Productbacklog::class);
    }
    public function utilisateur(): BelongsTo
    {
        return $this->belongsTo(Utilisateur::class);
    }
}