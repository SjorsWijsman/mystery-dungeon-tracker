<script>
	import { recruitedPokemon } from '$lib/store';
	import { createEventDispatcher } from 'svelte';

	export let id;
	export let hideLabel = false;

	const dispatch = createEventDispatcher();

	function addRemovePokemon() {
		if (!$recruitedPokemon.includes(id)) {
			$recruitedPokemon = [...$recruitedPokemon, id];
			dispatch('recruited', { id });
		} else {
			$recruitedPokemon = $recruitedPokemon.filter((item) => item !== id);
			dispatch('dismissed', { id });
		}
	}
</script>

<label class="b-contain">
	{#if !hideLabel}
		<span>Recruited</span>
	{/if}
	<input
		type="checkbox"
		on:change={addRemovePokemon}
		name="recruitedPokemon"
		value={id}
		checked={$recruitedPokemon.includes(id)}
	/>
	<div class="b-input" />
</label>
