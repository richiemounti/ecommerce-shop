import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: '2ba127ng',
    dataset: 'production',
    apiVersion: '2022-06-14',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client)

export const urlfor = (source) => builder.image(source);