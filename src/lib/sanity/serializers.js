import { urlFor } from '.';
import Image from '../components/Image.svelte';

export default {
	types: {
		image: ({ node, children }) => {
			console.log(node)
			return {
				childNodes: children,
				component: Image,
				props: {
					alt: node.alt,
					src: urlFor(node).width(400).auto('format').url()
				}
			};
		}
	}
};
