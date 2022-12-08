import React from 'react';

const Bookitems = () => {
  const bookLists = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanana Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Will Smiths',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Chirs Jenner',
    },
  ];
  return (
    <div>
      <ul>
        {bookLists.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}

      </ul>
    </div>
  );
};

export default Bookitems;
