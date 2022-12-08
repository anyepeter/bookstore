import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ items }) => {
  const {
    title, author, chapter,
  } = items;
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{author}</p>

        <ul>
          <li><button type="submit">Comments</button></li>
          <li><button type="submit">Remove</button></li>
          <li><button type="submit">Edit</button></li>
        </ul>
      </div>
      <div>
        <span />
      </div>
      <div>
        <span>CURRENT CHAPTER</span>
        <p>{chapter}</p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  chapter: PropTypes.string,
}.isRequired;

export default Book;
