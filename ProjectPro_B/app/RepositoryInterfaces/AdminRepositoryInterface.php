<?php


namespace App\RepositoryInterfaces;

use Illuminate\Http\Request;

interface AdminRepositoryInterface
{
    public function register(Request $request);
    public function getUsers();
    public function getProjects();
    public function updateProfile(array $data);
    public function desactivateUser(string $id);

    public function activateUser(string $id);


}