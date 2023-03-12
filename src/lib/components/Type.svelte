<script>
	import { base } from '$app/paths';

	export let types = [];
	export let showPlaceholder = false;

	$: types = [types].flat();
</script>

<div>
	{#if types && types.length > 0}
		{#each types as type}
			<a href="{base}/types/{type}" style:--color={`var(--color-${type})`}>
				{type}
			</a>
		{/each}
	{:else if showPlaceholder}
		<span class="unknown">Unknown</span>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem 0.5rem;
	}

	span,
	a {
		--color: white;
		text-transform: capitalize;
		padding: 4px 6px;
		padding-top: 3px;
		border-radius: 0.3rem;
		border: 1px solid var(--color);
		color: var(--color);
		font-weight: 400;
		transition: all 0.2s ease-out;
		display: inline-block;
		font-size: 0.9rem;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
		background-color: rgb(from var(--color) r g b / var(--color-opacity));
	}

	span.unknown {
		opacity: 0.3;
	}
</style>
