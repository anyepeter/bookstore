import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../CSSmodule/bookitem.css';

const Book = ({ items }) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = items;

  return (
    <section className="bookSection">
      <div className="userContainer">
        <div className="detail">
          <p className="category">{category}</p>
          <h1 className="titles">{title}</h1>
          <p className="author">{author}</p>
        </div>
        <ul className="btnSection">
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
      <div className="circleCon flex-row">
        <div className="circle-wrap">
      <div className="circle">
        <div className="mask full">
          <div className="fill" />
        </div>
        <div className="mask half">
          <div className="fill" />
        </div>
        <div className="inside-circle" />
      </div>
    </div>
        <div className="progress">
          <p className="percentage">75%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapter">
        <h5>CURRENT CHAPTER</h5>
        <p className="chapterNumber">Chapter 17</p>
        <button className="buttonEl" type="submit">UPDATE PROGRESS</button>
      </div>
    </section>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
