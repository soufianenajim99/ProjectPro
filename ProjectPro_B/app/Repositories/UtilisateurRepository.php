<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Models\ProjectUtilisateur;
use App\Models\User;
use App\Models\Utilisateur;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use App\RepositoryInterfaces\UtilisateurRepositoryInterface;
use Carbon\Carbon;
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
       $user= Auth::guard('api')->user()->utilisateur()->first()->id;
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
        ->select('p.id as project_id', 'p.name as project_name', 'us2.username as scrum_master_username','us2.picture as scrum_master_picture','pu.id as invitation_id')
        ->where('pu.utilisateur_id', '=',$user )
        ->whereNull('pu.validated_at')
        ->get();
    
    return response()->json([
        'project_Inbox' => $result,
    ]);
    }

    public function refuser_invi(string $id){
         $pu = ProjectUtilisateur::findOrFail($id);
         $pu->delete();
         return response()->json([
            'invitation_supprimer' => $pu,
        ]);

    }
    public function accepter_invi(string $id){
         $pu = ProjectUtilisateur::findOrFail($id);
         $pu->validated_at = Carbon::now();
         $pu->save();
         return response()->json([
            'invitation_valider' => $pu,
        ]);

    }

    public function getProjects(){
    $projectData = DB::table('projects as p')
    ->join('project_utilisateur as pu', 'p.id', '=', 'pu.project_id')
    ->join('utilisateurs as ut', 'pu.utilisateur_id', '=', 'ut.id')
    ->join('users as u', 'ut.user_id', '=', 'u.id')
    ->whereIn('p.id', function($query) {
        $query->select('project_id')
              ->from('project_utilisateur')
              ->where('utilisateur_id', Auth::guard('api')->user()->utilisateur()->first()->id);
    })
    ->orderBy('p.name')
    ->get(['p.id as project_id', 'p.name as project_name', 'p.description as project_description', 'u.username', 'u.email','u.picture']);


    $projects = [];

    foreach ($projectData as $data) {
        $projects[$data->project_id]['name'] = $data->project_name;
        $projects[$data->project_id]['description'] = $data->project_description;
        $projects[$data->project_id]['id'] = $data->project_id;
        $projects[$data->project_id]['users'][] = [
            'username' => $data->username,
            'email' => $data->email,
            'picture' => $data->picture,
        ];
    }
    
    $projects = array_values($projects);
    
    return response()->json([
        'projects_list' => $projects,
    ]);
    }

    public function updateProfile(array $data){
        $current_user=Auth::guard('api')->user()->id;
        $user_con = User::findOrFail($current_user);
        $user_con->username = $data["username"];
        $user_con->email = $data["email"];
        $user_con->password = $data["password"];
        $user_con->save();
        return response()->json([
            'user_updated'=>'succefuly',
            'user_id' => $user_con,
            'data' => $data,
        ]);
    }









}