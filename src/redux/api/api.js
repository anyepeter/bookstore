const apiLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X8JnkuOPMOkJQ3tlKNbU/books/';

export const getBooks = async () => {
const getBookItems = await fetch(apiLink)
.then((res) => res.json())
return getBookItems
}

export const addBooksItem = async (elements) => {
const postBooks = await fetch(apiLink, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(elements),
}).then((response) => response.text());
return postBooks;
}
export const removeBookItem = async (id) => {
  const removeBook = await fetch(`apilink${id}`, {
      method: 'DELETE',
    }).then((response) => response.text());
    return removeBook;
  
}