<?php

namespace App\Services\ServicesInterfaces;

interface ProjectServiceInterface
{
    public function storeproject(array $data);
    public function deleteproject(string $id);
}