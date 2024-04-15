<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sprintbacklog extends Model
{
    use HasFactory;

    protected $fillable =[
        'description',
        'status',
        'sprint_id',
    ];

    public function sprint(): BelongsTo
    {
        return $this->belongsTo(Sprint::class);
    }

    public function sprinttasks(): HasMany
    {
        return $this->hasMany(SprintTask::class);
    }

}