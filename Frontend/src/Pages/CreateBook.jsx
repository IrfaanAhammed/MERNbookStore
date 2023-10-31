import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { enqueueSnackbar, useSnackbar } from 'notistack'


const CreateBook = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishYear] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const handleSaveBook = () =>{
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true);
    axios
      .post(`http://localhost:5555/book`,data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created Successfully',{variant:'success'})
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        //alert('An happened Plase check console')
        enqueueSnackbar('Error',{variant:'error'})
        console.log(error);
      });
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4 font-bold text-white'>Create Book</h1>
      {loading ? <Spinner />:''}
      <div className='flex flex-col border-2 backdrop-blur-md border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-200'>Title</label>
          <input 
          type="text"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          className='border-2 border-gray-400 rounded-md px-4 py-2 w-full bg-transparent' />
        </div>
        <div className='my-4  '>
          <label className='text-xl mr-4 text-gray-200 '>Author</label>
          <input 
          type="text"
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
          className='border-2 border-gray-400 rounded-md px-4 py-2 w-full bg-transparent' />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-200'>Publish Year</label>
          <input 
          type="text"
          value={publishYear}
          onChange={(e)=> setPublishYear(e.target.value)}
          className='border-2 border-gray-400 rounded-md px-4 py-2 w-full bg-transparent' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
  Save
</button>

      </div>
    </div>
  )
}

export default CreateBook