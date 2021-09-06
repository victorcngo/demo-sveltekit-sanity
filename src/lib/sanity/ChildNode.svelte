<script>
	import defaultBlocks from './defaultBlocks';
	import SerializedNode from './SerializedNode.svelte';

	export let _key = '';
	export let _type = '';
	export let marks = [];
	export let serializers = {};
	export let text = '';

	$: serialized = serializers.types[_type];

	$: component = defaultBlocks(_type);

	function createChild() {
		const [t, ...m] = marks;
		const child = {
			_key,
			_type: t,
			marks: m || [],
			text,
			...$$restProps
		};
		return child;
	}
</script>

{#if marks.length}
	<svelte:self {...createChild()} {serializers} />
{:else if serialized}
	<SerializedNode {serialized} props={$$props} />
{:else if component}
	<svelte:component this={component}>{text}</svelte:component>
{/if}
