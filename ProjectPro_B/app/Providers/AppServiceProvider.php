<?php

namespace App\Providers;

use App\Models\User;
use App\Repositories\AdminRepository;
use App\Repositories\AuthRepository;
use App\RepositoryInterfaces\AuthRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthRepositoryInterface::class, AuthRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}