import Profile from './components/SocialProfile/SocialProfile';
import user from './data-base/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data-base/data.json';
import FriendList from './components/FriendsList/FriendsList';
import friends from './data-base/friends.json';
import TransactionHistory from './components/Transactions/Transactions';
import transactions from './data-base/transactions.json';

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
