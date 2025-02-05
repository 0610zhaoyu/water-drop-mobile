import './App.css';
import { useQuery } from '@apollo/client';
import { FIND } from './graphql/demo';

const App = () => {
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: 'abdeafed-9f52-4157-bf20-79fe478e6a71',
    },
  });
  return (
    <div>
      <span>{JSON.stringify(data)}</span>
      <span>{`${loading}`}</span>
    </div>
  );
};

export default App;
