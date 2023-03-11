<script>
	import Link from '$lib/components/Link.svelte';
	import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
	import PageColor from '$lib/components/PageColor.svelte';

	let scrollY;
</script>

<svelte:window bind:scrollY />

<header class:scrolled={scrollY !== 0}>
	<nav>
		<ul>
			<li>
				<Link href={`/`} icon={faHome} />
			</li>
			<li>
				<Link href={`/pokedex`}>Pokédex</Link>
			</li>
			<li>
				<Link href={`/types`}>Types</Link>
			</li>
		</ul>
	</nav>
</header>
<PageColor />
<main>
	<nav>
		<Link href={`javascript:history.back()`} icon={faArrowLeft}>Go Back</Link>
	</nav>
	<slot />
</main>

<style>
	header {
		padding: 2rem;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		transition: all 0.5s ease-out;
		background-color: var(--color-black-transparent);
		backdrop-filter: blur(1rem);
	}

	header.scrolled {
		box-shadow: 0 -0.2rem 1rem var(--color-black-dark);
	}

	ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	main > nav {
		opacity: 0.6;
	}
</style>
