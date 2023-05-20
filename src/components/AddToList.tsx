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

  type InputError = {
    name?: boolean;
    occupation?: boolean;
    img?: boolean;
  };
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputError, setInputError] = useState<InputError>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    // !input - if input is empty, don't handle it
    if (!input.name || !input.occupation || !input.img) {
      // alert('Please fill in the name field');

      const errorFields: InputError = {};

      if (!input.name) {
        errorFields.name = true;
      }

      if (!input.occupation) {
        errorFields.occupation = true;
      }

      if (!input.img) {
        errorFields.img = true;
      }

      setInputError(errorFields);
      return;
    }

    // Clear any existing input errors
    setInputError({});

    setPeople([
      ...people,
      {
        name: input.name,
        notes: input.notes,
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
    <>
      <div className='input-box'>
        <input //
          className={`${inputError.name ? 'red-placeholder' : ''}`}
          type='text'
          // placeholder='name (required)'
          // style={inputError.name ? { color: 'red' } : undefined}
          placeholder={inputError.name ? 'name (required)' : 'name'}
          required
          value={input.name}
          onChange={handleChange}
          name='name'
          title='Please enter a name'
        />

        <input //
          // className='AddToList-input'
          className={`${inputError.occupation ? 'red-placeholder' : ''}`}
          type='text'
          placeholder={inputError.occupation ? 'occupation (required)' : 'occupation'}
          value={input.occupation}
          onChange={handleChange}
          name='occupation'
        />
        <input //
          type='text'
          placeholder='notes'
          value={input.notes}
          onChange={handleChange}
          name='notes'
        />
        <input //
          className={`${inputError.img ? 'red-placeholder' : ''}`}
          type='text'
          placeholder={inputError.img ? 'image URL (required)' : 'image URL'}
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
    </>
  );
};

export { AddToList };
