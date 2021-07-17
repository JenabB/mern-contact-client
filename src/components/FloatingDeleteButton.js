import { useState } from 'react';
import AddContactModal from './AddContactModal';

const FloatingDeleteButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="text-blue-700 fixed top-20 right-10 w-16 h-16 bg-white rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <h1>Delete</h1>
      </button>
      {isOpen && <AddContactModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default FloatingDeleteButton;
