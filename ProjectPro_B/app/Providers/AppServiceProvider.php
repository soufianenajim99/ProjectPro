<?php

namespace App\Providers;

use App\Models\Admin;
use App\Models\User;
use App\Repositories\AdminRepository;
use App\Repositories\AuthRepository;
use App\Repositories\ProductbacklogRepository;
use App\Repositories\ProjectRepository;
use App\Repositories\ProjectUtilisateurRepository;
use App\Repositories\SprintbacklogRepository;
use App\Repositories\SprintRepository;
use App\Repositories\SprintTaskRepository;
use App\Repositories\TaskRepository;
use App\Repositories\UtilisateurRepository;
use App\RepositoryInterfaces\AdminRepositoryInterface;
use App\RepositoryInterfaces\AuthRepositoryInterface;
use App\RepositoryInterfaces\ProductbacklogRepositoryInterface;
use App\RepositoryInterfaces\ProjectRepositoryInterface;
use App\RepositoryInterfaces\ProjectUtilisateurRepositoryInterface;
use App\RepositoryInterfaces\SprintbacklogRepositoryInterface;
use App\RepositoryInterfaces\SprintRepositoryInterface;
use App\RepositoryInterfaces\SprintTaskRepositoryInterface;
use App\RepositoryInterfaces\TaskRepositoryInterface;
use App\RepositoryInterfaces\UtilisateurRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // $this->app->bind(AdminRepositoryInterface::class, AdminRepository::class);
        $this->app->bind(AdminRepositoryInterface::class, AdminRepository::class);
        $this->app->bind(UtilisateurRepositoryInterface::class, UtilisateurRepository::class);
        $this->app->bind(AuthRepositoryInterface::class, AuthRepository::class);
        $this->app->bind(ProductbacklogRepositoryInterface::class, ProductbacklogRepository::class);
        $this->app->bind(ProjectRepositoryInterface::class, ProjectRepository::class);
        $this->app->bind(ProjectUtilisateurRepositoryInterface::class, ProjectUtilisateurRepository::class);
        $this->app->bind(SprintbacklogRepositoryInterface::class, SprintbacklogRepository::class);
        $this->app->bind(SprintRepositoryInterface::class, SprintRepository::class);
        $this->app->bind(SprintTaskRepositoryInterface::class, SprintTaskRepository::class);
        $this->app->bind(TaskRepositoryInterface::class, TaskRepository::class);
        $this->app->bind(UtilisateurRepositoryInterface::class, UtilisateurRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}