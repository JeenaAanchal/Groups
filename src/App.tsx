import React, { useState } from 'react';
import { Search, Users, MapPin, Calendar, Settings, Bell, Plus, Menu, X } from 'lucide-react';

interface Group {
  id: number;
  name: string;
  description: string;
  members: number;
  category: string;
  image: string;
  location: string;
  nextEvent: string;
  isJoined: boolean;
}

const mockGroups: Group[] = [
  {
    id: 1,
    name: "Photography Enthusiasts",
    description: "A community for professional and amateur photographers to share tips, techniques, and showcase their work.",
    members: 2847,
    category: "Arts & Crafts",
    image: "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "New York, NY",
    nextEvent: "Photo Walk - Central Park",
    isJoined: false
  },
  {
    id: 2,
    name: "Tech Innovators Hub",
    description: "Connect with like-minded tech professionals, startup founders, and developers in your area.",
    members: 5234,
    category: "Technology",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "San Francisco, CA",
    nextEvent: "AI & Machine Learning Workshop",
    isJoined: true
  },
  {
    id: 3,
    name: "Fitness Warriors",
    description: "Join our community of fitness enthusiasts for group workouts, nutrition tips, and motivation.",
    members: 1923,
    category: "Health & Fitness",
    image: "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "Los Angeles, CA",
    nextEvent: "Morning Yoga Session",
    isJoined: false
  },
  {
    id: 4,
    name: "Book Club Society",
    description: "Monthly book discussions, author meetups, and literary events for book lovers of all genres.",
    members: 892,
    category: "Education",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "Chicago, IL",
    nextEvent: "Monthly Book Discussion",
    isJoined: true
  },
  {
    id: 5,
    name: "Startup Founders Network",
    description: "Networking events, pitch sessions, and mentorship opportunities for entrepreneurs.",
    members: 3456,
    category: "Business",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "Austin, TX",
    nextEvent: "Investor Pitch Night",
    isJoined: false
  },
  {
    id: 6,
    name: "Cooking Masters",
    description: "Share recipes, cooking techniques, and enjoy culinary adventures with fellow food enthusiasts.",
    members: 2167,
    category: "Food & Drink",
    image: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "Miami, FL",
    nextEvent: "Italian Cuisine Workshop",
    isJoined: false
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [groups, setGroups] = useState(mockGroups);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ['All', 'Technology', 'Arts & Crafts', 'Health & Fitness', 'Education', 'Business', 'Food & Drink'];

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || group.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleJoinGroup = (groupId: number) => {
    setGroups(groups.map(group => 
      group.id === groupId 
        ? { ...group, isJoined: !group.isJoined, members: group.isJoined ? group.members - 1 : group.members + 1 }
        : group
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Users className="h-8 w-8 text-white mr-3" />
              <span className="text-white text-xl font-bold">Groups</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-blue-200 p-2 rounded-lg transition-colors">
                <Bell size={20} />
              </button>
              <button className="text-white hover:text-blue-200 p-2 rounded-lg transition-colors">
                <Settings size={20} />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-200 p-2 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
                <button className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                  <Bell size={20} className="inline mr-2" />
                  Notifications
                </button>
                <button className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                  <Settings size={20} className="inline mr-2" />
                  Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Discover Amazing Groups
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with people who share your interests and passions
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center">
              <Plus size={20} className="mr-2" />
              Create New Group
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search groups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-64">
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">{filteredGroups.length}</h3>
            <p className="text-gray-600">Active Groups</p>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-green-600 mb-2">{groups.filter(g => g.isJoined).length}</h3>
            <p className="text-gray-600">Joined</p>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">{groups.reduce((sum, g) => sum + g.members, 0).toLocaleString()}</h3>
            <p className="text-gray-600">Total Members</p>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">{categories.length - 1}</h3>
            <p className="text-gray-600">Categories</p>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map(group => (
            <div key={group.id} className="bg-white rounded-2xl shadow-sm hover-card overflow-hidden">
              <div className="relative">
                <img 
                  src={group.image} 
                  alt={group.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {group.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{group.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{group.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{group.members.toLocaleString()} members</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{group.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{group.nextEvent}</span>
                  </div>
                </div>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    group.isJoined 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  onClick={() => toggleJoinGroup(group.id)}
                >
                  {group.isJoined ? 'Joined' : 'Join Group'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredGroups.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white p-12 rounded-2xl shadow-sm">
              <Users size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No groups found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse different categories.</p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button (Mobile) */}
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg md:hidden transition-colors">
        <Plus size={24} />
      </button>
    </div>
  );
}

export default App;