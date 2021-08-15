
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const dataset = import.meta.env.VITE_SANITY_DATASET;
const projectId = import.meta.env.VITE_SANITY_PROJECTID;
const token = import.meta.env.VITE_SANITY_TOKEN;

const client = sanityClient({
	apiVersion: '2021-08-10',
	dataset,
	projectId,
	token,
	useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
