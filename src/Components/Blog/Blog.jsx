import PropTypes from "prop-types";
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookMarks, handleAddReadingTime }) => {
  const {id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-7">
      <img
        className="w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="my-5 px-3 flex justify-between">
        <div className="flex gap-6">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="self-center">
          <div className="flex justify-center items-center">
            <span className="mr-3">{reading_time} min read</span>
            <button onClick={() => handleAddToBookMarks(blog)} className="">
              <BsBookmark></BsBookmark>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="my-5">
        {hashtags.map((hash, idx) => (
          <span className="mr-3" key={idx}>
            <a className="underline text-blue-500" href="">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => {
          handleAddReadingTime(id, reading_time);
        }}
        href=""
        className="underline text-purple-800"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMarks: PropTypes.func.isRequired,
  handleAddReadingTime: PropTypes.func.isRequired
};
export default Blog;
