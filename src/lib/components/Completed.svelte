<script>
	import { recruitedPokemon, completedDungeons } from '$lib/store';
	import { createEventDispatcher } from 'svelte';

	export let id;
	export let hideLabel = false;
	export let type = 'pokedex';

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

	function addRemoveDungeon() {
		if (!$completedDungeons.includes(id)) {
			$completedDungeons = [...$completedDungeons, id];
		} else {
			$completedDungeons = $completedDungeons.filter((item) => item !== id);
		}
	}
</script>

<label class="b-contain">
	{#if type === 'pokedex'}
		<input
			type="checkbox"
			on:change={addRemovePokemon}
			name="recruitedPokemon"
			value={id}
			checked={$recruitedPokemon.includes(id)}
		/>
		<div class="b-input" />
		{#if !hideLabel}
			<span>Recruited</span>
		{/if}
	{:else}
		<input
			type="checkbox"
			on:change={addRemoveDungeon}
			name="completedDungeons"
			value={id}
			checked={$completedDungeons.includes(id)}
		/>
		<div class="b-input" />
		{#if !hideLabel}
			<span>Completed</span>
		{/if}
	{/if}
</label>
