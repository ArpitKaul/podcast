import React from 'react';
import { useSelector } from 'react-redux';
import ErrorPage from './ErrorPage';
import Inputpodcast from '../Components/Addpodcast/inputpodcast';

const Addpodcast = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <Inputpodcast /> : <ErrorPage />}
    </div>
  );
};

export default Addpodcast;
