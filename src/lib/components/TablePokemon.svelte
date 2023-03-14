<script>
	import Table from '$lib/components/Table.svelte';
	import { faHashtag, faBolt, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

	export let pokemonList;

	// Pokemon images & link
	$: pokemonList.map((pokemon) => {
		pokemon.icon = `https://www.serebii.net/dungeonsky/headshot/${pokemon.id}.png`;
		return pokemon;
	});

	const headers = [
		{
			column: 'id',
			title: 'ID',
			icon: faHashtag,
			sortable: true
		},
		{
			column: 'name',
			title: 'Pokémon',
			icon: faStar,
			sortable: true,
			type: 'link'
		},
		{
			column: 'type',
			title: 'Type',
			icon: faBolt,
			type: 'type'
		},
		{
			column: 'completed',
			title: 'Recruited',
			sortable: true,
			icon: faHeart,
			type: 'completed'
		}
	];
</script>

{#key pokemonList}
	<Table {headers} data={pokemonList} showIcons={true} />
{/key}
