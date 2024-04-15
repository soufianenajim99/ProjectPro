<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SprintTask extends Model
{
    use HasFactory;

    protected $fillable =[
        'titre',
        'description',
        'status',
        'sprintbacklog_id',
        'utilisateur_id',
    ];

    public function sprintbacklog(): BelongsTo
    {
        return $this->belongsTo(Sprintbacklog::class);
    }



}