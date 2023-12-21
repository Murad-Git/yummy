import { NextApiRequest, NextApiResponse } from 'next';
import { helloFetcher } from '~/utils/fetch-helpers';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const userData = useAppSelector(userValues);
  // console.log(userData);
  if (req.method === `POST`) {
    try {
      // console.log(userData.username);
      const { currentCuisine: cuisin } = req.body;
      const data = await helloFetcher(cuisin);
      // if (data.status === 500) {
      //   res.status(500).json('Could not fetch data');
      // }
      if (!data)
        return res
          .status(400)
          .json({ message: `could not fetch cousin recipes` });
      res.status(200).json(data); // Send the response
    } catch (error) {
      if (error instanceof Error) res.status(500).json(error.message);
    }
  }
}
