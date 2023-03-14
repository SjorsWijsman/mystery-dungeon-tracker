<script>
	import Portrait from '$lib/components/Portrait.svelte';
	import Recruited from '$lib/components/Recruited.svelte';
	import { faStairs } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let data;

	console.log(data);
</script>

<div class="above-section">
	<Recruited id={data.id} />
</div>
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
