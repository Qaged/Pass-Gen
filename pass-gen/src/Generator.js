import React, { useState } from "react";

const Generator = () => {
  const [length, setLength] = useState(0);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [password, setPassword] = useState("");

  function createPassword() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let charSource = "";
    let generatedPassword = "";

    if (includeUppercase) {
      charSource += upper;
    }

    if (includeLowercase) {
      charSource += lower;
    }

    if (includeSpecial) {
      charSource += special;
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charSource.length);
      generatedPassword += charSource[randomIndex];
    }

    setPassword(generatedPassword);
  }

  return (
    <div className="Password-Generator">
      <h1>Password Generator</h1>
      <div>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(+e.target.checked)}
        />
        Uppercase
        <br />
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(+e.target.checked)}
        />
        Lowercase
        <br />
        <input
          type="checkbox"
          checked={includeSpecial}
          onChange={(e) => setIncludeSpecial(+e.target.checked)}
        />
        Special Characters
        <br />
        <input
          type="number"
          placeholder="Length..."
          value={length}
          onChange={(e) => setLength(+e.target.value)}
        />
        <br />
        <button type="submit" onClick={createPassword}>
          Generate
        </button>
      </div>
      <p>Password: {password}</p>
    </div>
  );
};

export default Generator;
