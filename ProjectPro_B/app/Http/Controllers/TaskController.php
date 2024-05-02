<?php

namespace App\Http\Controllers;

use App\RepositoryInterfaces\TaskRepositoryInterface;
use App\Services\ServicesInterfaces\TaskServiceInterface;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    protected $taskservice;

    public function __construct(TaskServiceInterface $taskser){
        $this->taskservice = $taskser;
    }

    public function storeTask(Request $request){
        $task = $request->only([
           'titre',
           'column',
           'description',
           'productbacklog_id',
           'utilisateur_id',
           'sprintbacklog_id',
        ]);

        return $this->taskservice->storeTask($task);
    }

    public function getTasks(){
        return $this->taskservice->getTasks();
    }

    public function deletetask(string $id){
        return $this->taskservice->deletetask($id);
    }

    public function updateTask(Request $request, string $id){
        $data = $request->only([
          'column',
        ]);
        return $this->taskservice->updateTask($data,$id);
      }


}