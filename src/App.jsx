import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <body className="max-w-[1200px] mx-auto">
        <Header></Header>
        <main className="md:flex p-4">
          <Blogs></Blogs>
          <BookMarks></BookMarks>
        </main>
      </body>
    </>
  );
}

export default App;
