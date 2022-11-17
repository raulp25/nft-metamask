import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === 'production',
  };

  //* to get images from sanity 
  export const sanityClient = createClient(config);

  export const urlFor = (source) => createImageUrlBuilder(config).image(source);

  //* to open sanity studio in our local machine open the terminal with your folder as usual, 
  //* then < cd sanity > then < sanity start > 
  