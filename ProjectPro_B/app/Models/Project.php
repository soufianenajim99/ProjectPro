<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Project extends Model
{
    use HasFactory;


    protected $fillable =[
        'name',
        'description',
    ];

    protected $attributes = [
        'status' => 'active',
    ];


    public function productbacklog(): HasOne
    {
        return $this->hasOne(Productbacklog::class);
    }

    public function sprints(): HasMany
    {
        return $this->hasMany(Sprint::class);
    }

    public function utilisateurs(): BelongsToMany
    {
        return $this->belongsToMany(Utilisateur::class,'project_utilisateur','project_id','utilisateur_id')->using(ProjectUtilisateur::class)->withPivot('role');
    }
}