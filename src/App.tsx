import React, { useState } from 'react';
import { Header } from './components/Header';
import { List } from './components/List';
import { AddToList } from './components/AddToList';
import { useLocalStorage } from './components/UseLocalStorage';
import './App.css';

export interface IState {
  people: {
    id?: number;
    name: string;
    age: string;
    url: string;
    note?: string;
  }[];
}

export const deleteGuest = () => {
  localStorage.removeItem('guests');
  // el.parentElement.remove();
  window.location.reload();
};

function App() {
  const [people, setPeople] = useLocalStorage<IState['people']>('guests', [
    {
      id: 1,
      name: 'Steve Jobs',
      age: 'A Silicon Valley businessman most famous for his work with the company Apple Computer Inc.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1280px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
      note: 'Co-founder of Apple Inc',
    },
    {
      id: 2,
      name: 'Elon Musk',
      age: 'Tesla - a company that makes electric vehicles. SpaceX - an aerospace company.',
      url: 'https://pyxis.nymag.com/v1/imgs/34c/cae/ce8997338cbad42766ca705559b6e0ad6f-elon-musk-.rsquare.w700.jpg',
      note: 'CEO of SpaceX, Tesla and Twitter',
    },
  ]);

  return (
    <div className='App'>
      <Header />
      <h4 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>People invited to my Party</h4>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
