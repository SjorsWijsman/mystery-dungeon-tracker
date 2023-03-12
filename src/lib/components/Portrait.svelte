<script>
	import { recruitedPokemon } from '$lib/store';
	export let recruited;
	export let id;
	export let size = 2;

	let recruitedId;

	$: recruited = $recruitedPokemon.includes(id);

	$: if (recruited) {
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

<div class:recruited style:width="{size}rem" style:height="{size}rem">
	<img src="https://www.serebii.net/dungeonsky/headshot/{id}.png" alt="Portrait" />
	{#if recruited}
		<img
			src="https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0{recruitedId}/Joyous.png"
			alt="Portrait"
			class="recruited"
			onerror="this.style.display='none'"
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
	}

	div.recruited {
		transform: scale(1.1) rotate(3deg);
		outline: 2px solid var(--color-gold);
		background-color: var(--color-gold);
	}

	img.recruited {
		transform: scaleX(1);
	}

	img {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: scaleX(-1);
	}
</style>
