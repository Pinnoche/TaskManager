<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // if(Auth::check()){
            $tasks = TaskResource::collection(auth()->user()->tasks()->orderBy('created_at', 'desc')->get());
            $messages = session('messages');
            $dM = session('message');
            $pageName = 'Task';
        return Inertia::render('Tasks/Index', compact('tasks', 'messages', 'pageName', 'dM'));
        // }
        // return redirect()->route('login')->with('message', 'Please Login to View your tasks');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // if(Auth::check()){
            $pageName = 'Create Task';
            return Inertia::render('Tasks/Create', compact('pageName'));
        // }
        return redirect()->route('login')->with('message', 'Please Login to View your tasks');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $user = auth()->user();

        $user->tasks()->create($request->validated());
       
        return redirect()->route('tasks.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return Inertia::render('Tasks/Show', ['task' => new TaskResource($task)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        $pageName = 'Edit Task';
        return Inertia::render('Tasks/Edit', compact('task', 'pageName'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->validated());
        return redirect()->route('tasks.index')->with('messages', [
            'message' => 'Your Task has been Updated Successfully',
            'taskId' => $task->id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return redirect()->route('tasks.index')->with('message', 'Your Task has been Removed Successfully');
    }
}
