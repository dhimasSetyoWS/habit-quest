<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exp = $this->checkPoints();
        return Inertia::render('Dashboard/DashboardTasks', [
            'tasks' => auth()->user()->tasks,
            'exp' => $exp
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Tasks/CreateTask');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required'],
            'category' => ['required', 'max:50'],
            'description' => ['required'],
            'type' => ['in:daily,routine,longterm,one_time'],
            'status' => ['in:todo,progress,done'],
            'points' => ['integer'],
            'coins' => ['integer'],
        ]);
        auth()->user()->tasks()->create($validatedData);
        return redirect()->route('dashboard.tasks.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }

    public function cycleStatus(Task $task)
    {
        $transitions = [
            'todo' => 'progress',
            'progress' => 'done',
            'done' => 'todo'
        ];
        $nextStatus = $transitions[$task->status] ?? 'todo';

        // Update
        $task->update(['status' => $nextStatus]);
        return redirect()->back();
    }

    public function checkPoints() {
        $point = auth()->user()->tasks()->where('status' , 'done')->sum('points');
        auth()->user()->update(['exp' => $point]);
        return $point;
    }
}
