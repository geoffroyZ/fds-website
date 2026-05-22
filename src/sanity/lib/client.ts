import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

// Check if Sanity is properly configured (valid project ID)
const isSanityConfigured = () => {
  return !!projectId && projectId !== 'placeholder' && projectId.length >= 8;
};

// Only create client if projectId is configured
export const client = isSanityConfigured() 
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2025-04-06',
      useCdn: true,
    })
  : null;

export { isSanityConfigured };

