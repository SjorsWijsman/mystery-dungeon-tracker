<script>
	import { base } from '$app/paths';
	import { recruitedPokemon, completedDungeons } from '$lib/store';
	export let completed = false;
	export let id;
	export let size = 2;
	export let type = 'pokedex';

	let recruitedId;

	$: if (type === 'pokedex') completed = $recruitedPokemon.includes(id);
	$: if (type === 'dungeons') completed = $completedDungeons.includes(id);

	$: if (completed) {
		switch (id) {
			case '412S':
				recruitedId = '412/0001';
				break;
			case '412S':
				recruitedId = '412/0002';
				break;
			case '413S':
				// Wormadam (Sandy Cloak)
				recruitedId = '413/0001';
				break;
			case '413T':
				// Wormadam (Trash Cloak)
				recruitedId = '413/0002';
				break;
			default:
				recruitedId = id;
				break;
		}
	} else {
		recruitedId = id;
	}
</script>

<div
	class:completed
	class:pokemon={type === 'pokedex'}
	style:width="{size}rem"
	style:height="{size}rem"
>
	{#if type === 'pokedex'}
		<img src="https://www.serebii.net/dungeonsky/headshot/{id}.png" alt="Pokemon Portrait" />
		{#if completed}
			<img
				src="https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0{recruitedId}/Joyous.png"
				alt="Pokemon Portrait"
				class="recruited"
				onerror="this.style.display='none'"
			/>
		{/if}
	{:else if type === 'dungeons'}
		<img
			src="{base}/images/dungeons/{id}.png"
			alt="Dungeon Portrait"
			onerror="this.src='{base}/images/dungeons/00.png'"
		/>
	{/if}
</div>

<style>
	div {
		position: relative;
		border-radius: 0.3rem;
		overflow: hidden;
		transition: all 0.2s ease-out;
		background-color: var(--color-black-light);
		outline: 0px solid var(--color-gold);
		transform: scaleX(-1);
	}

	div.completed {
		box-shadow: 0 0 0 2px var(--color-gold);
		background-color: var(--color-gold);
		transform: scale(1.1) rotate(3deg);
	}

	div.pokemon img.recruited {
		transform: scaleX(-1);
	}

	img {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
