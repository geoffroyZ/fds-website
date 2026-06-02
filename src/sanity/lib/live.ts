import { defineLive } from 'next-sanity/live';
import { client, isSanityConfigured } from './client';

if (!isSanityConfigured() || !client) {
  throw new Error(
    'Sanity Live requires NEXT_PUBLIC_SANITY_PROJECT_ID. Import this module only when Sanity is configured.'
  );
}

export const { sanityFetch, SanityLive } = defineLive({ client });
