import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BookTable = ({books}) => {
  return (
    <div className="">
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-gray-400 rounded-md backdrop-blur-sm">No</th>
            <th className="border border-gray-400 rounded-md backdrop-blur-sm">Title</th>
            <th className="border border-gray-400 rounded-md max-md:hidden backdrop-blur-sm">
              Author
            </th>
            <th className="border border-gray-400 rounded-md max-md:hidden backdrop-blur-sm">
              Publish Year
            </th>
            <th className="border border-slate-400 rounded-md backdrop-blur-sm">Operation</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-400 rounded-md text-center backdrop-blur-sm">
                {index + 1}
              </td>
              <td className="border border-slate-400 rounded-md text-center backdrop-blur-sm">
                {book.title}
              </td>
              <th className="border border-slate-400 rounded-md text-center max-md:hidden backdrop-blur-sm">
                {book.author}
              </th>
              <th className="border border-slate-400 rounded-md text-center max-md:hidden backdrop-blur-sm">
                {book.publishYear}
              </th>
              <td className="border border-slate-400 rounded-md text-center backdrop-blur-sm ">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-400" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-300" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-300" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
