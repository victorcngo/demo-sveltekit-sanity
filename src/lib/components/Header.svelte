<script>
	import { page } from '$app/stores';
</script>

<header>
	<h1>My Blog</h1>
	<nav>
		<a href="/" aria-current={$page.path === '/'}>Home</a>
		<a href="/posts" aria-current={$page.path.startsWith('/posts')}>Posts</a>
	</nav>
</header>

<style>
	header {
		align-items: flex-end;
		color: white;
		display: flex;
		flex: 0 0;
		flex-wrap: wrap;
		font-family: 'Roboto Slab', serif;
		font-weight: 600;
		gap: 4ch;
		margin: auto;
		max-width: var(--page-width);
		padding: 1em;
		width: 100%;
	}
	h1 {
		color: var(--blue--200);
		font-size: 2em;
	}
	nav {
		margin-left: auto;
	}
	nav > a {
		background-color: var(--blue--200);
		border-radius: 0.25em;
		color: white;
		font-size: 1.25em;
		padding: 0.5em 1em;
	}

	nav > a:is(:active, :focus, :hover, [aria-current~='true']) {
		background-color: var(--blue--300);
		color: white;
	}
	nav > a + a {
		margin-left: 4ch;
	}
</style>
