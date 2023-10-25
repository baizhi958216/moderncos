import { List } from 'antd';
import styled from '@modern-js/runtime/styled';

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

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border: 4px solid #0ef;
  border-radius: 50%;
`;

function App() {
  return (
    <div>
      <List
        dataSource={mockData}
        renderItem={({ name, email, avatar }) => (
          <List.Item key={name}>
            <List.Item.Meta
              avatar={<Avatar src={avatar} />}
              title={name}
              description={email}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
