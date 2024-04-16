<?php


namespace App\RepositoryInterfaces;

use Illuminate\Http\Request;

interface AdminRepositoryInterface
{
    public function register(Request $request);
  
   

}