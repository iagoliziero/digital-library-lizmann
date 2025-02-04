import { useEffect, useRef, useState } from "react";
import Biblioteca from "./pages/Biblioteca";
import api from "../src/services/api"

function App() {
  const [books, setBooks] = useState([])

  async function getBooks() {
    const response = await api.get('/books')
    setBooks(response.data)
    }
  
    async function deleteBook(id) {
    await api.delete(`/books/${id}`)
    setBooks((prev) => prev.filter((book) => book.id !== id))
    }

 useEffect(() => {
 getBooks()
 }, [setBooks])

  return (
    <div>
  <Biblioteca books={books}
  deleteBook = {deleteBook}
  />
  </div>
  )
}
export default App;
