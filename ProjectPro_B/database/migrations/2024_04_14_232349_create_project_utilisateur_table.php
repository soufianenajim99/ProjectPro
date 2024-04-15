<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('project_utilisateur', function (Blueprint $table) {
            $table->id();
            $table->foreignId('utilisateur_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->text("role");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_utilisateurs');
    }
};