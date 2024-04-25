<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ProjectUtilisateur extends Pivot
{
    use HasFactory;

    protected $fillable =[
        'project_id',
        'utilisateur_id',
        'role',
        'validated_at'
    ];

    protected $attributes = [
        'validated_at'=> null
    ];

    protected $dates = ['created_at', 'updated_at', 'validated_at'];
}