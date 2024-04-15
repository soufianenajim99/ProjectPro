<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\RepositoryInterfaces\AuthRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
 
class AuthController extends Controller
{
    
    protected $authRepository;

    public function __construct(AuthRepositoryInterface $authRepository)
    {
        $this->$authRepository = $authRepository;
    }

    public function login(Request $request)
    {
       $this->authRepository->login($request);
    }

    public function register(Request $request){
    $this->authRepository->register($request);
    }

    public function logout()
    {
        $this->authRepository->logout();
    }

    public function refresh()
    {
       $this->authRepository->refresh();
    }




}