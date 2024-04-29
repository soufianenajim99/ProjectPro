<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductbacklogController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UtilisateurController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//admin

Route::controller(AdminController::class)->group(function () {
    Route::post('admin/register', 'register');
    Route::get('admin/getusers', 'getUsers');
    Route::get('admin/getprojects', 'getProjects');
    Route::post('admin/updateProfile', 'updateProfile');
    Route::patch('admin/desactivateUser/{id}', 'desactivateUser');
    Route::patch('admin/activateUser/{id}', 'activateUser');
    Route::patch('admin/removeProject/{id}', 'removeProject');
    Route::patch('admin/approveProject/{id}', 'approveProject');
   
});

//utilisateur
Route::controller(UtilisateurController::class)->group(function () {
    Route::post('utilisateur/register', 'register');
    Route::get('utilisateur/inbox', 'getInbox');
    Route::get('utilisateur/refuser_invi/{id}', 'refuser_invi');
    Route::get('utilisateur/accepter_invi/{id}', 'accepter_invi');
    Route::get('utilisateur/getProjects', 'getProjects');
    Route::get('utilisateur/getMyProjects', 'getMyProjects');
    Route::post('utilisateur/updateProfile', 'updateProfile');
    Route::get('utilisateur/inboxCount', 'inboxCount');
});


//productBacklog

Route::controller(ProductbacklogController::class)->group(function () {
    Route::post('Productbacklog/store', 'createBacklog');

});






//projects
Route::controller(ProjectController::class)->group(function () {
    Route::post('project/create', 'createproject');
    Route::post('project/addMembers', 'addingMembers');
    Route::delete('project/deleteproject/{id}', 'deleteproject');
    Route::patch('project/updateProject/{id}', 'updateProject');
});


//authenteififcation


Route::post('login', [AuthController::class,'login']);
Route::post('refresh', [AuthController::class,'refresh']);
Route::get('authuser', [AuthController::class,'authUser']);
Route::get('logout', [AuthController::class,'logout']);
Route::get('users', [AuthController::class,'users']);