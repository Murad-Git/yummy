interface Blog {
  id: string;
  title: string;
  image: string;
  published: number;
  slug: string;
  category: string;
  text: string;
  author: string;
  authorImg: string;
  body: [object];
  comments: {
    _id: string;
    name: string;
    _updatedAt: string;
    comment: string;
  }[];
}

/** @public */
interface ClientConfig
  extends Omit<PreviewKitClientConfig, 'studioUrl' | 'encodeSourceMap'> {
  /**
   * Where the Studio is hosted.
   * If it's embedded in the app, use the base path for example `/studio`.
   * Otherwise provide the full URL to where the Studio is hosted, for example: `https://blog.sanity.studio`.
   * @defaultValue process.env.NEXT_PUBLIC_SANITY_STUDIO_URL
   * @alpha
   */
  studioUrl?: '/studio';
  // studioUrl?: PreviewKitClientConfig['studioUrl']
  /**
   * If there's no `studioUrl` then the default value is `none` and the normal `@sanity/client` will be used. If `studioUrl` is set, then it's `auto` by default.
   * @defaultValue process.env.MEXT_PUBLIC_SANITY_SOURCE_MAP || studioUrl ? 'auto' : 'none'
   * @alpha
   */
  encodeSourceMap?: PreviewKitClientConfig['encodeSourceMap'];
}
