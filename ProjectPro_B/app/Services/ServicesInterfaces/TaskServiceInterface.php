<?php

namespace App\Services\ServicesInterfaces;

interface TaskServiceInterface {
    public function storeTask(array $data);
    public function getTasks();

    public function deletetask(string $id);
    public function updateTask(array $data, string $id);
}