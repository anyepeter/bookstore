import React from 'react';
import { useSelector } from 'react-redux';
import Bookitems from '../components/bookItem';
import Addbook from '../components/addBooks';

const BookPage = () => {
  const bookEl = useSelector((state) => state.Books);
  return (
    <main>
      <Bookitems books={bookEl} />
      <Addbook />
    </main>
  );
};
export default BookPage;
