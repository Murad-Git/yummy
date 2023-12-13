/* eslint-disable no-process-env */
import { createClient } from '~/utils/sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: `2023-11-06`,
  // apiVersion: `2022-11-11`,
  useCdn: true,
  perspective: `published`,
  studioUrl: `/studio`,
  logger: console,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
