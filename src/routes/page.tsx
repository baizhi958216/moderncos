import { useLoaderData } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import { useModel } from '@modern-js/runtime/model';
import { List } from 'antd';
import Item from '../components/Item';
import contacts from '../models/contacts';
import { LoaderData } from './page.data';

function App() {
  const { data } = useLoaderData() as LoaderData;
  const [{ items }, { archive, setItems }] = useModel(contacts);
  if (items.length === 0) {
    setItems(data);
  }
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
