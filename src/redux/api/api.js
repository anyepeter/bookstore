const apiLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X8JnkuOPMOkJQ3tlKNbU/books/';

const getBooks = async () => {
const getBookItems = await fetch(apiLink)
.then((res) => res.json())
return getBookItems
}

