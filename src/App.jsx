import { useState } from "react";
import Biblioteca from "./pages/Biblioteca";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "O Poder do Hábitos",
      autor: "Charles Duhigg",
      ano: 2012,
      genero: "Autoajuda",
      imagem: "https://m.media-amazon.com/images/I/815iPX0SgkL.jpg",
    },
    {
      id: 2,
      title: "1984",
      autor: "George Orwell",
      ano: 1949,
      genero: "Ficção Distópica",
      imagem: "https://m.media-amazon.com/images/I/819js3EQwbL.jpg",
    },
    {
      id: 3,
      title: "Dom Casmurro",
      autor: "Machado de Assis",
      ano: 1899,
      genero: "Literatura Brasileira",
      imagem: "https://m.media-amazon.com/images/I/61Z2bMhGicL.jpg",
    },
    {
      id: 4,
      title: "Can't Hurt Me",
      autor: "David Goggins",
      ano: 2018,
      genero: "Autobiografia/Motivação",
      imagem: "https://m.media-amazon.com/images/I/710oCZaYYUL.jpg",
    },
  ]);

  return <Biblioteca books={books} />;
}
export default App;
