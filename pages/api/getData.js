// pages/api/getData.js

export default async function handler(req, res) {
    const apiUrl = 'https://apitest123.s3.amazonaws.com/test.json';
  
    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
  
      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Return the fetched data as the API response
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  