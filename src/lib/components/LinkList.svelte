<script>
	export let links = [];
</script>

<ul>
	{#each links as { href, title }}
		<li><a {href}>{title}</a></li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		margin: 3em auto;
		max-width: 400px;
		width: 100%;
	}
	a {
		background-color: var(--blue--200);
		border-radius: 4px;
		box-shadow: 0 8px 8px var(--blue--100);
		color: white;
		display: block;
		padding: 1em;
		transition: background-color 200ms, box-shadow 200ms;
	}
	a:is(:active, :focus, :hover) {
		background-color: var(--blue--300);
		box-shadow: 0 8px 8px var(--blue--200);
	}
</style>
