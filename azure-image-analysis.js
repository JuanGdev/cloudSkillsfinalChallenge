// Import the necessary libraries
import axios from 'axios';

// Function to analyze an image using Azure AI Vision service
async function analyzeImage(imageUrl) {
  try {
    // Make a POST request to the Azure AI Vision service
    const response = await axios.post('https://computervisiongithub.cognitiveservices.azure.com/analyze', {
      url: imageUrl,
      visualFeatures: ['Categories', 'Description', 'Tags'],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '<your-subscription-key>',
      },
    });

    // Process the response and return the analysis result
    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
}

export default analyzeImage;
