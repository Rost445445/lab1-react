import { useState } from 'react';
import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import { posts } from './data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(posts.map(post => post.category))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-container">
      <Header />
      <main className="feed">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <section className="posts-list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <div className="empty-state">
              <p>Нічого не знайдено за вашим запитом 😕</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;