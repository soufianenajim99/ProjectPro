<?php

namespace App\Services;

use App\RepositoryInterfaces\ProjectRepositoryInterface;
use App\Services\ServicesInterfaces\ProjectServiceInterface;

class ProjectService implements ProjectServiceInterface
{

    private ProjectRepositoryInterface $projectrepository;

    public function __construct(ProjectRepositoryInterface $projectRepository) {
        $this->projectrepository = $projectRepository;
    }
    public function storeproject(array $data){
        return $this->projectrepository->storeproject($data);
    }
    public function deleteproject(string $id){
        return $this->projectrepository->deleteproject($id);
    }
    public function updateProject(array $data, string $id){
        return $this->projectrepository->updateProject($data,$id);
    }
    
}