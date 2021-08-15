<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1 0;
		margin: auto;
		max-width: var(--page-width);
		padding: 0 1em;
		width: 100%;
	}
</style>
