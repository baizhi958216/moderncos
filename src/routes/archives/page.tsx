import { List } from 'antd';
import { useModel } from '@modern-js/runtime/model';
import contacts from '../../models/contacts';
import Item from '../../components/Item';

function Index() {
  const [{ archived }] = useModel(contacts);
  return (
    <div className="container lg mx-auto">
      <List
        dataSource={archived}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default Index;
