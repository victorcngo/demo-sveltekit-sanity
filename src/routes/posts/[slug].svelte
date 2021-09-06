<script context="module">
	export async function load({ fetch, page }) {
		const { slug } = page.params;
		const post = await fetch(`/posts/${slug}.json`).then((res) => res.json());

		return {
			props: {
				post,
				...post
			}
		};
	}
</script>

<script>
	import serializers from '$lib/sanity/serializers';
	import LinkList from '$lib/components/LinkList.svelte';
	import ContentBlocks from '$lib/sanity/ContentBlocks.svelte';

	export let body;
	export let image;
	export let related;
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="hero" style="background-image: url({image});" />
<h1>{title}</h1>
<div class="wrapper">
	<ContentBlocks blocks={body} {serializers} />
	<h2>Related Content</h2>
	<LinkList links={related} />
</div>

<style>
	.hero {
		align-items: center;
		background-color: var(--blue--200);
		background-position: 50% 50%;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: 300px;
		padding: 2em;

		/* Full width hero image */
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-bottom: 2em;
		margin-left: -50vw;
		margin-right: -50vw;
	}
	h1 {
		font-size: 2em;
		text-align: center;
	}
	div > :global(* + *) {
		margin-top: 1em;
	}
	h2 {
		font-weight: 600;
		text-align: center;
		text-decoration: underline;
		width: 100%;
	}
</style>
