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

<LinkList links={posts} />
