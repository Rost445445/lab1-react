import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import { posts } from './data';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="feed">
        {posts.map(post => (
          <Post 
            key={post.id} 
            {...post} 
          />
        ))}
      </main>
    </div>
  );
}

export default App;
