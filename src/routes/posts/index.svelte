<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch('/posts.json').then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import LinkList from '$lib/components/LinkList.svelte';

	export let posts = [];
</script>

<h2>Recent Posts</h2>
<LinkList links={posts} />

<style>
	h2 {
		font-size: 2.25em;
		font-weight: 600;
		text-align: center;
		width: 100%;
	}
</style>
