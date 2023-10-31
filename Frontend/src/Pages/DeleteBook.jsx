import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import BackButton from '../components/BackButton'
import { useNavigate, useParams } from 'react-router-dom'
import { enqueueSnackbar, useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar
  const handleDeleteBook = () =>{
    setLoading(true);
    axios
      .delete(`http://localhost:5555/book/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('boo Delete Successfully',{variant:'success'})
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened Plase check console')
        enqueueSnackbar('Error',{variant:'error'})
        console.log(error);
      });
  }

  return (
    <div className='p-4  text-white font-bold'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> :''}
      <div className='flex flex-col backdrop-blur-md items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You Want To Delete this Book </h3>
      <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
       Yes, Delete it
      </button>
      </div>
    </div>
  )
}

export default DeleteBook