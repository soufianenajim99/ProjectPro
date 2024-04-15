<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    use HasFactory;


    protected $fillable =[
        'name',
        'description',
    ];





    public function utilisateurs(): BelongsToMany
    {
        return $this->belongsToMany(Utilisateur::class,'project_utilisateur','project_id','utilisateur_id')->using(ProjectUtilisateur::class)->withPivot('role');
    }
}