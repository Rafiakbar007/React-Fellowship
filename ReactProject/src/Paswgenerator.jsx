import React from "react";
import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function Paswgenerator() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [pass, setPass] = useState("");

  //useref hook

  const passref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*()";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length );
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [length, numallowed, charallowed, setPass]);

        // useEffect(() => {
        //     passwordGenerator()
        // }, [length])

    const cpypasstoclip = useCallback(() => {
        passref.current.select()
        window.navigator.clipboard.writeText(pass)
    }, [pass])

  return (
<div className="min-h-screen bg-linear-to-br from-rose-500 via-fuchsia-600 to-purple-700 flex items-center justify-center p-4">

  <div className="w-full max-w-xl bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">

    <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide">
    Password Generator
    </h1>

    <div className="flex justify-center items-center gap-3">

      <div className="flex flex-1 overflow-hidden rounded-2xl shadow-lg">

        <input
        type="text"
        value={pass}
        className="w-full px-4 py-3 bg-white/95 text-gray-800 outline-none text-lg font-medium"
        placeholder="Generate a secure password..."
        readOnly
        ref={passref}
        />
        
      </div>

      <button
        className="bg-linear-to-r from-pink-500 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        onClick={passwordGenerator}
        >
        Generate
      </button>

      <button
        className="bg-linear-to-r from-pink-500 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        onClick={cpypasstoclip}
        >
        Copy
      </button>

    </div>

    <div className="mt-6 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">

    {/* Length Slider */}
      <div className="mb-6">

      <div className="flex justify-between items-center mb-2">

        <label 
          className="text-white font-medium">
          Password Length
        </label>

        <span 
          className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {length}
        </span>

      </div>

        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="w-full cursor-pointer accent-pink-500"
          onChange={(e) => setLength(e.target.value)}
        />

      </div>

    {/* Checkboxes */}
      <div className="flex flex-wrap gap-6">

      <label
        htmlFor="numberInput"
        className="flex items-center gap-3 text-white cursor-pointer bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300"
        >
      <input
        type="checkbox"
        id="numberInput"
        checked={numallowed}
        onChange={() => {
        setNumallowed((prev) => !prev);
        }}
        className="w-4 h-4 accent-pink-500"
      />
        <span>Numbers</span>
      </label>

      <label
        htmlFor="charInput"
        className="flex items-center gap-3 text-white cursor-pointer bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300"
        >

        <input
          type="checkbox"
          id="charInput"
          defaultChecked={charallowed}
          onChange={() => {
          setCharallowed((prev) => !prev);
          }}
          className="w-4 h-4 accent-pink-500"
        />
        <span>Special Characters</span>
      </label>

      </div>
    </div>

  </div>

</div>
  );
}

export default Paswgenerator;