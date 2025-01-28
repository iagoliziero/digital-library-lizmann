import { useState } from "react";
import Biblioteca from "./pages/Biblioteca";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      UrlDaImagem: "",
      title: "O Poder do Hábito",
      autor: "Charles Duhigg",
      ano: 2012,
      avaliacao: 4,
    },
    {
      id: 2,
      UrlDaImagem: "",
      title: "Hábitos Atômicos",
      autor: "James Clear",
      ano: 2018,
      avaliacao: 5,
    },
    {
      id: 3,
      UrlDaImagem: "",
      title: "Hábitos Atômicos",
      autor: "James Clear",
      ano: 2019,
      avaliacao: 5,
    },
  ]);
      return (
        <Biblioteca books={books} />
      )
}
export default App;
