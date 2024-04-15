<?php


namespace App\RepositoryInterfaces;

use Illuminate\Http\Request;

interface AuthRepositoryInterface
{
    public function login(Request $request);
    public function register(Request $request);
    public function logout();
    public function refresh();

}