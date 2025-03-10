import React, { useState } from 'react';
import { PlusCircle, Trash2, Lock, LogOut } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface CareerEntry {
  id: number;
  title: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string | null;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [entries, setEntries] = useState<CareerEntry[]>([]);
  const [newEntry, setNewEntry] = useState<Partial<CareerEntry>>({
    title: '',
    company: '',
    description: '',
    start_date: '',
    end_date: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast.success('Login successful');
    } else {
      toast.error('Invalid password');
    }
    setPassword('');
  };

  const handleAddEntry = () => {
    if (!newEntry.title?.trim() || !newEntry.company?.trim() || !newEntry.start_date) {
      toast.error('Please fill in all required fields');
      return;
    }

    const entry: CareerEntry = {
      id: Date.now(),
      title: newEntry.title.trim(),
      company: newEntry.company.trim(),
      description: newEntry.description?.trim() || '',
      start_date: newEntry.start_date,
      end_date: newEntry.end_date || null,
    };

    setEntries([entry, ...entries]);
    toast.success('Career entry added successfully');
    setNewEntry({
      title: '',
      company: '',
      description: '',
      start_date: '',
      end_date: '',
    });
  };

  const handleDeleteEntry = (id: number) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setEntries(entries.filter(entry => entry.id !== id));
      toast.success('Career entry deleted successfully');
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setIsAuthenticated(false);
      toast.success('Logged out successfully');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-blue-100 rounded-full">
                <Lock className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <Toaster position="top-right" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Career Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
        
        {/* Add New Entry Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-8">Add New Career Entry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
              <input
                type="text"
                placeholder="e.g., Senior Developer"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.title}
                onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
              <input
                type="text"
                placeholder="e.g., Tech Corp"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.company}
                onChange={(e) => setNewEntry({ ...newEntry, company: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.start_date}
                onChange={(e) => setNewEntry({ ...newEntry, start_date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.end_date || ''}
                onChange={(e) => setNewEntry({ ...newEntry, end_date: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Enter job description..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                rows={4}
                value={newEntry.description}
                onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
              />
            </div>
          </div>
          <button
            onClick={handleAddEntry}
            className="mt-8 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <PlusCircle size={20} />
            Add Entry
          </button>
        </div>

        {/* Career Entries List */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-8">Career Entries</h2>
          {entries.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-lg">No career entries yet. Add your first one above!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {entries.map((entry) => (
                <div key={entry.id} className="border rounded-lg p-6 hover:border-blue-500 transition-all duration-200 group">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{entry.title}</h3>
                      <p className="text-gray-600 text-lg mt-1">{entry.company}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(entry.start_date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long',
                          day: 'numeric'
                        })} - 
                        {entry.end_date ? 
                          new Date(entry.end_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          }) : 
                          ' Present'}
                      </p>
                      {entry.description && (
                        <p className="mt-3 text-gray-700 whitespace-pre-line">{entry.description}</p>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded-lg group-hover:opacity-100 opacity-0"
                      title="Delete entry"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
}

export default App;