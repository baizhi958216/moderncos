import { Helmet } from '@modern-js/runtime/head';
import { List } from 'antd';
import Item from '../components/Item';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const mockData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },
  { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu' },
]);

function App() {
  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>All</title>
      </Helmet>
      <List
        dataSource={mockData}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default App;
