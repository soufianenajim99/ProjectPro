<?php

namespace App\Services\ServicesInterfaces;

interface UtilisateurServiceInterface
{
    public function getInbox();
    public function refuser_invi(string $id);
    public function accepter_invi(string $id);
    public function getProjects();
    public function getMyProjects();
    public function updateProfile(array $data);
    public function inboxCount();
    

}