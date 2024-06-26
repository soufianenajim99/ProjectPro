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
        'column',
        'productbacklog_id',
        'utilisateur_id',
        'sprintbacklog_id',
    ];

    protected $attributes = [
        'column' => 'todo',
        'description' =>'description'
    ];
    public function productbacklog(): BelongsTo
    {
        return $this->belongsTo(Productbacklog::class);
    }
    public function sprintbacklog(): BelongsTo
    {
        return $this->belongsTo(Sprintbacklog::class);
    }
    public function utilisateur(): BelongsTo
    {
        return $this->belongsTo(Utilisateur::class);
    }
}