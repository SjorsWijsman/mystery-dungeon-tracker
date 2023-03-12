<script>
	import Link from '$lib/components/Link.svelte';
	import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
	import PageColor from '$lib/components/PageColor.svelte';
</script>

<header>
	<nav>
		<ul>
			<li>
				<Link path={''} icon={faHome} />
			</li>
			<li>
				<Link path={`pokedex`}>Pokédex</Link>
			</li>
			<li>
				<Link path={`types`}>Types</Link>
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
		display: flex;
		align-items: center;
		height: 5rem;
		width: 100%;
		padding-left: 2rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		transition: all 0.5s ease-out;
		background-color: var(--color-black-transparent);
		backdrop-filter: blur(1rem);
		border-bottom: 1px solid var(--color-black-light);
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
