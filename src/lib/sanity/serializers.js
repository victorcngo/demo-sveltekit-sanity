import { urlFor } from '.';
import Image from '../components/Image.svelte';

export default {
	types: {
		image: (node) => {
			return {
				component: Image,
				props: {
					alt: node.alt,
					src: urlFor(node).width(400).auto('format').url()
				}
			};
		}
	}
};
