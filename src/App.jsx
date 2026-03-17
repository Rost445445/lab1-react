import Header from './components/Header';
import { students } from './data';

function App() {
  // 1. Агрегація (reduce): Середній бал активних студентів
  const activeStudents = students.filter(s => s.isActive);
  const averageScore = activeStudents.length > 0 
    ? (activeStudents.reduce((sum, s) => sum + s.score, 0) / activeStudents.length).toFixed(1)
    : 0;

  // 2. Фільтрація (filter): Відмінники (активні, бал > 80)
  const topStudents = activeStudents.filter(s => s.score > 80);

  // 3. Сортування (sort): За спаданням балів
  const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  return (
    <div className="app-container">
      <Header />
      <main className="feed">
        <section>
          <h2>Середній бал активних студентів: {averageScore}</h2>
        </section>

        <section>
          <h3>Повний список студентів:</h3>
          <ul>
            {students.map(student => (
              <li 
                key={student.id} 
                style={!student.isActive ? { color: 'gray', textDecoration: 'line-through' } : {}}
              >
                {student.name} — {student.score} балів
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Відмінники (Активні &gt; 80):</h3>
          <ul>
            {topStudents.map(student => (
              <li key={student.id}>
                {student.name} — {student.score} балів
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Рейтинг (за спаданням балів):</h3>
          <ol>
            {sortedStudents.map(student => (
              <li key={student.id}>
                {student.name} — {student.score} балів
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}

export default App;

