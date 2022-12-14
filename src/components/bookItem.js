import React from 'react';
import PropTypes from 'prop-types';
import Book from './books';

const Bookitems = (props) => {
  const { books } = props;
  return (
    <div>
      <ul>
        {
          books.map((book) => (
            <li key={book.id}>
              <Book items={book} />
            </li>
          ))
        }

      </ul>
    </div>
  );
};

Bookitems.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      chapter: PropTypes.string,
    }),
  ).isRequired,
};

export default Bookitems;
