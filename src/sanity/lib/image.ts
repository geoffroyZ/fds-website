import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { isSanityConfigured } from './client';
import { dataset, projectId } from '../env';

const builder =
  isSanityConfigured() && projectId
    ? createImageUrlBuilder({ projectId, dataset })
    : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Sanity is not configured');
  }
  return builder.image(source);
}

export function isImageBuilderReady(): boolean {
  return builder !== null;
}
