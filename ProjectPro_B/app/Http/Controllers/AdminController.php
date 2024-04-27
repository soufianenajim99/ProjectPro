<?php

namespace App\Http\Controllers;

use App\RepositoryInterfaces\AdminRepositoryInterface;
use App\Services\ServicesInterfaces\AdminServiceInterface;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    protected $adminRepository;
    protected $adminservice;

    public function __construct(AdminRepositoryInterface $adminRepository,AdminServiceInterface $adminservice)
    {
        $this->adminRepository = $adminRepository;
        $this->adminservice = $adminservice;

    }
    public function register(Request $request){
        return $this->adminRepository->register($request);
        }
    public function getUsers(){
        return $this->adminservice->getUsers();
        }
    public function getProjects(){
        return $this->adminservice->getProjects();
        }
    
        public function updateProfile(Request $request){
            $data = $request->only([
                'username',
                'email',
                'password'
              ]);
              return $this->adminservice->updateProfile($data);
        }

    public function desactivateUser(string $id){
        return $this->adminservice->desactivateUser($id);
    }

    public function activateUser(string $id){
        return $this->adminservice->activateUser($id);
    }

    public function removeProject(string $id){
        return $this->adminservice->removeProject($id);
    }

    public function approveProject(string $id){
        return $this->adminservice->approveProject($id);
    }

}