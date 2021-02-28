import { NextApiRequest, NextApiResponse } from 'next'

import { poster } from '../../../utils/functions'

// Initialize middleware

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  try {
    const wooRes = await poster('/wp-json/wc/v3/customers', { ...req.body }, 'POST')
    return res.status(200).json({ message: await wooRes.json() })
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}