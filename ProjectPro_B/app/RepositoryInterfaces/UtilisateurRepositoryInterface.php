<?php


namespace App\RepositoryInterfaces;

use Illuminate\Http\Request;

interface UtilisateurRepositoryInterface
{

    public function register(Request $request);
    public function getInbox();
    public function refuser_invi(string $id);
    public function accepter_invi(string $id);
    
    public function getProjects();
    public function getMyProjects();
    public function updateProfile(array $data);
    public function inboxCount();


  
   

}