import client from '$lib/sanity';

export async function get({ params }) {
	const { slug } = params;
	const post = await client.fetch(
		`
        *[slug.current==$slug][0]{
            body,
            "category": categories[0],
            facts,
            "image": mainImage.asset->url,
            publishedAt,
            "related": *[categories[0]._ref == ^.categories[0]._ref && slug.current != $slug]{
                "href": slug.current,
                title
            },
            tags,
            title,
        }
    `,
		{ slug }
	);

	return {
		status: 200,
		body: post
	};
}
