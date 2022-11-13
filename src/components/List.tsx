import React from 'react';
import { IState as IProps } from '../App';
import { deleteGuest } from '../App';

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
    return people.map((person) => {
      return (
        <div>
          <li key={person.id} className='List'>
            <div className='List-header'>
              <img className='List-img' src={person.url} alt='sport' />
              <h5>{person.name}</h5>
            </div>
            <p className='List-note'>{person.note}</p>
            <p className='note'>{person.age}</p>
            {/* <p className='List-note'>{person.note}</p> */}
            <button className='btn btn-delete red lighten-2' onClick={() => deleteGuest()}>
              d
            </button>
          </li>
        </div>
      );
    });
  };

  return <ul>{renderList()}</ul>;
  // return (
  //   <div>
  //     <ul>
  //       {people.map((person) => {
  //         return <div>{person.name}</div>;
  //       })}
  //     </ul>
  //   </div>
  // );
};

export { List };
