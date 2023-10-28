import { List } from 'antd';
import Item from '../../components/Item';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`,
  }));

const getMockArchivedData = () =>
  getAvatar([
    { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
    { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  ]);
function Index() {
  return (
    <div className="container lg mx-auto">
      <List
        dataSource={getMockArchivedData()}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default Index;
