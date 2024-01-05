import axios from 'axios';

const BASE_URL = 'https://api.jsonbin.io';
export const getHealthCareProviders = async (binId: string, apiKey: string) => {
    try {
      const apiUrl = `${BASE_URL}/b/${binId}`;
  
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'secret-key': apiKey,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }; 