import React from 'react';

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

// const List = (props: IProps) => {
//   return <div>I am the list.</div>;
// };

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img className='List-img' src={person.url} alt='sport' />
            <h5>{person.name}</h5>
          </div>
          <p>{person.age} years old</p>
          <p className='List-note'>{person.note}</p>
        </li>
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
