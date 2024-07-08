import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";
const BookMarks = ({ bookMarks, totalReadingTime }) => {
  return (
    <div className="md:w-1/3 ml-4">
      <div className="py-4 bg-gray-300 rounded-xl mb-5">
        <h3 className="text-3xl font-bold text-center">Reading Time: {totalReadingTime}</h3>
      </div>

      <div className=" bg-gray-300 py-4  rounded-xl">
        <h2 className="text-3xl font-bold text-center">
          Bookmarked Blogs: {bookMarks.length}
        </h2>
        {bookMarks.map((bookMark, idx) => (
          <BookMark key={idx} bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  totalReadingTime: PropTypes.number,
};
export default BookMarks;
