<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Models\Project;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use Illuminate\Http\Request;

class ProjectRepository implements ProjectRepositoryInterface
{
    public function storeproject(array $data){
        $project = Project::create($data);
        return response()->json([
            'project_id' => $project->id,
        ]);
    }

   
}