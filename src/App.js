import Profile from './components/SocialProfile/SocialProfile';
import user from './data-base/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data-base/data.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
    </>
  );
}

export default App;
