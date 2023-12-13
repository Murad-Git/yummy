import 'server-only';

import type { QueryParams } from '@sanity/client';
import { draftMode } from 'next/headers';

import { client } from '~/utils/sanity/sanity-client';

// eslint-disable-next-line no-process-env
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  cache = `force-cache`,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  cache?: RequestCache;
  tags: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error(
      `The \`SANITY_API_READ_TOKEN\` environment variable is required.`,
    );
  }

  return client.fetch<QueryResponse>(query, params, {
    cache,
    ...(isDraftMode && {
      token,
      perspective: `previewDrafts`,
    }),
    next: {
      ...(isDraftMode && { revalidate: 0 }),
      tags,
    },
  });
}
