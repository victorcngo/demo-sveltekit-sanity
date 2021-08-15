<script>
	import BlockContent from '@movingbrands/svelte-portable-text';
	export let facts = [];
</script>

<div>
	<p>Details of this trip</p>
	<BlockContent blocks={facts} />
</div>

<style>
	div {
		background-color: var(--blue--400);
		border: 2px solid var(--blue--100);
		border-radius: 0.25em;
		float: right;
		margin: 0 1em 1em;
		min-width: 200px;
		padding: 0.5em;
	}
	p {
		font-weight: 600;
		text-decoration: underline;
	}
</style>
