<?php

namespace App\Services;

use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\Services\ServicesInterfaces\ProductbacklogServiceInterface;

class ProductbacklogService implements ProductbacklogServiceInterface {

    private ProductbacklogRepositoryInterface $prorepo;
    public function __construct(ProductbacklogRepositoryInterface $prorepo) {
        $this->prorepo = $prorepo;
    }

    public function createProduct(array $data){
        return $this->prorepo->createProduct($data);
    }
}