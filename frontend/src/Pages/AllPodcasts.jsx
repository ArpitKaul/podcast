import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/get-podcasts');
        setPodcasts(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="my-4 px-4 lg:px-12 bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">All Podcasts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {podcasts.map((podcast) => (
          <div key={podcast._id} className="border border-gray-700 rounded-lg p-4">
            <img
              src={`http://localhost:5000/${podcast.frontImage}`}
              alt={podcast.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{podcast.title}</h2>
            <p className="text-sm text-gray-400">{podcast.Description}</p>
            <p className="text-sm text-gray-400">Category: {podcast.category.categoryName}</p>
            <audio controls className="w-full mt-2">
              <source src={`http://localhost:5000/${podcast.audioFile}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPodcasts;