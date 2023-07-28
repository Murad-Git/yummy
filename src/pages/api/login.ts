import { NextApiRequest, NextApiResponse } from 'next';
import { userAuth } from '~/utils/helpers';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { username, firstName, lastName, email } = req.body;
      const data = await userAuth({ username, firstName, lastName, email });
      console.log('data from login.ts');
      console.log(data);
      if (!data)
        return res.status(400).json({ message: 'could not get user data' });
      res.status(200).json(data.data);
    } catch (error) {
      if (error instanceof Error) res.status(500).json(error.message);
    }
  }
}
