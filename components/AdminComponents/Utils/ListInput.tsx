import React, { useState } from 'react';

const ListInput = ({ label = "Features", onChange ,list}) => {
  const [items, setItems] = useState(list);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      const updated = [...items, input.trim()];
      setItems(updated);
      setInput("");
      onChange && onChange(updated); 
    }
  };

  const handleRemove = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    onChange && onChange(updated);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
        />
        <button type="button"  onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button type="button" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200" onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListInput;
