import { Header } from './components/Header';
import { List } from './components/List';
import { AddToList } from './components/AddToList';
import { useLocalStorage } from './components/UseLocalStorage';
import './scss/App.scss';

export interface IState {
  people: {
    id?: number;
    name: string;
    notes: string;
    url: string;
    occupation?: string;
  }[];
}

export const deleteGuest = () => {
  localStorage.removeItem('guests');
  window.location.reload();
};

function App() {
  const [people, setPeople] = useLocalStorage<IState['people']>('guests', [
    {
      id: 1,
      name: 'Mickey',
      occupation: 'American cartoon character',
      notes: 'Mickey Mouse was created by Walt Disney in 1928. It serves as the mascot of the Walt Disney Company.',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kyLFUfyyFodzK06XKecjC9KRy1g2C2kitA&usqp=CAU',
    },
    {
      id: 1,
      name: 'Donald',
      occupation: "Scrooge McDuck's nephew",
      notes: 'He is a Duck, and his girlfriend is Daisy Duck. He has a star on the Hollywood Walk of Fame.',
      url: 'https://dreamlightvalleywiki.com/images/6/6f/Donald_Duck.png',
    },
  ]);

  return (
    <div className='App'>
      <Header />
      <h5>People invited to my Party</h5>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
