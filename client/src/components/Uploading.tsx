import '../progressBar.css';

function Uploading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="scale-up-center sm:w-96 h-32 w-80 p-8 shadow-xl rounded-xl">
        <p>Uploading...</p>
        <div className="progress-bar mt-5">
          <div className="progress-bar-value" />
        </div>
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
export default Uploading;
