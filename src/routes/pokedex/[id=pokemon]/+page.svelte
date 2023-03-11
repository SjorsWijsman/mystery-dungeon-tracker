<script>
	import Type from '$lib/components/Type.svelte';
	import { pageColor } from '$lib/store';

	export let data;

	$pageColor = [...data.type].map((type) => `--color-${type}`);
</script>

<section>
	<img src="https://www.serebii.net/dungeonsky/headshot/{data.id}.png" alt="" />
	<h1>{data.name} <span>#{data.id}</span></h1>
</section>
<Type types={data.type} />

<style>
	section {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	img {
		width: 4rem;
		height: 4rem;
		border-radius: 0.3rem;
		background-color: var(--color-black-light);
	}

	h1 {
		display: flex;
		flex-direction: column;
	}
</style>
