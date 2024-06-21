import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [num, setNum] = useState(false);
  let [char, setChar] = useState(false);
  let [Username, setUsername] = useState("");

  const usernameGen = useCallback(() => {
    if (firstName === "" || lastName === "") {
      setUsername("Please Enter First & Last Name!");
    } else {
      let un = `${lastName}_${firstName}`;
      let number = Math.floor(Math.random() * 11);
      if (num) un += number;

      if (char) {
        let splChars = "/?><!@#$%^&*()_+-=[]{}|;:,.";
        let idx = Math.floor(Math.random() * splChars.length);
        let rC = splChars.charAt(idx);
        un = `${lastName}${rC}${firstName}`;

        if (num && char) {
          un += number;
        }
      }

      setUsername(un);
    }
  }, [firstName, lastName, num, char, setUsername]);

  return (
    <>
      <div className="bg-gray-800 w-full h-screen flex justify-start items-center flex-col gap-5 pt-40 ">
        <h1 className="text-[5vw] text-yellow-300">Username Generator</h1>
        <div className="bg-gray-800 w-[50vw] h-[10vh] flex justify-center items-center gap-6 rounded-full">
          <input
            type="text"
            placeholder="FirstName"
            className="w-[20vw] h-[5vh] rounded-lg px-6 outline-none text-[1.5vw]"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="LastName"
            className="w-[20vw] h-[5vh] rounded-lg px-6 outline-none  text-[1.5vw]"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <label htmlFor="inputNum" className="text-gray-300">
            <input
              type="checkbox"
              defaultChecked={num}
              id="inputNum"
              onChange={() => {
                setNum((prev) => !prev);
              }}
              className="mr-2"
            />
            Use Numbers
          </label>

          <label className="text-gray-300" htmlFor="inputChar">
            <input
              type="checkbox"
              defaultChecked={char}
              id="inputChar"
              className="mr-2"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            Use Characters
          </label>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <button
            className="bg-yellow-300 p-2 rounded-lg text-[1.3vw] outline-none mt-6"
            onClick={() => {
              usernameGen();
            }}
          >
            Generate Your Username!
          </button>

          <h1 className="text-pink-100 text-[2vw] mt-5">{Username}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
