import React from 'react';
import React from 'react';


function App() {
  return (
    <div>
      <h1>Computer Vision</h1>
      <input type="text" placeholder="Enter image URL or prompt" />
      <button onClick={handleImageAnalysis}>Analyze Image</button>
      <button onClick={handleImageGeneration}>Generate Image</button>
    </div>
  );
}

export default App;
