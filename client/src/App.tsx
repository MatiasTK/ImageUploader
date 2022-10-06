import Dropzone from './components/Dropzone';

function App() {
  const handleFile = (file: DataTransferItem) => {
    console.log(file);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-xl font-semibold">Upload your image</h1>
        <h3 className="my-8 text-[#828282]">File should be Jpeg, Png,...</h3>
        <Dropzone handleFile={handleFile} />
        <p className="text-[#BDBDBD] mt-5 text-lg">Or</p>
        <button
          className="mt-8 text-lg bg-[#2F80ED] border px-4 py-2 rounded-lg hover:opacity-80 text-white"
          type="button"
        >
          Choose a file
        </button>
      </div>
    </div>
  );
}

export default App;
