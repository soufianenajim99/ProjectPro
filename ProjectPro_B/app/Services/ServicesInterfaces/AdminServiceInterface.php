<?php

namespace App\Services\ServicesInterfaces;

interface AdminServiceInterface
{
    public function getUsers();
    public function getProjects();
    public function updateProfile(array $data);
}