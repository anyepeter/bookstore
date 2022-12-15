import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Addbook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      const payload = { id: uuidv4(), title, author };
      dispatch(addBook(payload));
      setTitle('');
      setAuthor('');
    } else {
      setTitle('');
      setAuthor('');
      const error = document.getElementById('error');
      error.innerHTML = 'Enter a title and author';
      setTimeout(() => {
        error.innerHTML = '';
      }, 1000);
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleForm}>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title Here" />
        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author Name Here" />
        <button className="button-sub" type="submit">Add Book</button>
        <span id="error" />
      </form>
    </div>
  );
};
export default Addbook;
