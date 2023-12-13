import {
  createClient as createPreviewKitClient,
  type PreviewKitClientConfig,
} from '@sanity/preview-kit/client';
import type { ClientConfig } from 'next-sanity';
export * from '@sanity/preview-kit/client';

export type SanityClient = ReturnType<typeof createPreviewKitClient>;

export function createClient(config: ClientConfig): SanityClient {
  let {
    // eslint-disable-next-line prefer-const, no-process-env
    studioUrl = process.env
      .NEXT_PUBLIC_SANITY_STUDIO_URL as PreviewKitClientConfig['studioUrl'],
    encodeSourceMap = studioUrl ? `auto` : false,
  } = config;
  // eslint-disable-next-line no-process-env
  if (
    encodeSourceMap === `auto` &&
    process.env.NEXT_PUBLIC_VERCEL_ENV === `preview`
  ) {
    encodeSourceMap = true;
  }
  return createPreviewKitClient({ ...config, studioUrl, encodeSourceMap });
}
