<?php


namespace App\RepositoryInterfaces;

use Illuminate\Http\Request;

interface TaskRepositoryInterface
{
    public function storeTask(array $data);

    public function getTasks();
    public function deletetask(string $id);

    public function updateTask(array $data, string $id);
   
}