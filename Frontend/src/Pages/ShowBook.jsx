import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/book/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 text-white font-bold">
      <BackButton />
      <h1 className="text-3xl my-4">Show Books</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 backdrop-blur-sm">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-100">Id</span>
            <span className="text-gray-100" >{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-100">Title</span>
            <span className="text-gray-100">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-100">Author</span>
            <span className="text-gray-100">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-100">Publish Year</span>
            <span className="text-gray-100">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-100">Create Time</span>
            <span className="text-gray-100">{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-100">Last Update Time</span>
            <span className="text-gray-100">{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
