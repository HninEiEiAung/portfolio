import "./App.css";

function App() {
  return (
    <div>
      <div className="bg-red-600 h-16 flex items-center justify-between p-10">
        <span>Logo</span>
        <div className="flex space-x-4">
          <span>Docs</span>
          <span>About</span>
          <span>IMG</span>
        </div>
      </div>

      <div className="bg-orange-300 text-center p-10">
        <h2 className="my-6 mx-6 bg-blue-400 text-2xl font-bold">
          My Projects
        </h2>
        <div className="grid grid-cols-3 p-4 mt-4 bg-purple-950 gap-3 w-3/4 mx-auto">
          <div className="bg-slate-100">
            <div className="bg-green-400 h-32">Image</div>
            <div className="text-left p-3">
              <h3 className="text-xl font-bold">Shoes!</h3>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="flex justify-end" >
                <button className="bg-orange-600 rounded-md p-3">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="bg-purple-300">Card 2</div>
          <div className="bg-green-700">Card 3</div>
        </div>
      </div>

      <div className="bg-blue-400 h-16 text-center flex items-center justify-center"><p>@Copyright</p></div>
    </div>
  );
}

export default App;
