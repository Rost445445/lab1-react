import React from 'react';

// Dumb Component (Atom)
const ActivityItem = ({ text, date }) => (
  <li style={{ padding: '5px 0', borderBottom: '1px solid #eee' }}>
    <small style={{ color: '#888' }}>[{date}]</small> {text}
  </li>
);

// Dumb Component (List)
const ActivityList = ({ activities }) => (
  <div style={{ marginTop: '20px' }}>
    <h4>Остання активність:</h4>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {activities.map((act, index) => (
        <ActivityItem key={index} {...act} />
      ))}
    </ul>
  </div>
);

// Dumb Component
const UserInfo = ({ name, bio }) => (
  <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
    <h2>{name}</h2>
    <p>{bio}</p>
  </div>
);

// Composition Component
const MainContent = ({ children }) => (
  <div style={{ flex: 1, padding: '0 20px' }}>
    {children}
  </div>
);

// Dumb Component
const Sidebar = ({ links }) => (
  <aside style={{ width: '200px', borderRight: '1px solid #ddd', padding: '10px' }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {links.map(link => (
        <li key={link} style={{ marginBottom: '10px' }}>
          <a href={`#${link}`} style={{ textDecoration: 'none', color: '#1877f2' }}>{link}</a>
        </li>
      ))}
    </ul>
  </aside>
);

// Smart Component (Container)
const ProfilePage = () => {
  const userData = {
    name: "Олександр Коваленко",
    bio: "React Developer & Coding Enthusiast",
    links: ["Огляд", "Друзі", "Фото", "Налаштування"],
    activities: [
      { text: "Додав новий пост", date: "17.03" },
      { text: "Змінив аватар", date: "16.03" },
      { text: "Виконав лабу", date: "15.03" }
    ]
  };

  return (
    <div style={{ display: 'flex', padding: '20px', background: '#fff', borderRadius: '12px' }}>
      <Sidebar links={userData.links} />
      <MainContent>
        <UserInfo name={userData.name} bio={userData.bio} />
        <ActivityList activities={userData.activities} />
      </MainContent>
    </div>
  );
};

export default ProfilePage;
