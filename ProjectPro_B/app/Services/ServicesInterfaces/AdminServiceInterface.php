<?php

namespace App\Services\ServicesInterfaces;

interface AdminServiceInterface
{
    public function getUsers();
    public function getProjects();
    public function updateProfile(array $data);
    public function desactivateUser(string $id);
    public function activateUser(string $id);
}