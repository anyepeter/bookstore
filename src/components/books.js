import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ items }) => {
  const dispatch = useDispatch();
  const { id, title, author } = items;

  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{author}</p>

        <ul>
          <li><button type="submit">Comments</button></li>
          <li>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeBook(id));
              }}
            >
              Remove
            </button>
          </li>
          <li><button type="submit">Edit</button></li>
        </ul>
      </div>
      <div>
        <span />
      </div>
      <div>
        <span>CURRENT CHAPTER</span>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
}.isRequired;

export default Book;
