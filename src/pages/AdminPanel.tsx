import React, { useState } from 'react';
import { PlusCircle, Trash2, Lock } from 'lucide-react';
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
    // Replace 'your-secure-password' with your desired password
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast.success('Login successful');
    } else {
      toast.error('Invalid password');
    }
    setPassword('');
  };

  const handleAddEntry = () => {
    if (!newEntry.title || !newEntry.company || !newEntry.start_date) {
      toast.error('Please fill in all required fields');
      return;
    }

    const entry: CareerEntry = {
      id: Date.now(),
      title: newEntry.title,
      company: newEntry.company,
      description: newEntry.description || '',
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
    setEntries(entries.filter(entry => entry.id !== id));
    toast.success('Career entry deleted successfully');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Career Admin Panel</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Logout
          </button>
        </div>
        
        {/* Add New Entry Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Career Entry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Job Title *"
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={newEntry.title}
              onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Company *"
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={newEntry.company}
              onChange={(e) => setNewEntry({ ...newEntry, company: e.target.value })}
            />
            <input
              type="date"
              placeholder="Start Date *"
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={newEntry.start_date}
              onChange={(e) => setNewEntry({ ...newEntry, start_date: e.target.value })}
            />
            <input
              type="date"
              placeholder="End Date"
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={newEntry.end_date || ''}
              onChange={(e) => setNewEntry({ ...newEntry, end_date: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="p-2 border rounded md:col-span-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              rows={3}
              value={newEntry.description}
              onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
            />
          </div>
          <button
            onClick={handleAddEntry}
            className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            <PlusCircle size={20} />
            Add Entry
          </button>
        </div>

        {/* Career Entries List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Career Entries</h2>
          {entries.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No career entries yet. Add your first one above!</p>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <div key={entry.id} className="border rounded p-4 hover:border-blue-500 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{entry.title}</h3>
                      <p className="text-gray-600">{entry.company}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(entry.start_date).toLocaleDateString()} - 
                        {entry.end_date ? new Date(entry.end_date).toLocaleDateString() : 'Present'}
                      </p>
                      {entry.description && (
                        <p className="mt-2 text-gray-700">{entry.description}</p>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded"
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
          },
        }}
      />
    </div>
  );
}

export default App;