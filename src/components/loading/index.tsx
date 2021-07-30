const Loading = () => (
  <div className="bg-black flex flex-col flex-grow text-white ">
    <div className="container mx-auto mt-40 mb-20 flex items-center w-full justify-center">
      <svg className="animate-spin h-5 w-5 mr-3 bg-white" viewBox="0 0 24 24" />
      <div className="text-3xl">Loading...</div>
    </div>
  </div>
);

export default Loading;
