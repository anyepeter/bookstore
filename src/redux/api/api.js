import axios from 'axios';

const apiLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X8JnkuOPMOkJQ3tlKNbU/books/';


export const addBooksItem = async (elements) => {
  const {
    id, title, author, category,
  } = elements;
  await axios.post(apiLink, {
    item_id: id, title, author, category,
  });
  return elements;
};
export const removeBookItem = async (id) => {
 await axios.delete(`apiLink/${id}`);
 return id;
};

const renderBooks = (response) => Object.entries(response.data).map((arr) => {
  const [id, [{ title, author, category }]] = arr;
  return {
    id, title, author, category,
  };
});

export const getBooks = async () => {
 const getbookItems = await axios.get(apiLink)
 return renderBooks(getbookItems)
};