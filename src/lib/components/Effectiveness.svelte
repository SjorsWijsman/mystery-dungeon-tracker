<script>
	import {
		faAngleDoubleDown,
		faAngleDown,
		faAngleUp,
		faEquals
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let value;
</script>

{#if value === 0.5}
	<div class="danger">
		<Fa icon={faAngleDoubleDown} color={'var(--color-danger)'} fw />
	</div>
{:else if value === 0.7}
	<div class="warning">
		<Fa icon={faAngleDown} color={'var(--color-warning)'} fw />
	</div>
{:else if value === 1.7}
	<div class="success">
		<Fa icon={faAngleUp} color={'var(--color-success)'} fw />
	</div>
{:else}
	<div class="even">
		<Fa icon={faEquals} fw />
	</div>
{/if}

<style>
	div {
		position: relative;
		border-radius: 0.3rem;
		padding: 3px;
		border: 1px solid var(--color);
		margin: 0 -0.2rem;
		margin-right: -0.6rem;
	}

	div::after {
		content: '';
		left: 0;
		top: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 0.3rem;
		background-color: var(--color);
		opacity: 0.1;
	}

	div.even {
		opacity: 0.1;
	}
</style>
