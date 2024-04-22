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
}