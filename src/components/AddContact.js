import { useState } from 'react';
import axios from 'axios';
export const AddContact = () => {
  const [newContact, setNewContact] = useState({
    name: '',
    phonenumber: 0,
    information: '',
    group: 'none',
  });

  const { name, phonenumber, information, group } = newContact;

  const handleChange = (e) => {
    e.preventDefault();
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:5000/api/v1/contacts', {
          name: name,
          phonenumber: `+62${phonenumber}`,
          information: information,
          group: group,
        })
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="text-center">
      <h3>New Contact</h3>
      <form onSubmit={onSubmit}>
        <div className="m-2">
          <input
            className="bg-gray-200 rounded"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="name"
            required
          />
        </div>
        <div className="m-2">
          <input
            className="bg-gray-200 rounded"
            type="number"
            name="phonenumber"
            value={phonenumber}
            onChange={handleChange}
            placeholder="phone number"
            required
          />
        </div>
        <div className="m-2">
          <input
            className="bg-gray-200 rounded"
            type="text"
            name="information"
            value={information}
            onChange={handleChange}
            placeholder="information"
          />
        </div>
        <div className="m-2">
          <input
            className="bg-gray-200 rounded"
            type="text"
            name="group"
            value={group}
            onChange={handleChange}
            placeholder="group"
          />
        </div>
        <button
          type="submit"
          className="text-cente mt-4 bg-blue-600 w-full text-white py-4"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};
