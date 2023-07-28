import { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from '~/utils/helpers';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const userData = useAppSelector(userValues);
  // console.log(userData);
  if (req.method === 'POST') {
    try {
      // console.log(userData.username);
      const { currentCategory: cuisin } = req.body;
      const data = await fetcher(cuisin);
      // if (data.status === 500) {
      //   res.status(500).json('Could not fetch data');
      // }
      if (!data)
        return res
          .status(400)
          .json({ message: 'could not fetch cousin recipes' });
      res.status(200).json(data); // Send the response
    } catch (error) {
      if (error instanceof Error) res.status(500).json(error.message);
    }
  }
}
