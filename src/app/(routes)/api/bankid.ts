// pages/api/bankid.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const bankIdApiUrl = 'https://api.bankid.com/';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(`${bankIdApiUrl}/auth`, {
        // Add necessary parameters
      });

      const orderRef = response.data.orderRef;
      // Store orderRef for later use
      res.status(200).json({ orderRef });
    } catch (error) {
      console.error('Error initiating BankID authentication:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
