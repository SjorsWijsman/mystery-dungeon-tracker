<script>
	import { base } from '$app/paths';
	import Fa from 'svelte-fa';

	export let href = null;
	export let path = '';
	export let icon = null;
</script>

{#if href}
	<a {href}>
		{#if icon}
			<Fa {icon} />
		{/if}
		<span>
			<slot />
		</span>
	</a>
{:else}
	<a href="{base}/{path}">
		{#if icon}
			<Fa {icon} />
		{/if}
		<span>
			<slot />
		</span>
	</a>
{/if}

<style>
	a {
		text-decoration: none;
		opacity: 0.95;
		transition: all 0.1s ease-out;
		font-weight: 450;
		display: inline-block;
	}

	a:hover {
		opacity: 1;
	}

	a:hover span {
		text-decoration: underline;
	}

	a :global(svg) {
		margin-right: 0.5rem;
	}
</style>
