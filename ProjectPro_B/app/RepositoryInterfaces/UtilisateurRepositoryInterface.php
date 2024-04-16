<?php


namespace App\RepositoryInterfaces;

use Illuminate\Http\Request;

interface UtilisateurRepositoryInterface
{

    public function register(Request $request);
  
   

}