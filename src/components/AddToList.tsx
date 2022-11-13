import React, { useState } from 'react';
import { IState as Props } from '../App';
// import { useLocalStorage } from './UseLocalStorage';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    // !input - if input is empty, don't handle it
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: input.age,
        // age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      note: '',
      img: '',
    });
  };

  return (
    <div className='input-box'>
      <input //
        className='AddToList-input'
        type='text'
        placeholder='name'
        value={input.name}
        onChange={handleChange}
        name='name'
      />
      <input //
        className='AddToList-input'
        type='text'
        placeholder='age'
        value={input.age}
        onChange={handleChange}
        name='age'
      />
      <input //
        className='AddToList-input'
        type='text'
        placeholder='image URL'
        value={input.img}
        onChange={handleChange}
        name='img'
      />
      <input //
        className='AddToList-input'
        type='text'
        placeholder='note'
        value={input.note}
        onChange={handleChange}
        name='note'
      />
      {/* <textarea className='AddToList-input' placeholder='note' /> */}

      <button className='btn' onClick={handleClick}>
        Add a new person to the List
      </button>
    </div>
  );
};

export { AddToList };
