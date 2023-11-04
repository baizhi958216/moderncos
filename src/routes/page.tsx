import { Helmet } from '@modern-js/runtime/head';
import { useModel } from '@modern-js/runtime/model';
import { List } from 'antd';
import Item from '../components/Item';
import contacts from '../models/contacts';

function App() {
  const [{ items }, { archive }] = useModel(contacts);
  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>All</title>
      </Helmet>
      <List
        dataSource={items}
        renderItem={info => (
          <Item
            key={info.name}
            info={info}
            onArchive={() => {
              archive(info.email);
            }}
          />
        )}
      />
    </div>
  );
}

export default App;
