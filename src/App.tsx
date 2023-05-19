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
      name: 'Steve Jobs',
      occupation: 'Co-founder of Apple Inc',
      notes: 'A Silicon Valley businessman. Most famous for his work with the company Apple Computer Inc.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1280px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
    },
    {
      id: 1,
      name: 'Elon Musk',
      occupation: 'CEO of SpaceX, Tesla and Twitter',
      notes: 'Tesla - a company that makes electric vehicles. SpaceX - an aerospace company.',
      url: 'https://pyxis.nymag.com/v1/imgs/34c/cae/ce8997338cbad42766ca705559b6e0ad6f-elon-musk-.rsquare.w700.jpg',
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
