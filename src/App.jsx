import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  // to handle book mark adding
  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  // to handle reading time
  const [totalReadingTime, setTotalReadingTime] = useState(0);

  const handleAddReadingTime = (id, readingTime) => {
    
    const newReadingTime = totalReadingTime + readingTime;
    console.log(newReadingTime);
    setTotalReadingTime(newReadingTime);

    // remove the read blog
    const remainingBookMarks = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(remainingBookMarks);
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Header></Header>
        <main className="md:flex p-4">
          <Blogs
            handleAddToBookMarks={handleAddToBookMarks}
            handleAddReadingTime={handleAddReadingTime}
          ></Blogs>
          <BookMarks bookMarks={bookMarks} totalReadingTime={totalReadingTime}></BookMarks>
        </main>
      </div>
    </>
  );
}

export default App;
