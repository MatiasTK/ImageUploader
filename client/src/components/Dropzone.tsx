import React, { ChangeEvent, useState } from 'react';
import Image from '../assets/image.svg';

type DropzoneProps = {
  handleFile: (file: File) => void;
};

function Dropzone({ handleFile }: DropzoneProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLFormElement> | React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <form
      action=""
      className="sm:w-96 h-64 w-72 max-w-full text-center relative"
      onDragEnter={handleDrag}
    >
      <input
        accept="image/png, image/gif, image/jpeg"
        className="hidden"
        id="file-upload"
        multiple={false}
        type="file"
        onChange={handleInputChange}
      />
      <label
        className={`flex items-center justify-center border-2 rounded-2xl border-dashed hover:border-dotted border-[#97BEF4] bg-[#F6F8FB] active:opacity-70 active:border-double h-full ${
          dragActive ? 'opacity-75 border-double' : ''
        }`}
        htmlFor="file-upload"
      >
        <div className="flex flex-col items-center">
          <img alt="Sample upload img" src={Image} />
          <p className="text-[#BDBDBD] mt-5">Drag & drop your file here</p>
        </div>
      </label>
      {dragActive && (
        <div
          className="absolute w-full h-full rounded-2xl top-0 right-0 bottom-0 left-0"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}
    </form>
  );
}
export default Dropzone;
