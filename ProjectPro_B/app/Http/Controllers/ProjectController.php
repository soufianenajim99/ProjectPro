<?php

namespace App\Http\Controllers;

use App\Services\ServicesInterfaces\ProjectServiceInterface;
use App\Services\ServicesInterfaces\ProjectUtilisateurServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProjectController extends Controller
{
    protected $projectService;
    protected $projectUtilisateurService;
              
    public function __construct(ProjectServiceInterface $projectService,ProjectUtilisateurServiceInterface $projectUtilisateurService)
    {
        $this->projectService = $projectService;
        $this->projectUtilisateurService = $projectUtilisateurService;
    }
    public function createproject(Request $request){
          $project = $request->only([
            'name',
            'description'
          ]);
          return response()->json(
            [
                'data' => $this->projectService->storeproject($project)
            ],
            Response::HTTP_CREATED
        );

    }
    public function addingMembers(Request $request){
          $projectutilisateur = $request->only([
            'utilisateur_id',
            'project_id',
            'role'
          ]);
          return response()->json(
            [
                'data' => $this->projectUtilisateurService->addingMembers($projectutilisateur)
            ],
            Response::HTTP_CREATED
        );

    }

    public function deleteproject(string $id){
      return $this->projectService->deleteproject($id);
    }

    public function updateProject(Request $request, string $id){
      $data = $request->only([
        'name',
        'description',
      ]);
      return $this->projectService->updateProject($data,$id);
    }


}