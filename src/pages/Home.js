import { useState, useEffect } from 'react';

import Header from '../components/Header';
import { Link } from 'react-router-dom';
import FloatingActionButton from '../components/FloatingActionButton';

const Home = () => {
  const [contacts, setContacts] = useState([]);

  const PORT = 'http://localhost:5000';

  useEffect(() => {
    fetch(`${PORT}/api/v1/contacts`)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.data);
      })
      .catch((error) => console.log(error.response));
  });

  return (
    <div>
      <Header />
      <div className="bg-blue-400 p-4 h-screen">
        {contacts &&
          contacts.map((contact, i) => (
            <Link to={`${contact._id}`}>
              <div className="bg-white rounded shadow-lg m-2 p-4" key={i}>
                <div className="flex aligns-center">
                  <div className="mr-2 bg-gray-200 p-2 px-4 rounded">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <h1>{contact.name}</h1>
                    <p className="text-gray-500">{contact.group}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <FloatingActionButton />
    </div>
  );
};

export default Home;
