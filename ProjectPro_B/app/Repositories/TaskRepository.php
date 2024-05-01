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

    public function getTasks(){
        $tasks = Task::with('utilisateur.user')->get();
        return response()->json([
            'Tasks_list' => $tasks,
        ]);
    }

    public function deletetask(string $id){
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json([
            'task_deleted' => $task,
        ]);
    }

    public function updateTask(array $data, string $id){
        $task = Task::findOrFail($id);
        $task->column = $data['column'];
        $task->save();
        return response()->json([
            'task_updated'=>'succefuly',
            'task' => $task,
        ]);
    }
}