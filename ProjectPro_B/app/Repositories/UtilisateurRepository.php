<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Models\User;
use App\Models\Utilisateur;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use App\RepositoryInterfaces\UtilisateurRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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

        $image = $request->file('files');
        $imageName = time().'.'.$image->getClientOriginalExtension();
        $request->file('files')->storeAs('images/profile/',$imageName,'public');


        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->picture = $imageName;

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


    public function getInbox(){
        // $user_id=Auth::guard('api')->user()->utilisateur()->first()->id;

        // Get the Project ID
        $result_project = DB::table('project_utilisateur')
        ->join('utilisateurs', 'project_utilisateur.utilisateur_id', '=', 'utilisateurs.id')
        ->join('users', 'utilisateurs.user_id', '=', 'users.id')
        ->join('projects', 'project_utilisateur.project_id', '=', 'projects.id')
        ->select('projects.id')
        ->where('project_utilisateur.utilisateur_id', '=', 5)
        ->whereNull('project_utilisateur.validated_at')
        ->get();
        // $result_prj_id=$result_project->id;

        // Get the Scrum master
        $result_scrum  = DB::table('project_utilisateur')
        ->join('utilisateurs', 'project_utilisateur.utilisateur_id', '=', 'utilisateurs.id')
        ->join('users', 'utilisateurs.user_id', '=', 'users.id')
        ->join('projects', 'project_utilisateur.project_id', '=', 'projects.id')
        ->select('users.username', 'projects.name')
        ->where('project_utilisateur.project_id', '=', 25)
        ->where('project_utilisateur.role', '=', 'scrum master')
        ->get();




        $result = DB::table('project_utilisateur as pu')
        ->join('utilisateurs as u', 'pu.utilisateur_id', '=', 'u.id')
        ->join('users as us', 'u.user_id', '=', 'us.id')
        ->join('projects as p', 'pu.project_id', '=', 'p.id')
        ->join('project_utilisateur as pu2', function ($join) {
            $join->on('p.id', '=', 'pu2.project_id')
                 ->where('pu2.role', '=', 'scrum master');
        })
        ->join('utilisateurs as u2', 'pu2.utilisateur_id', '=', 'u2.id')
        ->join('users as us2', 'u2.user_id', '=', 'us2.id')
        ->select('p.id as project_id', 'p.name as project_name', 'us2.username as scrum_master_username','us2.picture as scrum_master_picture')
        ->where('pu.utilisateur_id', '=', 5)
        ->whereNull('pu.validated_at')
        ->get();
    



    return response()->json([
        'project_Inbox' => $result,
    ]);
    }
}