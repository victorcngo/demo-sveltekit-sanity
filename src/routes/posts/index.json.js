import client from '$lib/sanity';

export async function get() {
	const posts = await client.fetch(`
        *[_type=="post"]{ 
            _id, 
            title, 
            "href": '/posts/' + slug.current
        }`);

	return {
		status: 200,
		body: posts
	};
}
