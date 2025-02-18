import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const cat = [
        {
            name: "Comedy",
            color: "bg-gradient-to-r from-purple-500/80 to-purple-800/80", 
            to: "/categories/comedy",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
        },
        {
            name: "Business", 
            color: "bg-gradient-to-r from-green-500/80 to-green-800/80", 
            to: "/categories/business", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
        },
        {
            name: "Hobbies",
            color: "bg-gradient-to-r from-blue-500/80 to-blue-800/80", 
            to: "/categories/hobbies", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
        },
        {
            name: "Education",
            color: "bg-gradient-to-r from-yellow-500/80 to-yellow-800/80", 
            to: "/categories/education", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
        },
        {
            name: "Government",
            color: "bg-gradient-to-r from-red-500/80 to-red-800/80", 
            to: "/categories/government", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmEHmEmgQio1yGnuHk7c3KVHDqARPUB6A7A&s"
        }
    ];

    return (
        <div className='h-screen lg:h-[78vh] mt-32'> 
            <div className='px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {cat.map((items, i) => (
                    <Link to={items.to} key={i} className={`rounded-lg px-6 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative overflow-hidden h-[25vh] lg:h-[22vh]`}>
                        <div className='text-white'>{items.name}</div> 
                        <div className='absolute bottom-2 right-2 w-24 h-24 rounded-full overflow-hidden'> 
                            <img src={items.img} alt="category" className='object-cover w-full h-full scale-125' style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;