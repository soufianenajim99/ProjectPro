<?php

namespace App\Services\ServicesInterfaces;

interface AdminServiceInterface
{
    public function getUsers();
    public function getProjects();
    public function updateProfile(array $data);
    public function desactivateUser(string $id);
    public function activateUser(string $id);

    public function removeProject(string $id);
    public function approveProject(string $id);
}