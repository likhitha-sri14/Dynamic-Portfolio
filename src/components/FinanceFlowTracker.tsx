import React, { useState, useEffect, useMemo } from 'react';
import {
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Wallet,
  Plus,
  Trash2,
  RotateCcw,
  Filter,
  Calendar,
  Tag,
  AlertCircle,
  CheckCircle2,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart as PieChartIcon,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from 'recharts';
import { FinanceTransaction } from '../types/portfolio';
import { initialFinanceTransactions } from '../data/portfolioData';

const STORAGE_KEY = 'financeFlowTransactions_v1';

export const FinanceFlowTracker: React.FC = () => {
  const [transactions, setTransactions] = useState<FinanceTransaction[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return initialFinanceTransactions;
  });

  // Filter state
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense' | 'savings'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Form state
  const [formType, setFormType] = useState<'income' | 'expense' | 'savings'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    } catch {
      // Ignore
    }
  }, [transactions]);

  // Categories suggestions based on transaction type
  const categorySuggestions = useMemo(() => {
    if (formType === 'income') {
      return ['Internship Stipend', 'Freelance Project', 'Scholarship', 'Tutoring', 'Bonus', 'Other Income'];
    }
    if (formType === 'savings') {
      return ['Emergency Fund', 'Tech Upgrade Goal', 'Higher Studies Fund', 'Mutual Funds', 'Fixed Deposit'];
    }
    return [
      'Learning & Books',
      'Tech Subscriptions',
      'Food & Dining',
      'Commute & Travel',
      'Cloud Hosting',
      'Hardware & Peripherals',
      'Entertainment',
      'Utilities',
    ];
  }, [formType]);

  // Set default category when formType changes
  useEffect(() => {
    if (!categorySuggestions.includes(category)) {
      setCategory(categorySuggestions[0]);
    }
  }, [formType, categorySuggestions]);

  // Summary Metrics calculations
  const totals = useMemo(() => {
    let income = 0;
    let expenses = 0;
    let savings = 0;

    transactions.forEach((t) => {
      const amt = Number(t.amount) || 0;
      if (t.type === 'income') income += amt;
      else if (t.type === 'expense') expenses += amt;
      else if (t.type === 'savings') savings += amt;
    });

    const balance = income - expenses - savings;

    return { income, expenses, savings, balance };
  }, [transactions]);

  // Form Submission
  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setSuccessMessage('');

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setFormError('Please enter a valid positive numerical amount.');
      return;
    }

    if (!description.trim()) {
      setFormError('Please provide a brief description.');
      return;
    }

    if (!date) {
      setFormError('Please select a valid transaction date.');
      return;
    }

    const newTx: FinanceTransaction = {
      id: `tx-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      type: formType,
      amount: parsedAmount,
      category: category.trim() || 'General',
      description: description.trim(),
      date,
    };

    setTransactions((prev) => [newTx, ...prev]);
    setAmount('');
    setDescription('');
    setSuccessMessage(`Added ${formType} transaction of ₹${parsedAmount.toLocaleString()}`);

    setTimeout(() => setSuccessMessage(''), 3500);
  };

  // Delete Transaction
  const handleDeleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // Reset to Demo Data
  const handleResetData = () => {
    if (window.confirm('Reset transactions back to realistic initial demo data?')) {
      setTransactions(initialFinanceTransactions);
      setSuccessMessage('Restored initial demo dataset.');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  // Filtered transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchesType = filterType === 'all' || t.type === filterType;
      const matchesSearch =
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [transactions, filterType, searchQuery]);

  // Chart Data: Income vs Expense by Month or Groups
  const comparisonData = useMemo(() => {
    const monthlyGroups: Record<string, { month: string; income: number; expense: number; savings: number }> = {};

    transactions.forEach((t) => {
      const monthKey = t.date.substring(0, 7); // '2026-09'
      const label = new Date(t.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      if (!monthlyGroups[monthKey]) {
        monthlyGroups[monthKey] = { month: label, income: 0, expense: 0, savings: 0 };
      }
      if (t.type === 'income') monthlyGroups[monthKey].income += t.amount;
      if (t.type === 'expense') monthlyGroups[monthKey].expense += t.amount;
      if (t.type === 'savings') monthlyGroups[monthKey].savings += t.amount;
    });

    return Object.values(monthlyGroups).slice(-6);
  }, [transactions]);

  // Chart Data: Expense Category Breakdown for Pie Chart
  const categoryData = useMemo(() => {
    const map: Record<string, number> = {};
    transactions
      .filter((t) => t.type === 'expense')
      .forEach((t) => {
        map[t.category] = (map[t.category] || 0) + t.amount;
      });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }, [transactions]);

  // Chart Data: Savings Breakdown
  const savingsData = useMemo(() => {
    const map: Record<string, number> = {};
    transactions
      .filter((t) => t.type === 'savings')
      .forEach((t) => {
        map[t.category] = (map[t.category] || 0) + t.amount;
      });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }, [transactions]);

  const PIE_COLORS = ['#6366f1', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#14b8a6'];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg space-y-8">
      {/* Top Header & Reset */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
              Finance Flow Tracker
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Interactive live personal finance dashboard with local state synchronization & Recharts visualizations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetData}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            title="Reset transactions to initial demo values"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Income */}
        <div className="p-4 sm:p-5 rounded-xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/50 dark:bg-emerald-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 uppercase">
              Total Income
            </span>
            <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-bold font-mono tabular-nums text-emerald-700 dark:text-emerald-300">
            ₹{totals.income.toLocaleString()}
          </p>
          <p className="text-[11px] text-emerald-600/80 dark:text-emerald-400/80 mt-1">
            Stipends, freelance, & earnings
          </p>
        </div>

        {/* Total Expenses */}
        <div className="p-4 sm:p-5 rounded-xl border border-rose-200/80 dark:border-rose-900/40 bg-rose-50/50 dark:bg-rose-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium text-rose-700 dark:text-rose-400 uppercase">
              Total Expenses
            </span>
            <span className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-300 flex items-center justify-center">
              <ArrowDownRight className="w-4 h-4" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-bold font-mono tabular-nums text-rose-700 dark:text-rose-300">
            ₹{totals.expenses.toLocaleString()}
          </p>
          <p className="text-[11px] text-rose-600/80 dark:text-rose-400/80 mt-1">
            Education, subscriptions, transit
          </p>
        </div>

        {/* Total Savings */}
        <div className="p-4 sm:p-5 rounded-xl border border-indigo-200/80 dark:border-indigo-900/40 bg-indigo-50/50 dark:bg-indigo-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 uppercase">
              Total Savings
            </span>
            <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 flex items-center justify-center">
              <PiggyBank className="w-4 h-4" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-bold font-mono tabular-nums text-indigo-700 dark:text-indigo-300">
            ₹{totals.savings.toLocaleString()}
          </p>
          <p className="text-[11px] text-indigo-600/80 dark:text-indigo-400/80 mt-1">
            Emergency & goal reserves
          </p>
        </div>

        {/* Remaining Balance */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase">
              Remaining Balance
            </span>
            <span className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center">
              <Wallet className="w-4 h-4" />
            </span>
          </div>
          <p
            className={`mt-3 text-2xl font-bold font-mono tabular-nums ${
              totals.balance >= 0
                ? 'text-slate-900 dark:text-white'
                : 'text-rose-600 dark:text-rose-400'
            }`}
          >
            ₹{totals.balance.toLocaleString()}
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Net unallocated liquidity
          </p>
        </div>
      </div>

      {/* Recharts Data Visualizations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Income vs Expenses Chart */}
        <div className="lg:col-span-7 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-indigo-500" />
              Income vs Expenses Comparison
            </h4>
            <span className="text-[11px] font-mono text-slate-400">Monthly breakdown</span>
          </div>

          <div className="h-64 w-full">
            {comparisonData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Bar dataKey="income" name="Income" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expense" name="Expense" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="savings" name="Savings" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-slate-400">
                No monthly data recorded yet.
              </div>
            )}
          </div>
        </div>

        {/* Expense Category Breakdown Pie */}
        <div className="lg:col-span-5 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <PieChartIcon className="w-4 h-4 text-indigo-500" />
              Spending by Category
            </h4>
            <span className="text-[11px] font-mono text-slate-400">Expenses</span>
          </div>

          <div className="h-64 w-full flex items-center justify-center">
            {categoryData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {categoryData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val: any) => `₹${Number(val).toLocaleString()}`}
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-slate-400">
                No expense categories logged.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Transaction Form & Transaction List Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 border-t border-slate-200 dark:border-slate-800">
        {/* Form: Add Transaction */}
        <div className="lg:col-span-5 bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/70 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4 text-indigo-500" />
            <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              Log New Transaction
            </h4>
          </div>

          {/* Feedback messages */}
          {formError && (
            <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleAddTransaction} className="space-y-3.5">
            {/* Type selector */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Type
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-200/70 dark:bg-slate-900/60 rounded-lg">
                <button
                  type="button"
                  onClick={() => setFormType('expense')}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    formType === 'expense'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Expense
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('income')}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    formType === 'income'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Income
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('savings')}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    formType === 'savings'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Savings
                </button>
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-mono">₹</span>
                <input
                  type="number"
                  step="any"
                  min="0.01"
                  required
                  placeholder="e.g. 2500"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-7 pr-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                {categorySuggestions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Description
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Pixelwind monthly stipend"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Save Transaction</span>
            </button>
          </form>
        </div>

        {/* Transaction History & Filter List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              Transaction History ({filteredTransactions.length})
            </h4>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
              {(['all', 'income', 'expense', 'savings'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-2.5 py-1 rounded-md capitalize font-medium transition-colors ${
                    filterType === type
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search transactions by category or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Transactions List */}
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => {
                const isIncome = tx.type === 'income';
                const isExpense = tx.type === 'expense';

                return (
                  <div
                    key={tx.id}
                    className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 flex items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                          isIncome
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
                            : isExpense
                            ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400'
                            : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400'
                        }`}
                      >
                        {isIncome ? '+' : isExpense ? '-' : '•'}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 dark:text-white">
                          {tx.description}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          <span>{tx.category}</span>
                          <span>·</span>
                          <span>{tx.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold font-mono tabular-nums ${
                          isIncome
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : isExpense
                            ? 'text-rose-600 dark:text-rose-400'
                            : 'text-indigo-600 dark:text-indigo-400'
                        }`}
                      >
                        {isIncome ? '+' : isExpense ? '-' : ''}₹{tx.amount.toLocaleString()}
                      </span>

                      <button
                        onClick={() => handleDeleteTransaction(tx.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all"
                        title="Delete transaction"
                        aria-label={`Delete transaction ${tx.description}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
                No matching transactions found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
