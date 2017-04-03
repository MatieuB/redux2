// action creators live here and  must return a usable action with 'TYPE' and some data (payload)
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
