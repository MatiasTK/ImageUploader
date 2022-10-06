import axios from 'axios';
import { ChangeEvent, useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import Dropzone from './components/Dropzone';
import './progressBar.css';

function App() {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'uploaded'>('idle');
  const [photoId, setPhotoId] = useState(null);
  const [tippyVisibility, setTippyVisibility] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (newFile: File) => {
    setStatus('uploading');
    const data = new FormData();

    data.append('image', newFile);
    axios
      .post('http://localhost:4000/api/uploads', data, {
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

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:4000/uploads/${photoId}`);
    setTippyVisibility(true);
    setTimeout(() => setTippyVisibility(false), 1000); /* Find better way */
  };

  if (status === 'uploading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-96 h-32 p-8 shadow-xl rounded-xl">
          <p>Uploading...</p>
          <div className="progress-bar mt-5">
            <div className="progress-bar-value" />
          </div>
        </div>
      </div>
    );
  }

  if (status === 'uploaded') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="shadow-xl rounded-xl p-8 flex flex-col items-center justify-between">
          <h1 className="text-xl font-semibold">Uploaded Successfully!</h1>
          <img
            alt="Uploaded img"
            className="h-56 w-96 my-8 object-cover top"
            src={`http://localhost:4000/uploads/${photoId}`}
          />
          <div className="bg-[#F6F8F] border border-[#E0E0E0] w-2/4 h-9 mt-5 flex items-center py-7 pl-5 pr-1 rounded-lg">
            <p className="truncate">{`http://localhost:4000/uploads/${photoId}`}</p>
            <Tippy
              className="border border-[#2F80ED] text-[#2F80ED] p-2 rounded"
              content="Copied"
              placement="bottom"
              visible={tippyVisibility}
            >
              <button
                className="bg-[#2F80ED] rounded-lg text-white py-3 w-56"
                id="#copyButton"
                type="button"
                onClick={handleCopyToClipboard}
              >
                Copy Link
              </button>
            </Tippy>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-xl rounded-xl p-8 flex flex-col items-center justify-between">
        <h1 className="text-xl font-semibold">Upload your image</h1>
        <h3 className="my-8 text-[#828282]">File should be Jpeg, Png,...</h3>
        <Dropzone handleFile={handleFile} />
        <p className="text-[#BDBDBD] mt-5 text-lg">Or</p>
        <input
          ref={inputRef}
          className="hidden"
          name="image"
          type="file"
          onChange={handleInputChange}
        />
        <button
          className="mt-8 text-lg bg-[#2F80ED] border px-4 py-2 rounded-lg hover:opacity-80 text-white"
          type="button"
          onClick={() => (inputRef.current ? inputRef.current.click() : null)}
        >
          Choose a file
        </button>
      </div>

      <footer className="absolute bottom-2 text-sm text-[#A9A9A9]">
        <p>
          Created by{' '}
          <a className="font-bold underline" href="https://github.com/MatiasTK">
            Matias Vallejos
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
