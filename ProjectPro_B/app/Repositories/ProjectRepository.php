<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Models\Productbacklog;
use App\Models\Project;
use App\Models\ProjectUtilisateur;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectRepository implements ProjectRepositoryInterface
{
    public function storeproject(array $data){
        $project = Project::create($data);


        $scrum_id =Auth::guard('api')->user()->utilisateur()->first()->id;

        $data = [
            'utilisateur_id' => $scrum_id,
            'project_id' => $project->id,
            'validated_at' => Carbon::now(),
            'role' => "scrum master",
        ];

        $backlogdata = [
            'project_id'=> $project->id,
            'description' => 'Product Backlog for '.$project->name
        ];

        Productbacklog::create($backlogdata);
        $pu = ProjectUtilisateur::create($data);
        

        
        return response()->json([
            'project_id' => $project->id,
        ]);
    }
    public function deleteproject(string $id){
        $project = Project::findOrFail($id);
        $project->delete();
        
        return response()->json([
            'project_deleted' => $project,
        ]);
    }


    public function updateProject(array $data, string $id){
        $project = Project::findOrFail($id);
        $project->name = $data['name'];
        $project->description = $data['description'];
        $project->save();
        return response()->json([
            'project_updated'=>'succefuly',
            'project' => $project,
            'data' => $data,
        ]);
    }

   
}