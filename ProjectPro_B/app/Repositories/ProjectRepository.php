<?php

namespace App\Repositories;

use App\Models\Inventory;
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
        $pu = ProjectUtilisateur::create($data);
        
        return response()->json([
            'project_id' => $project->id,
        ]);
    }

   
}