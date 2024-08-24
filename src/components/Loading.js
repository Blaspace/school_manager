import React from 'react'
import { BiLoader } from 'react-icons/bi'

function Loading({loading}) {
  return (
    <>
    {loading &&
    <div className='popup-con'>
      <div className='loader-con'>
        <BiLoader size={50} color='black' className='loader'/>
      </div>
    </div>
    }
    </>
  )
}

export default Loading
