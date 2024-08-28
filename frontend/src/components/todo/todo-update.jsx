import React from 'react'

const Todoupdate = () => {
  return (
    <div className='d-flex  justify-content-center align-items-start flex-column p-5'>
    <h3 className='my-5'>update your Task!!</h3>
    <input 
      type='text'
       className='update-inputs w-100 p-2'
    />
  <textarea
    className='update-inputs w-100 my-4 p-2'

   />

   <div className='update-btn d-flex '>
    <button className='text-white bg-black'>
      update
    </button>
    <button className='text-white bg-danger mx-3'>
      cancel
    </button>
   </div>
    </div>
  );
}

export default Todoupdate;
