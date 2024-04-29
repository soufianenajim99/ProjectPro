<?php

namespace App\Http\Controllers;

use App\Services\ServicesInterfaces\ProductbacklogServiceInterface;
use Illuminate\Http\Request;

class ProductbacklogController extends Controller
{
    protected $productService;
    public function __construct(ProductbacklogServiceInterface $productService)
    {
        $this->productService = $productService;
    }


    public function createBacklog(Request $request){
        $backlog = $request->only([
            'description',
            'project_id',
        ]);
        return $this->productService->createProduct($backlog);
    }
}