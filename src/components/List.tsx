import React from 'react';
import { IState as IProps } from '../App';
import '../scss/List.scss';
// import { deleteGuest } from '../App';

// interface IProps {
//   people: {
//     name: string;
//     age: number;
//     url: string;
//     note?: string;
//   }[];
// }

// const List = (props: IProps) => {
//   return <div>I am the list.</div>;
// };

const List: React.FC<IProps> = ({ people }) => {
  // const deleteGuest = (el: any) => {
  //   localStorage.removeItem('guests');
  //   el.parentElement.remove();
  //   window.location.reload();
  // };

  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <div key={index}>
          <li className='card'>
            <div className='card__header'>
              <img className='card__img' src={person.url} alt='guest' />
              <h6>{person.name}</h6>
            </div>
            <p className='card__occupation'>{person.occupation}</p>
            <p className='card__note'>{person.notes}</p>
            {/* <p className='List-note'>{person.note}</p> */}
            {/* <button className='btn btn-delete red lighten-2' onClick={() => deleteGuest()}>
              d
            </button> */}
          </li>
        </div>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export { List };
