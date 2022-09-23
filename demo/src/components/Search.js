import { useState } from "react";

export default function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState([]);
  const handleSubmit = () => {
    cb(value);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          placeholder="   Search..."
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          value={value}
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            border: "none",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: 2,
            right: 20,
          }}
          onClick={handleSubmit}
          src="https://img.icons8.com/glyph-neue/40/000000/search--v1.png"
        />
      </div>
    </div>
  );
}
