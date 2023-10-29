import { useLoaderData } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import { List } from 'antd';
import Item from '../components/Item';
import { LoaderData } from './page.data';

function App() {
  const { data } = useLoaderData() as LoaderData;
  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>All</title>
      </Helmet>
      <List
        dataSource={data}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default App;
