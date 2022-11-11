import React, { useState } from 'react';
import { List } from './components/List';
import { AddToList } from './components/AddToList';
import { useLocalStorage } from './components/UseLocalStorage';
import './App.css';

export interface IState {
  people: {
    id?: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useLocalStorage<IState['people']>('guests', [
    {
      id: 1,
      name: 'Steve Jobs',
      age: 56,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1280px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
      note: 'Founder of Apple',
    },
    {
      id: 2,
      name: 'Elon Musk',
      age: 51,
      url: 'https://pyxis.nymag.com/v1/imgs/34c/cae/ce8997338cbad42766ca705559b6e0ad6f-elon-musk-.rsquare.w700.jpg',
      note: 'CEO of SpaceX, Tesla and Twitter',
    },
  ]);

  return (
    <div className='App'>
      <h5 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>People invited to my Party</h5>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
