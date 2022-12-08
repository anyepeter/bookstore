import React from 'react';
import Book from './books';

const Bookitems = () => {
  const bookLists = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanana Collins',
      type: 'Action',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Will Smiths',
      type: 'Science Fiction',
      chapter: 'Chapter 3',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Chirs Jenner',
      type: 'Economy',
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
    </div>
  );
};

export default Bookitems;
