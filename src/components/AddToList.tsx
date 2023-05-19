import React, { useState } from 'react';
import { IState as Props } from '../App';
import { deleteGuest } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    notes: '',
    occupation: '',
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
    if (!input.name || !input.notes || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        notes: input.notes,
        // age: parseInt(input.age),
        url: input.img,
        occupation: input.occupation,
      },
    ]);

    setInput({
      name: '',
      notes: '',
      occupation: '',
      img: '',
    });
  };

  return (
    <div className='input-box'>
      <input //
        className='AddToList-input'
        type='text'
        placeholder='name (required)'
        value={input.name}
        onChange={handleChange}
        name='name'
      />
      <input //
        className='AddToList-input'
        type='text'
        placeholder='occupation'
        value={input.occupation}
        onChange={handleChange}
        name='occupation'
      />
      <input //
        className='AddToList-input'
        type='text'
        placeholder='notes (required)'
        value={input.notes}
        onChange={handleChange}
        name='notes'
      />
      <input //
        className='AddToList-input'
        type='text'
        placeholder='image URL (required)'
        value={input.img}
        onChange={handleChange}
        name='img'
      />

      <div className='buttons'>
        <button className='btn red' onClick={() => deleteGuest()}>
          Clear the List
        </button>
        <button className='btn green' onClick={handleClick}>
          Add a New Guest
        </button>
      </div>
    </div>
  );
};

export { AddToList };
