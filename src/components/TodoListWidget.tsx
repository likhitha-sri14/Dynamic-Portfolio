import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckSquare,
  Square,
  Plus,
  Trash2,
  Edit2,
  Check,
  X,
  Sparkles,
  Calendar,
  AlertCircle,
  Clock,
  ListTodo,
} from 'lucide-react';
import { TodoTask } from '../types/portfolio';
import { initialTodoTasks } from '../data/portfolioData';

const TODO_STORAGE_KEY = 'portfolioTodoTasks_v1';

export const TodoListWidget: React.FC = () => {
  const [tasks, setTasks] = useState<TodoTask[]>(() => {
    try {
      const saved = localStorage.getItem(TODO_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return initialTodoTasks;
  });

  const [newTaskText, setNewTaskText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // Ignore
    }
  }, [tasks]);

  // Dynamic time-of-day greeting
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  }, []);

  // Task metrics
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  // Add Task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!newTaskText.trim()) {
      setErrorMsg('Please enter task content before adding.');
      return;
    }

    const newTask: TodoTask = {
      id: `task-${Date.now()}`,
      text: newTaskText.trim(),
      completed: false,
      createdAt: new Date().toISOString().split('T')[0],
      priority,
    };

    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  };

  // Toggle Complete
  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Start Edit
  const handleStartEdit = (task: TodoTask) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  // Save Edit
  const handleSaveEdit = (id: string) => {
    if (!editingText.trim()) return;
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editingText.trim() } : task
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  // Delete Task
  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filtered Tasks
  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((t) => !t.completed);
    if (filter === 'completed') return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
      {/* Header & Dynamic Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <ListTodo className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                To-Do Task Sandbox
              </h3>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                {greeting}, ready to organize your developer workflow?
              </p>
            </div>
          </div>
        </div>

        {/* Stats Badges */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <div className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Total: <span className="font-bold">{stats.total}</span>
          </div>
          <div className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
            Done: <span className="font-bold">{stats.completed}</span>
          </div>
          <div className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">
            Pending: <span className="font-bold">{stats.pending}</span>
          </div>
        </div>
      </div>

      {/* Add Task Input Form */}
      <form onSubmit={handleAddTask} className="space-y-2">
        {errorMsg && (
          <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errorMsg}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => {
              setNewTaskText(e.target.value);
              if (errorMsg) setErrorMsg('');
            }}
            placeholder="Add a new task (e.g., Integrate Flask API with frontend)..."
            className="flex-1 px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as any)}
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>

          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </button>
        </div>
      </form>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-2 pt-2">
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
          {(['all', 'active', 'completed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded-md capitalize font-medium transition-colors ${
                filter === tab
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-slate-400 font-mono">
          Saved in browser localStorage
        </span>
      </div>

      {/* Tasks List */}
      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => {
            const isEditing = editingId === task.id;
            const priorityBadge =
              task.priority === 'high'
                ? 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60'
                : task.priority === 'medium'
                ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60'
                : 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700';

            return (
              <div
                key={task.id}
                className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 group ${
                  task.completed
                    ? 'border-slate-200/50 dark:border-slate-800/50 bg-slate-50/40 dark:bg-slate-950/30 opacity-75'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Checkbox & Text */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <button
                    onClick={() => handleToggleTask(task.id)}
                    className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
                    aria-label={task.completed ? 'Mark task pending' : 'Mark task completed'}
                  >
                    {task.completed ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Square className="w-5 h-5" />
                    )}
                  </button>

                  {isEditing ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveEdit(task.id);
                        if (e.key === 'Escape') handleCancelEdit();
                      }}
                      className="flex-1 px-2 py-1 text-xs rounded border border-indigo-500 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                      autoFocus
                    />
                  ) : (
                    <span
                      className={`text-xs font-medium truncate ${
                        task.completed
                          ? 'line-through text-slate-400 dark:text-slate-500'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {task.text}
                    </span>
                  )}
                </div>

                {/* Priority & Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-medium ${priorityBadge}`}
                  >
                    {task.priority}
                  </span>

                  {isEditing ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(task.id)}
                        className="p-1 rounded text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                        title="Save edit"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="p-1 rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                        title="Cancel edit"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleStartEdit(task)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded text-slate-400 hover:text-indigo-600 transition-opacity"
                        title="Edit task text"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded text-slate-400 hover:text-rose-600 transition-opacity"
                        title="Delete task"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-10 text-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-400 text-xs space-y-1">
            <p className="font-semibold text-slate-600 dark:text-slate-400">
              No tasks in this view.
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Add your first task above to start tracking!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
