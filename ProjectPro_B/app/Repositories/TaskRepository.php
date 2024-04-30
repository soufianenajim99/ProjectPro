<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Models\Task;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use App\RepositoryInterfaces\TaskRepositoryInterface;

class TaskRepository implements TaskRepositoryInterface
{
    public function storeTask(array $data){
      $task = Task::create($data);

      return response()->json([
        'Task_Created' => $task,
    ]);
    }
}