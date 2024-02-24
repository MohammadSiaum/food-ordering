import React from 'react';

const InfoBox = ({children}) => {
    return (
        <h2 className="text-center mb-5 p-2 bg-blue-100 rounded border-2 border-blue-300">
          {children}
        </h2>
    );
};

export default InfoBox;