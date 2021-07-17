import { useState } from 'react';
import AddContactModal from './AddContactModal';
const FloatingEditButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="text-center fixed top-20 right-28 w-16 h-16 bg-white rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        edit
      </button>
      {isOpen && <AddContactModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default FloatingEditButton;
