import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import '../CSSmodule/bookitem.css';

const Book = ({ items }) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = items;
  const [percent] = useState(Math.floor(Math.random() * 100));
  return (
    <div className="book-card">
      <div className="card-left">
        <h4 className="book-category">{category}</h4>
        <h1 className="book-title">{title}</h1>
        <p className="book-author">{author}</p>
        <ul className="actions">
          <li><button type="button">Comments</button></li>
          <div className="seperator" />
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
          <div className="seperator" />
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="progress">
        <div style={{ width: 70, height: 70 }}>
          <CircularProgressbar
            value={percent}
            styles={buildStyles({
              rotation: 2,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathColor: '#0290ff',
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <div>
          <p className="textOne">
            {`${percent}%`}
          </p>
          <p className="textTwo">Completed</p>
        </div>
      </div>
      <div className="card-right">
        <h4>CURRENT CHAPTER</h4>
        <h2>Chapter 17</h2>
        <button type="button" className="primary-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
