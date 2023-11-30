import React, { useState } from 'react';
import { analyzeImage } from 'src/azure-image-analysis'; // Import the analyzeImage function

function DisplayResults({ imageUrl, analysisResult }) {
  return (
    <div>
      <h2>Image Analysis Result</h2>
      <p>Processed Image URL: {imageUrl}</p>
      <p>Analysis Result: {analysisResult}</p>
    </div>
  );
}

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeImage(imageUrl); // Call the analyzeImage function
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error occurred during image analysis:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleImageGeneration = () => {
    // Add your logic for image generation here
  };

  return (
    <div>
      <h1>Computer Vision</h1>
      <input
        type="text"
        placeholder="Enter image URL or prompt"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleImageAnalysis} disabled={isAnalyzing}>
        {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
      </button>
      <button onClick={handleImageGeneration}>Generate Image</button>
      {isAnalyzing && <p>Processing image analysis...</p>}
      {analysisResult && (
        <DisplayResults imageUrl={imageUrl} analysisResult={analysisResult} />
      )}
    </div>
  );
}

export default App;