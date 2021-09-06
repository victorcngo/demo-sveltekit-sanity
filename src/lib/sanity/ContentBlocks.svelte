<script>
	import ChildNode from './ChildNode.svelte';

	export let blocks = [];
	export let serializers = {};
</script>

<article>
	{#each blocks as block}
		{#if block._type === 'block'}
			{#each block.children as child}
				<ChildNode {...child} {serializers} />
			{/each}
		{:else}
			<ChildNode {...block} {serializers} />
		{/if}
	{/each}
</article>

<style>
	article :global(em) {
		font-weight: 600;
	}
</style>
