import React, { useState } from 'react';
import { List } from './components/List';
import './App.css';

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Steve Jobs',
      age: 56,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1280px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
      note: 'Founder of Apple',
    },
    {
      name: 'Elon Musk',
      age: 51,
      url: 'https://pyxis.nymag.com/v1/imgs/34c/cae/ce8997338cbad42766ca705559b6e0ad6f-elon-musk-.rsquare.w700.jpg',
      note: 'CEO of SpaceX, Tesla and Twitter',
    },
  ]);

  return (
    <div className='App'>
      <h2>People invited to my Party</h2>
      <List people={people} />
    </div>
  );
}

export default App;
