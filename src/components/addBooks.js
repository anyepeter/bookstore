import React from 'react';

const Addbook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" name="title" placeholder="Book Title Here" />
      <input type="text" name="author" placeholder="Author Name Here" />
      <button className="button-sub" type="submit">Add Book</button>
    </form>
  </div>
);

export default Addbook;
