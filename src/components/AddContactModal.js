import { AddContact } from './AddContact';

const AddContactModal = ({ setIsOpen }) => {
  return (
    <div className="modal absolute bg-white shadow-lg p-4 rounded-lg">
      <div className="text-right">
        <button
          className="bg-red-400 px-3 py-1 rounded-lg text-white"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </div>
      <AddContact />
    </div>
  );
};

export default AddContactModal;
