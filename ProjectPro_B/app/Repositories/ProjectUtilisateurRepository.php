<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Models\Project;
use App\Models\ProjectUtilisateur;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use App\RepositoryInterfaces\ProjectUtilisateurRepositoryInterface;

class ProjectUtilisateurRepository implements ProjectUtilisateurRepositoryInterface
{
    public function addingMembers(array $data){
        $pu = ProjectUtilisateur::create($data);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'project' => $pu,
        ]);
    }
}