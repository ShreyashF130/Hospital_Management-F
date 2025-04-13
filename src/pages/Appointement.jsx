import React, { useEffect, useState } from 'react';
import { doctorsInfo } from '../assets/assets';
import { useParams } from 'react-router-dom';

const Appointement = () => {
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const foundDoc = doctorsInfo.find(doc => doc._id === docId);
    setDocInfo(foundDoc);
    console.log(foundDoc);
  }, [docId]);

  return docInfo && (
    <div>
      <div>
        <div>
          <img src={docInfo.image} alt={docInfo.name} />
          <h2>{docInfo.name}</h2>
          <p>{docInfo.speciality}</p>
          <p>{docInfo.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Appointement;