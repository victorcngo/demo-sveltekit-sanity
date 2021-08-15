<footer>
	<span>&copy; 2021 by Stephane Vanraes</span>
	<span>
		Built with <a href="https://kit.svelte.dev">SvelteKit</a> and
		<a href="https://www.sanity.io">Sanity</a>.
	</span>
	<a href="https://github.com/stephane-vanraes/demo-sveltekit-sanity/" target="_blank"
		>Copy me from Github</a
	>
</footer>

<style>
	footer {
		display: flex;
		flex: 0 0;
		flex-wrap: wrap;
		font-weight: 600;
		gap: 2ch;
		padding: 1em;
	}
	span:first-child {
		margin-right: auto;
	}

	a {
		text-decoration: underline;
		text-decoration-color: var(--primary);
		text-decoration-thickness: 2px;
	}
	a:is(:active, :focus, :hover) {
		background-color: var(--primary);
		color: white;
	}
</style>
