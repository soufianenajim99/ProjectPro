<?php


namespace App\RepositoryInterfaces;

use Illuminate\Http\Request;

interface ProjectRepositoryInterface
{

    public function storeproject(array $data);
    public function deleteproject(string $id);
  
   
}