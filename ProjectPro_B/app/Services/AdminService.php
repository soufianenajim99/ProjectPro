<?php

namespace App\Services;

use App\RepositoryInterfaces\AdminRepositoryInterface;
use App\Services\ServicesInterfaces\AdminServiceInterface;

class AdminService implements AdminServiceInterface
{

    private AdminRepositoryInterface $adminrepository;

    public function __construct(AdminRepositoryInterface $adminrepository) {
        $this->adminrepository = $adminrepository;
    }
    public function getUsers(){
        return $this->adminrepository->getUsers();
    }
    public function getProjects(){
        return $this->adminrepository->getProjects();
    }
    
}