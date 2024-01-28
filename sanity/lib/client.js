import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_TOKEN,
  dataset: 'production',
  apiVersion: '2024-01-28',
  token: process.env.SANITY_STUDIO_TOKEN,
  useCdn : true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
