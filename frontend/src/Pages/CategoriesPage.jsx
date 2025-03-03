import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PodcastCard from "../Components/PodcastCard/PodcastCard";

const CategoriesPage = () => {
  const { cat } = useParams(); // Move this line up to ensure 'cat' is defined before using it
  const [Podcasts, setPodcasts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/${cat}`, {
          withCredentials: true,
        });
        setPodcasts(res.data.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };
    fetch();
  }, [cat]); // Add 'cat' as a dependency to useEffect

  console.log(Podcasts);

  return (
    <div className="px-4 py-4 lg:px-12">
      <h1 className="text-xl font-semibold">{cat}</h1>
      <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Podcasts && Podcasts.length > 0 && Podcasts.map((items, i) => (
          <div key={i}>
            <PodcastCard items={items} />
          </div>
        ))}
      </div>
      {Podcasts && Podcasts.length === 0 && (
        <div className="text-3xl font-bold h-screen text-zinc-700 flex items-center justify-center">
          No Podcasts Right Now
        </div>
      )}
    </div>
  );
};x``

export default CategoriesPage;
