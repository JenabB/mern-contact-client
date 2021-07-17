import { useState, useEffect } from 'react';
import moment from 'moment';
import HeaderWithBack from '../components/HeaderWithBack';
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import photoprofile from '../images/ziva.png';
import FloatingEditButton from '../components/FloatingEditButton';
import FloatingDeleteButton from '../components/FloatingDeleteButton';

const Detail = (props) => {
  const [contact, setContact] = useState([]);
  let id = props.match.params.id;

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <HeaderWithBack />
      <div className="bg-blue-400 p-4 h-screen">
        <div className="bg-white rounded shadow-lg m-2 p-4">
          <img src={photoprofile} alt="ziva" />
          <h1 className="text-center mt-4 text-2xl font-bold">
            {contact.name}
          </h1>
          <h2 className="text-center mb-4 text-blue-500">
            {contact.information}
          </h2>
          <hr />
          <div className="my-4 px-4">
            <div>
              <h1 className="text-blue-600" style={{ margin: 0 }}>
                Mobile
              </h1>
              <div className="flex items-center">
                <FaPhone />
                <h3 className="m-2">+62{contact.phonenumber}</h3>
              </div>
            </div>
            <FaMailBulk />
            <h4>{contact.group}</h4>
            <p>{moment(contact.createdAt).fromNow()}</p>
          </div>
        </div>
      </div>
      <FloatingEditButton />
      <FloatingDeleteButton />
    </div>
  );
};

export default Detail;
