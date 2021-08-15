<script>
	export let alt;
	export let src;

	$: console.log(src, alt);
</script>

<img {src} {alt} />
