<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Utilisateur extends Model
{
    use HasFactory;

    protected $fillable =[
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class,'project_utilisateur','utilisateur_id','project_id')->using(ProjectUtilisateur::class)->withPivot('role');
    }
}