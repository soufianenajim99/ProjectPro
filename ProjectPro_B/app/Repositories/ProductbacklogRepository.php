<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Models\Productbacklog;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;

class ProductbacklogRepository implements ProductbacklogRepositoryInterface
{
    
    public function createProduct(array $data){
        $productBacklog = Productbacklog::create($data);
        return response()->json([
            'product_created' => $productBacklog,
        ]);
    }
}