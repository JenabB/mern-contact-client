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

  const sorted = contacts.sort((a, b) => a.name.localeCompare(b.name));

  const groupingLabel = sorted.reduce((r, e) => {
    let groupLabel = e.name.substr(0, 1).toUpperCase();
    // Cek jika groupLabel belum terisi
    if (!r[groupLabel]) r[groupLabel] = { groupLabel, data: [e] };
    // Cek jika groupLabel sudah terisi, maka push e
    else r[groupLabel].data.push(e);
    // Kembalikan array yang hanya berisi groupLabel saja
    return r;
  }, {});

  // Tambahkan ke dalam newData
  let groupedContact = Object.values(groupingLabel);

  return (
    <div className="bg-blue-400">
      <Header />
      <div className=" p-4 h-full lg:w-3/5 w-full mx-auto">
        <div className="text-center">
          <input
            placeholder="search"
            className="p-2 text-center rounded-full"
          />
        </div>
        {groupedContact.map((g, i) => (
          <div>
            <div className="my-8">
              <h1 className="bg-white text-blue rounded-full m-2 my-5 inline p-2 px-3">
                {g.groupLabel}
              </h1>
              <div className="mt-4">
                {g.data.map((dat, i) => (
                  <Link to={`${dat._id}`}>
                    <div className="bg-white rounded shadow-lg m-2 p-4" key={i}>
                      <h1>{dat.name}</h1>
                      <p>{dat.group}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* {contacts &&
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
          ))} */}
      </div>
      <FloatingActionButton />
    </div>
  );
};

export default Home;
