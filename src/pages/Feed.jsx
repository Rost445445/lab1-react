import { useState } from 'react';
import Post from '../components/molecules/Post/Post';
import SearchBar from '../components/molecules/SearchBar/SearchBar';
import AddStudentForm from '../components/molecules/AddStudentForm/AddStudentForm';
import { students as initialStudents, posts } from '../data';
import { Link } from 'react-router-dom';

function Feed() {
  const [studentsList, setStudentsList] = useState(initialStudents);
  const [showHelp, setShowHelp] = useState(false);
  const [showOnlySuccessful, setShowOnlySuccessful] = useState(false);
  const [activeTab, setActiveTab] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleAddStudent = (newStudent) => {
    setStudentsList(prev => [...prev, { ...newStudent, id: Date.now() }]);
  };

  const categories = ['All', ...new Set(posts.map(post => post.category))];
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredStudents = showOnlySuccessful 
    ? studentsList.filter(s => (s.score ?? 0) >= 60)
    : studentsList;

  return (
    <div className="main-layout">
      <section className="feed-column">
        <h2>Стрічка новин</h2>
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

        <div className="posts-list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div key={post.id} style={{ marginBottom: '20px' }}>
                <Post {...post} />
                <Link to={`/feed/${post.id}`} style={{ display: 'inline-block', marginTop: '10px', color: '#1877f2', textDecoration: 'none', fontWeight: '500' }}>
                  Читати далі...
                </Link>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>Нічого не знайдено за вашим запитом 😕</p>
            </div>
          )}
        </div>
      </section>

      <aside className="sidebar">
        <h2>Дашборд студентів</h2>
        <AddStudentForm onAddStudent={handleAddStudent} />
        {/* ... existing sidebar logic ... */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setShowHelp(!showHelp)}>
            {showHelp ? 'Приховати інструкцію' : 'Показати інструкцію'}
          </button>
          {showHelp && <p style={{ color: '#1877f2', fontSize: '0.9rem' }}>Довідка: дозволяє керувати списками студентів</p>}
        </div>

        <nav className="tabs">
          {['list', 'stats'].map(tab => (
            <button key={tab} className={activeTab === tab ? 'active-tab' : ''} onClick={() => setActiveTab(tab)}>
              {tab === 'list' ? 'Список' : 'Статистика'}
            </button>
          ))}
        </nav>

        <div className="tab-content">
          {activeTab === 'list' && (
            <section>
              <button onClick={() => setShowOnlySuccessful(!showOnlySuccessful)}>
                {showOnlySuccessful ? 'Усі' : 'Тільки успішні'}
              </button>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredStudents.map(s => (
                  <li key={s.id} style={{ padding: '8px', background: '#fff', marginBottom: '5px' }}>
                    <strong>{s.name}</strong> — {s.score ?? "Н/А"}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </aside>
    </div>
  );
}

export default Feed;
