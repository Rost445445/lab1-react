import { useState } from 'react';
import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import AddStudentForm from './components/molecules/AddStudentForm/AddStudentForm';
import { students as initialStudents, posts } from './data';

function App() {
  // Students state
  const [studentsList, setStudentsList] = useState(initialStudents);
  
  // Dashboard UI state
  const [showHelp, setShowHelp] = useState(false);
  const [showOnlySuccessful, setShowOnlySuccessful] = useState(false);
  const [activeTab, setActiveTab] = useState('list');

  // Search/Feed state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Logic for adding a student
  const handleAddStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: Date.now() // Unique ID
    };
    setStudentsList(prev => [...prev, studentWithId]);
  };

  // Logic for posts
  const categories = ['All', ...new Set(posts.map(post => post.category))];
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Logic for students
  const filteredStudents = showOnlySuccessful 
    ? studentsList.filter(s => (s.score ?? 0) >= 60)
    : studentsList;

  return (
    <div className="app-container">
      <Header />
      
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
                <Post key={post.id} {...post} />
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

          <div style={{ marginBottom: '20px' }}>
            <button onClick={() => setShowHelp(!showHelp)}>
              {showHelp ? 'Приховати інструкцію' : 'Показати інструкцію'}
            </button>
            {showHelp && (
              <p style={{ marginTop: '10px', color: '#1877f2', fontSize: '0.9rem' }}>
                Довідка: дозволяє керувати списками студентів
              </p>
            )}
          </div>

          <nav className="tabs">
            {['list', 'stats', 'about'].map(tab => (
              <button 
                key={tab}
                className={activeTab === tab ? 'active-tab' : ''} 
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'list' ? 'Список' : tab === 'stats' ? 'Статистика' : 'Про нас'}
              </button>
            ))}
          </nav>

          <div className="tab-content">
            {activeTab === 'list' && (
              <section>
                <div style={{ marginBottom: '15px' }}>
                  <button onClick={() => setShowOnlySuccessful(!showOnlySuccessful)}>
                    {showOnlySuccessful ? 'Показати всіх' : 'Тільки успішні'}
                  </button>
                </div>

                {filteredStudents.length > 0 ? (
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {filteredStudents.map(student => (
                      <li key={student.id} style={{ padding: '8px', background: '#fff', marginBottom: '5px', borderRadius: '6px', fontSize: '0.85rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        <strong>{student.name}</strong> — {student.score ?? "Оцінка відсутня"}
                        <span style={{ color: (student.score ?? 0) >= 60 ? 'green' : 'red', display: 'block' }}>
                          { (student.score ?? 0) >= 60 ? 'Зараховано' : 'Не зараховано' }
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>За вашим запитом нікого не знайдено</p>
                )}
              </section>
            )}

            {activeTab === 'stats' && (
              <section className="stats">
                <h4>Статистика:</h4>
                <p>Всього: {studentsList.length}</p>
                <p>Успішних: {studentsList.filter(s => (s.score ?? 0) >= 60).length}</p>
              </section>
            )}

            {activeTab === 'about' && (
              <section className="about">
                <p>Система управління списками студентів та стрічка новин.</p>
              </section>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
