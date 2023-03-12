<script>
	import { recruitedPokemon } from '$lib/store';

	export let id;
	export let hideLabel = false;

	function addRemovePokemon() {
		if (!$recruitedPokemon.includes(id)) $recruitedPokemon = [...$recruitedPokemon, id];
		else $recruitedPokemon = $recruitedPokemon.filter((item) => item !== id);
	}
</script>

<label class="b-contain">
	{#if !hideLabel}
		<span>Caught</span>
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
