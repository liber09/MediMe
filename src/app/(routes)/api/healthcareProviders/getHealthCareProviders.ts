// services/jsonbinService.ts

import axios from 'axios';
import { healthcareProviderData } from '../../../types/interfaces';

const BASE_URL = 'https://api.jsonbin.io/v3';

export const getHealthCareProviderData = async (binId: string, apiKey: string): Promise<healthcareProviderData> => {
  try {
    const apiUrl = `${BASE_URL}/b/${binId}`;

    const response = await axios.get<healthcareProviderData>(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': apiKey,
      },
    });
    const healthcareProviders = response.data.record.healthcareProviders;
    return healthcareProviders;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for handling in the calling code
  }
};
