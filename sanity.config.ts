/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { createClient } from 'next-sanity';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
// export default defineConfig({
//     projectId,
//     dataset,
//     name: 'yummy-workspace',
//     basePath: '/studio',
//     title: 'Yummy Workspace',
//       plugins: [
//     deskTool(),
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
//   schema,
//   apiVersion: `2022-10-12`,
//   useCdn: process.env.NEXT_PUBLIC_SANITY_DATASET === `production`
// })
export default defineConfig({
  projectId,
  basePath: `/studio`,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
export const config = {
  basePath: `/studio`,
  dataset,
  projectId,
  apiVersion: `2022-10-12`,
  useCdn: process.env.NEXT_PUBLIC_SANITY_DATASET === `production`,
};
export const sanityClient = createClient(config);
