<script>
	import Portrait from '$lib/components/Portrait.svelte';
	import { faStairs } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let data;

	console.log(data);
</script>

<section>
	<Portrait id={data.id} size={4} type={'dungeons'} />
	<h1>{data.title} <span><Fa icon={faStairs} />{data.floors}</span></h1>
</section>
<section>
	<h2>Boss</h2>
	<p>{data.boss}</p>
	<h2>Unlock</h2>
	<p>{data.unlock}</p>
	<h2>Pokemon</h2>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	section:not(:first-of-type) {
		align-items: flex-start;
		flex-direction: column;
		gap: 0;
	}

	h1 {
		display: flex;
		flex-direction: column;
	}

	h1 span :global(svg) {
		margin-right: 0.5rem;
	}
</style>
