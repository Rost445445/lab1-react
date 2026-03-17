import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Feed from './pages/Feed';
import PostDetails from './pages/PostDetails';
import Profile, { ProfileInfo, ProfileSettings } from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="feed/:postId" element={<PostDetails />} />
          <Route path="profile" element={<Profile />}>
            <Route path="info" element={<ProfileInfo />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

