"use client";

import { UploadButton } from "@uploadthing/react";
import React from "react";

const ImageUpload = () => {
  return (
    <div>
      <UploadButton
        className="ut-button:w-32"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default ImageUpload;
