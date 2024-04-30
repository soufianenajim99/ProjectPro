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
           'status',
           'description',
           'productbacklog_id',
           'utilisateur_id'
        ]);

        return $this->taskservice->storeTask($task);
    }


}