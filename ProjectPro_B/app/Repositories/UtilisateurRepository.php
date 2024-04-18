<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Models\User;
use App\Models\Utilisateur;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use App\RepositoryInterfaces\UtilisateurRepositoryInterface;
use Illuminate\Support\Facades\Auth;

class UtilisateurRepository implements UtilisateurRepositoryInterface
{
    public function register($request){
       
        $utilisateur = new Utilisateur;
        $user = new User;
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        // $file = $request->picture->name;
        // dd($file);
        // $fileName = date('His').$filename;
        // $request->picture->storeAs('images/','test','public');

        
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        // $user->picture = $fileName;

        $user->save();

        $utilisateur->user_id = $user->id;

        $utilisateur->save();

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
}