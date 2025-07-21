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
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                 
        />
        <button 
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 ml-2 rounded-lg transition-colors duration-200"
        type="button"  onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button 
            title='Delete'
            type="button" onClick={() => handleRemove(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListInput;
