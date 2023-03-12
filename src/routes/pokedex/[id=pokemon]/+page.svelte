<script>
	import Type from '$lib/components/Type.svelte';
	import Recruited from '$lib/components/Recruited.svelte';
	import { pageColor } from '$lib/store';
	import Portrait from '../../../lib/components/Portrait.svelte';

	export let data;

	$pageColor = [...data.type].map((type) => `--color-${type}`);
</script>

<div class="above-section">
	<Recruited id={data.id} />
</div>
<section>
	<Portrait id={data.id} size={4} />
	<h1>{data.name} <span>#{data.id}</span></h1>
</section>
<section>
	<Type types={data.type} />
</section>

<style>
	div.above-section {
		position: absolute;
		top: -1.5rem;
		right: 2rem;
		border-radius: 0.3rem;
		background-color: var(--color-black);
		padding: 0.5rem 0.8rem;
	}

	section {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	section:not(:first-of-type) {
		align-items: flex-start;
		flex-direction: column;
	}

	h1 {
		display: flex;
		flex-direction: column;
	}
</style>
