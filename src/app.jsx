import React, { useEffect, useState } from "react";

const App = () => {
  const [chirpName, setChirpName] = useState();
  const [chirpMessage, setChirpMessage] = useState();
  const [allChirps, setAllChirps] = useState([
    { name: "branden", message: "i hate chriper" },
    { name: "nikko", message: "lets play hockey" },
    { name: "boob", message: "pet me" },
  ]);



  const thisIsMyBadAssButtonForChirpSubmission = () => {
    let newChirp = { name: chirpName, message: chirpMessage };

setAllChirps((previousState)=>{
return [newChirp,...previousState]
})
  };

  let onChangeName = (e) => {
    setChirpName(e.target.value);
  };

  let onChangeMessage = (e) => {
    setChirpMessage(e.target.value);
  };

  return (
    <div>
      <label>name of chirp</label>
      <input type="text" onChange={onChangeName} />

      <label>title of chirp</label>
      <input type="text" onChange={onChangeMessage} />
      <button onClick={thisIsMyBadAssButtonForChirpSubmission}>Submit</button>

      <hr />
      {allChirps.map((chirp,index) => {
        return (
          <div key={index}>
            <h3>name: {chirp.name}</h3>
            <h3>message: {chirp.message}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default App;
