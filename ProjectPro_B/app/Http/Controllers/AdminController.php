<?php

namespace App\Http\Controllers;

use App\Repositories\AdminRepository;
use App\RepositoryInterfaces\AdminRepositoryInterface;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    protected $adminRepository;

    public function __construct(AdminRepositoryInterface $adminRepository)
    {
        $this->adminRepository = $adminRepository;
    }
    public function register(Request $request){
        $this->adminRepository->register($request);
        }
}