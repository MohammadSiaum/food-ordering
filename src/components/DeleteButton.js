import React, { useState } from "react";
import DeleteIcon from "../components/icons/DeleteIcon";

const DeleteButton = ({ label, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="bg-red-500 text-white hover:bg-red-600 p-2 rounded-full mr-3"
      >
        <DeleteIcon className="w-6 h-5" />
      </button>

      {showConfirm && (
        <>
          <div className="fixed bg-black/80 flex inset-0 justify-center items-center h-full">
            <div className="bg-fuchsia-100 mb-60 p-9 rounded border border-fuchsia-400">
              <h2 className="text-lg">Are you sure want to delete it?</h2>
              <div className="flex justify-between mt-5">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white p-1 px-7 rounded"
                  type="button"
                >
                  Cancel
                </button>

                <button
                  
                  className="bg-red-500 hover:bg-red-600 text-white p-1 px-4 rounded"
                  type="button"
                  onClick={() => {
                    onDelete();
                    setShowConfirm(false);
                }}
                >
                  Yes, delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteButton;
