<?php

namespace App\Services;

use App\Repositories\ProjectUtilisateurRepository;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use App\RepositoryInterfaces\ProjectUtilisateurRepositoryInterface;
use App\Services\ServicesInterfaces\ProjectServiceInterface;
use App\Services\ServicesInterfaces\ProjectUtilisateurServiceInterface;

class ProjectUtilisateurService implements ProjectUtilisateurServiceInterface
{

    private ProjectUtilisateurRepositoryInterface $projectUtilisateurrepository;

    public function __construct(ProjectUtilisateurRepositoryInterface $projectUtilisateurRepository) {
        $this->projectUtilisateurrepository = $projectUtilisateurRepository;
    }
    public function addingMembers(array $data){
        return $this->projectUtilisateurrepository->addingMembers($data);
    
    }
}