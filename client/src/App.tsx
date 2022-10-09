import axios from 'axios';
import { ChangeEvent, useRef, useState } from 'react';
import Dropzone from './components/Dropzone';
import './animations.css';

import Uploading from './components/Uploading';
import Success from './components/Success';

function App() {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'uploaded'>('idle');
  const [photoId, setPhotoId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (newFile: File) => {
    setStatus('uploading');
    const data = new FormData();
    const url = import.meta.env.VITE_API_URL;

    data.append('image', newFile);
    axios
      .post(`${url}/api/uploads`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        setPhotoId(res.data.id);
        setStatus('uploaded');
      });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  if (status === 'uploading') {
    return <Uploading />;
  }

  if (status === 'uploaded') {
    if (photoId) {
      return <Success photoId={photoId} setStatus={setStatus} />;
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="scale-up-center shadow-xl rounded-xl sm:p-8 p-6  flex flex-col items-center justify-between gap-8">
          <h1 className="text-xl font-semibold">Upload your image</h1>
          <h3 className="text-[#828282] text-sm">File should be Jpeg, Png,...</h3>
          <Dropzone handleFile={handleFile} />
          <p className="text-[#BDBDBD]">Or</p>
          <input
            ref={inputRef}
            accept=".png, .jpg, .gif"
            className="hidden"
            name="image"
            type="file"
            onChange={handleInputChange}
          />
          <button
            className=" text-lg bg-[#2F80ED] border px-4 py-2 rounded-lg hover:opacity-80 text-white"
            type="button"
            onClick={() => (inputRef.current ? inputRef.current.click() : null)}
          >
            Choose a file
          </button>
        </div>

        <footer className="absolute bottom-2 text-sm text-[#A9A9A9]">
          <p>
            <span>Created by </span>
            <a className="font-bold underline" href="https://github.com/MatiasTK">
              Matias Vallejos
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
