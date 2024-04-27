<?php

namespace App\Http\Controllers;

use App\RepositoryInterfaces\UtilisateurRepositoryInterface;
use App\Services\ServicesInterfaces\UtilisateurServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UtilisateurController extends Controller
{
    protected $utiliRepository;
    protected $utiliService;

    public function __construct(UtilisateurRepositoryInterface $utiliRepository,UtilisateurServiceInterface $utiliService)
    {
        $this->utiliRepository = $utiliRepository;
        $this->utiliService = $utiliService;
    }
    public function register(Request $request){
        return $this->utiliRepository->register($request);
        }
        public function getInbox(){
            return $this->utiliRepository->getInbox();
        }

        public function refuser_invi(string $id){
            return $this->utiliRepository->refuser_invi($id);
           
        }
        
        public function accepter_invi(string $id){
            return $this->utiliRepository->accepter_invi($id);
        }

        public function getProjects(){
            return $this->utiliService->getProjects();
        }
        public function getMyProjects(){
            return $this->utiliService->getMyProjects();
        }
        public function updateProfile(Request $request){
            $data = $request->only([
                'username',
                'email',
                'password'
              ]);
              return $this->utiliService->updateProfile($data);
        }

        public function inboxCount(){
           return $this->utiliService->inboxCount();
        }


}
        