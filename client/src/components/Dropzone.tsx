import React, { useRef, useState } from 'react';
import Image from '../assets/image.svg';

function Dropzone({ handleFile }: any) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

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

  return (
    <form action="" className="h-64 w-96 max-w-full text-center relative" onDragEnter={handleDrag}>
      <input ref={inputRef} className="hidden" id="file-upload" multiple={false} type="file" />
      <label
        className={`flex items-center justify-center border-2 rounded-2xl border-dashed hover:border-dotted border-[#97BEF4] bg-[#F6F8FB] active:opacity-70 active:border-double h-full ${
          dragActive ? 'opacity-75 border-double' : ''
        }`}
        htmlFor="file-upload"
      >
        <div className="flex flex-col items-center">
          <img alt="Sample upload img" src={Image} />
          <p className="text-[#BDBDBD] mt-5 text-lg">Drag & drop your file here</p>
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
