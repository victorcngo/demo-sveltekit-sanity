<script>
	export let children;
	export let props;
	export let serialized;

	$: component = serialized({ node: props, children });
</script>

<svelte:component
	this={component.component}
	{...component.props}
	childNodes={component.childNodes}
/>
