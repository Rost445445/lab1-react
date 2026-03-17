import { useState } from 'react';
import Header from './components/Header';
import { students } from './data';

function App() {
  const [showHelp, setShowHelp] = useState(false);
  const [showOnlySuccessful, setShowOnlySuccessful] = useState(false);
  const [activeTab, setActiveTab] = useState('list');

  const filteredStudents = showOnlySuccessful 
    ? students.filter(s => (s.score ?? 0) >= 60)
    : students;

  return (
    <div className="app-container">
      <Header />
      
      <nav className="tabs">
        <button 
          className={activeTab === 'list' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('list')}
        >
          Список
        </button>
        <button 
          className={activeTab === 'stats' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('stats')}
        >
          Статистика
        </button>
        <button 
          className={activeTab === 'about' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('about')}
        >
          Про нас
        </button>
      </nav>

      <main className="feed">
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button onClick={() => setShowHelp(!showHelp)}>
            {showHelp ? 'Приховати інструкцію' : 'Показати інструкцію'}
          </button>
          
          {showHelp && (
            <p style={{ marginTop: '10px', color: '#1877f2' }}>
              Довідка: дозволяє керувати списками студентів
            </p>
          )}
        </div>

        {activeTab === 'list' && (
          <section>
            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
              <button onClick={() => setShowOnlySuccessful(!showOnlySuccessful)}>
                {showOnlySuccessful ? 'Показати всіх' : 'Показати тільки успішних'}
              </button>
            </div>

            {filteredStudents.length > 0 ? (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredStudents.map(student => (
                  <li key={student.id} style={{ padding: '10px', background: '#fff', marginBottom: '8px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <strong>{student.name}</strong> — {student.score ?? "Оцінка відсутня"}
                    <span style={{ marginLeft: '10px', color: (student.score ?? 0) >= 60 ? 'green' : 'red' }}>
                      { (student.score ?? 0) >= 60 ? ' (Зараховано)' : ' (Не зараховано)' }
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-state">За вашим запитом нікого не знайдено</p>
            )}
          </section>
        )}

        {activeTab === 'stats' && (
          <section className="stats">
            <h3>Статистика:</h3>
            <p>Загальна кількість студентів: {students.length}</p>
            <p>Успішних: {students.filter(s => (s.score ?? 0) >= 60).length}</p>
          </section>
        )}

        {activeTab === 'about' && (
          <section className="about">
            <h3>Про застосунок:</h3>
            <p>Це система управління списками студентів для Практичної роботи №3.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;