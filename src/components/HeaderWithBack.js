import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const HeaderWithBack = () => {
  let history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="bg-blue-500 p-4 text-xl text-center text-white font-bold">
      <FaArrowLeft
        style={{ color: 'white' }}
        className="cursor-pointer"
        onClick={handleBack}
      />
      <div></div>
      <div></div>
    </div>
  );
};

export default HeaderWithBack;
