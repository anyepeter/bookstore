import React from 'react';
import Book from './books';

const Bookitems = () => {
  const bookLists = [
  ];
  return (
    <div>
      <ul>
        {bookLists.map((book) => (
          <li key={book.id}>
            <Book items={book} />
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Bookitems;
