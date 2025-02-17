import React from 'react'
// import { Color } from 'three'
import { Link } from 'react-router-dom'

const Categories = () => {
  const cat =[
    {
      name:"Comedy",
      Color: "bg-purple-200",
      to:"/categories/comedy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
    },
    {
      name:"Buisness",
      Color: "bg-green-200",
      to:"/categories/Business",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
    },
    {
      name:"Hobbies",
      Color: "bg-green-200",
      to:"/categories/Hobbies",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
    },
    {
      name:"Education",
      Color: "bg-green-200",
      to:"/categories/Education",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
    },
    {
      name:"Government",
      Color: "bg-green-200",
      to:"/categories/Government",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
    }
  ]
  return (
    <div className='h-screen lg:h-[78vh]'>
      <div className='px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cat.map((items,i)=>(
          <Link to={items.to} key={i} className={`rounded px-8 py-4 text-xl font-semibold ${items.Color} hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden -z-10`}>
            <div>{items.name}</div>
            <div className='w-[100%] flex items-center justify-end absolute -bottom-2 -right-2'>
              <img src={items.img} alt="category" className='rounded rotate-12 h-[15vh] md:h-[17vh] lg:h-[18vh]' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
