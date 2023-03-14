<script>
	import Portrait from '$lib/components/Portrait.svelte';
	import Completed from '$lib/components/Completed.svelte';
	import { faStairs } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let data;

	console.log(data);
</script>

<div class="above-section">
	<Completed id={data.id} type={'dungeons'} />
</div>
<section>
	<Portrait id={data.id} size={4} type={'dungeons'} />
	<h1>{data.title} <span><Fa icon={faStairs} />{data.floors}</span></h1>
</section>
<section>
	<h2>Stats</h2>
	<table>
		<tbody>
			<tr>
				<th>Unlock</th>
				<td>{data.unlock}</td>
			</tr>
			<tr>
				<th>Boss</th>
				<td>{data.boss}</td>
			</tr>
		</tbody>
	</table>
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
