import { useEffect, useState } from "react";
import "./index.css";
import NameComponent from "./NameComponent";

function App() {
  const [sayi, setSayi] = useState(0);
  const [name, setName] = useState("emin");
console.log("emin")
  useEffect(() => {
    console.log("ilk bu çalıştı");
  }, [sayi]);
  useEffect(() => {
    console.log("ikinci");
  }, [name]);
  return (
    <div>
    <NameComponent sayi={sayi} name={name}/>
      <div>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="bg-red-300"
        />
      </div>
      <button
        className="bg-orange-500 "
        onClick={() => {
          setSayi(sayi + 1);
        }}
      >
        artır
      </button>
    </div>
  );
}

export default App;
