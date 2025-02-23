import React from 'react'
import { Link } from 'react-router-dom'
const YourPodcast = () => {
  return (
    <div className='px-4 lg:px-12 my-4 '>
      <div className='flex items-center justify-between gap-4'>
        <h1 className='text-xl font-semibold md:font-bold'>Your Podcasts</h1>
        <Link to="/add-podcasts" className='px-4 py-2 bg-zinc-800 font-semibold'>
        Add PoDCAST
        </Link>
      </div>
    </div>
  )
}

export default YourPodcast
