import React from 'react';
import check from '../assets/check.svg';
import Tooltip from './Tooltip';

type SuccessProps = {
  photoId: string;
  setStatus: React.Dispatch<React.SetStateAction<'idle' | 'uploading' | 'uploaded'>>;
};

function Success({ photoId, setStatus }: SuccessProps) {
  const url = import.meta.env.VITE_API_URL;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(`${url}/uploads/${photoId}`);
  };

  return (
    <div className="flex relative justify-center items-center min-h-screen">
      <div className="scale-up-center sm:w-4/6 lg:w-3/6 xl:w-2/6 2xl:w-2/6 w-5/6 shadow-xl gap-4 rounded-xl md:p-8 p-4 flex flex-col items-center justify-between">
        <img alt="Check icon" className="text-white w-16" src={check} />
        <h1 className="text-xl text-[#4F4F4F]">Uploaded Successfully!</h1>
        <img
          alt="Uploaded img"
          className="rounded-xl md:max-w-[340px] max-w-[250px] h-auto"
          src={`${url}/uploads/${photoId}`}
        />
        <div className="bg-[#F6F8FB] border border-[#E0E0E0] w-full h-9 flex items-center py-7 pl-3 pr-1 rounded-lg gap-2 mt-5">
          <p className="truncate">{`${url}/uploads/${photoId}`}</p>
          <Tooltip>
            <button
              className="bg-[#2F80ED] rounded-lg text-white py-3 px-5 whitespace-nowrap"
              id="#copyButton"
              type="button"
              onClick={handleCopyToClipboard}
            >
              Copy Link
            </button>
          </Tooltip>
        </div>
        <button
          className="text-sm underline text-[#A9A9A9] font-bold"
          type="button"
          onClick={() => setStatus('idle')}
        >
          Upload another file
        </button>
      </div>
      <footer className="text-sm absolute bottom-2 text-[#A9A9A9]">
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
export default Success;
