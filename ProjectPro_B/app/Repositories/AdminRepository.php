<?php
 
namespace App\Repositories;

use App\Models\Admin;
use App\Models\Project;
use App\Models\User;
use App\RepositoryInterfaces\AdminRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminRepository implements AdminRepositoryInterface
{
   
    public function register($request){
       
        $admin = new Admin;
        $user = new User;
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;

        $user->save();

        $admin->user_id = $user->id;

        $admin->save();

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
    public function getUsers(){
        $users=User::withTrashed()->get();
        return response()->json([
            'users'=>$users,
        ]);
    }
    public function getProjects(){
        $projetcs=Project::all();
        return response()->json([
            'Projects'=>$projetcs,
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


    public function desactivateUser(string $id){
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json([
            'user_deleted'=>$user,
        ]);
       }
       public function activateUser(string $id){
        $user = User::withTrashed()->findOrFail($id);
        $user->restore();
        return response()->json([
            'user_restored'=>$user,
        ]);
       }

  





}