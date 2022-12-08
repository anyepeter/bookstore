import React from 'react';
import Book from './books';
import Addbook from './addBooks';

const Bookitems = () => {
  const bookLists = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanana Collins',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Will Smiths',
      chapter: 'Chapter 3',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Chirs Jenner',
      chapter: 'Introduction',
    },
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
      <Addbook />
    </div>
  );
};

export default Bookitems;
