import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  Trash2, 
  Lock, 
  Search, 
  Calendar, 
  Building2, 
  Briefcase,
  Eye,
  EyeOff,
  LogOut,
  Filter,
  SortAsc,
  SortDesc,
  Download
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';

interface CareerEntry {
  id: number;
  title: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string | null;
  skills: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  highlights: string[];
}

type SortField = 'date' | 'company' | 'title';
type SortOrder = 'asc' | 'desc';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [entries, setEntries] = useState<CareerEntry[]>(() => {
    const saved = localStorage.getItem('careerEntries');
    return saved ? JSON.parse(saved) : [];
  });
  const [newEntry, setNewEntry] = useState<Partial<CareerEntry>>({
    title: '',
    company: '',
    description: '',
    start_date: '',
    end_date: '',
    skills: [],
    location: '',
    type: 'full-time',
    highlights: [],
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterType, setFilterType] = useState<string>('all');
  const [newSkill, setNewSkill] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('careerEntries', JSON.stringify(entries));
  }, [entries]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast.success('Welcome to the Admin Panel!');
    } else {
      toast.error('Invalid password');
    }
    setPassword('');
  };

  const handleAddEntry = () => {
    if (!newEntry.title || !newEntry.company || !newEntry.start_date || !newEntry.location || !newEntry.type) {
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
      skills: newEntry.skills || [],
      location: newEntry.location,
      type: newEntry.type || 'full-time',
      highlights: newEntry.highlights || [],
    };

    setEntries([entry, ...entries]);
    toast.success('Career entry added successfully');
    setNewEntry({
      title: '',
      company: '',
      description: '',
      start_date: '',
      end_date: '',
      skills: [],
      location: '',
      type: 'full-time',
      highlights: [],
    });
  };

  const handleDeleteEntry = (id: number) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setEntries(entries.filter(entry => entry.id !== id));
      toast.success('Career entry deleted successfully');
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !newEntry.skills?.includes(newSkill.trim())) {
      setNewEntry({
        ...newEntry,
        skills: [...(newEntry.skills || []), newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const handleAddHighlight = () => {
    if (newHighlight.trim() && !newEntry.highlights?.includes(newHighlight.trim())) {
      setNewEntry({
        ...newEntry,
        highlights: [...(newEntry.highlights || []), newHighlight.trim()]
      });
      setNewHighlight('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setNewEntry({
      ...newEntry,
      skills: newEntry.skills?.filter(s => s !== skill) || []
    });
  };

  const handleRemoveHighlight = (highlight: string) => {
    setNewEntry({
      ...newEntry,
      highlights: newEntry.highlights?.filter(h => h !== highlight) || []
    });
  };

  const filteredAndSortedEntries = entries
    .filter(entry => {
      const matchesSearch = 
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = filterType === 'all' || entry.type === filterType;
      
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'date':
          comparison = new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
          break;
        case 'company':
          comparison = a.company.localeCompare(b.company);
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const exportToCSV = () => {
    const headers = ['Title', 'Company', 'Location', 'Type', 'Start Date', 'End Date', 'Skills', 'Highlights', 'Description'];
    const csvContent = [
      headers.join(','),
      ...entries.map(entry => [
        `"${entry.title}"`,
        `"${entry.company}"`,
        `"${entry.location}"`,
        `"${entry.type}"`,
        entry.start_date,
        entry.end_date || 'Present',
        `"${entry.skills.join('; ')}"`,
        `"${entry.highlights.join('; ')}"`,
        `"${entry.description.replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'career_entries.csv';
    link.click();
    toast.success('CSV file downloaded successfully');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Lock className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">Career Admin Panel</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-10"
                    placeholder="Enter admin password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Lock size={20} />
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
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Career Admin Panel</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Download size={20} />
              Export CSV
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
        
        {/* Add New Entry Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Add New Career Entry</h2>
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              {previewMode ? <Eye size={20} /> : <EyeOff size={20} />}
              {previewMode ? 'Preview Mode' : 'Edit Mode'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Job Title *"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.title}
                onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Company *"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.company}
                onChange={(e) => setNewEntry({ ...newEntry, company: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location *"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.location}
                onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
              />
              <select
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.type}
                onChange={(e) => setNewEntry({ ...newEntry, type: e.target.value as CareerEntry['type'] })}
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div className="space-y-4">
              <input
                type="date"
                placeholder="Start Date *"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.start_date}
                onChange={(e) => setNewEntry({ ...newEntry, start_date: e.target.value })}
              />
              <input
                type="date"
                placeholder="End Date"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newEntry.end_date || ''}
                onChange={(e) => setNewEntry({ ...newEntry, end_date: e.target.value })}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add skill"
                  className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                />
                <button
                  onClick={handleAddSkill}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {newEntry.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center gap-2"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add highlight/achievement"
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddHighlight()}
              />
              <button
                onClick={handleAddHighlight}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {newEntry.highlights?.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                >
                  <span className="flex-1">{highlight}</span>
                  <button
                    onClick={() => handleRemoveHighlight(highlight)}
                    className="text-red-600 hover:text-red-800"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            
            {previewMode ? (
              <div className="prose max-w-none">
                <ReactMarkdown>{newEntry.description || ''}</ReactMarkdown>
              </div>
            ) : (
              <textarea
                placeholder="Description (Markdown supported)"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                rows={5}
                value={newEntry.description}
                onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
              />
            )}
          </div>

          <button
            onClick={handleAddEntry}
            className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <PlusCircle size={20} />
            Add Entry
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search entries..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <select
                className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (sortField === 'date') {
                    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortField('date');
                    setSortOrder('desc');
                  }
                }}
                className={`p-2 rounded-lg transition-colors ${
                  sortField === 'date' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                }`}
              >
                <Calendar size={20} />
              </button>
              <button
                onClick={() => {
                  if (sortField === 'company') {
                    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortField('company');
                    setSortOrder('asc');
                  }
                }}
                className={`p-2 rounded-lg transition-colors ${
                  sortField === 'company' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                }`}
              >
                <Building2 size={20} />
              </button>
              <button
                onClick={() => {
                  if (sortField === 'title') {
                    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortField('title');
                    setSortOrder('asc');
                  }
                }}
                className={`p-2 rounded-lg transition-colors ${
                  sortField === 'title' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                }`}
              >
                <Briefcase size={20} />
              </button>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {sortOrder === 'asc' ? <SortAsc size={20} /> : <SortDesc size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Career Entries List */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Career Entries</h2>
          {filteredAndSortedEntries.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No career entries found. Add your first one above!</p>
          ) : (
            <div className="space-y-6">
              {filteredAndSortedEntries.map((entry) => (
                <div key={entry.id} className="border rounded-lg p-6 hover:border-blue-500 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{entry.title}</h3>
                        <p className="text-gray-600 flex items-center gap-2">
                          <Building2 size={16} />
                          {entry.company}
                        </p>
                        <p className="text-gray-500 flex items-center gap-2">
                          <Calendar size={16} />
                          {new Date(entry.start_date).toLocaleDateString()} - 
                          {entry.end_date ? new Date(entry.end_date).toLocaleDateString() : 'Present'}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {entry.type}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                          {entry.location}
                        </span>
                      </div>

                      {entry.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {entry.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {entry.highlights.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {entry.highlights.map((highlight, index) => (
                              <li key={index}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.description && (
                        <div className="prose max-w-none">
                          <ReactMarkdown>{entry.description}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded-lg"
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