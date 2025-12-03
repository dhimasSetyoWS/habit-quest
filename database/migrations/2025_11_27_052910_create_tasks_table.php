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
        //
        Schema::create('tasks', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string("title");
            $table->longText("description");
            $table->string('category');
            $table->enum('type', ['daily' , 'routine', 'longterm' , 'one_time'])->default('one_time');
            $table->enum('status' , ['todo' , 'progress' , 'done'])->default('todo');
            $table->integer("points")->default(10);
            $table->integer("coins")->default(5);
            $table->timestamp('due_date')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
