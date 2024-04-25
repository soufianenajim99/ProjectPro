<?php

namespace App\Services;

use App\Models\Utilisateur;
use App\RepositoryInterfaces\UtilisateurRepositoryInterface;
use App\Services\ServicesInterfaces\UtilisateurServiceInterface;

class UtilisateurService implements UtilisateurServiceInterface
{

    private UtilisateurRepositoryInterface $utilisateurrepository;

    public function __construct(UtilisateurRepositoryInterface $utilisateurRepository) {
       $this->utilisateurrepository = $utilisateurRepository;
    }
    public function getInbox(){
     return $this->utilisateurrepository->getInbox();
    }
    public function refuser_invi(string $id){
        return $this->utilisateurrepository->refuser_invi($id);
    }

    public function accepter_invi(string $id){
        return $this->utilisateurrepository->accepter_invi($id);
    }

    public function getProjects(){
        return $this->utilisateurrepository->getProjects();
    }

    public function updateProfile(array $data){
        return $this->utilisateurrepository->updateProfile($data);
    }

}