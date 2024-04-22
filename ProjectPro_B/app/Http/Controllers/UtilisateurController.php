<?php

namespace App\Http\Controllers;

use App\RepositoryInterfaces\UtilisateurRepositoryInterface;
use Illuminate\Http\Request;

class UtilisateurController extends Controller
{
    protected $utiliRepository;

    public function __construct(UtilisateurRepositoryInterface $utiliRepository)
    {
        $this->utiliRepository = $utiliRepository;
    }
    public function register(Request $request){
        return $this->utiliRepository->register($request);
        }




        public function getInbox(){
            return $this->utiliRepository->getInbox();
        }
}