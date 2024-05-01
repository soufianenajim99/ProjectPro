<?php

namespace App\Services;

use App\RepositoryInterfaces\TaskRepositoryInterface;
use App\Services\ServicesInterfaces\TaskServiceInterface;

class TaskService implements TaskServiceInterface {

    private TaskRepositoryInterface $taskrepo;

    public function __construct(TaskRepositoryInterface $taskrepo){
        $this->taskrepo = $taskrepo;
    }

    public function storeTask(array $data){
       return $this->taskrepo->storeTask($data);
    } 

    public function getTasks(){
        return $this->taskrepo->getTasks();
    }

    public function deletetask(string $id){
        return $this->taskrepo->deletetask($id);
    }

}