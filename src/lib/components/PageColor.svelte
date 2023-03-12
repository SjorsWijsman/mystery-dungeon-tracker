<script>
	import { pageColor } from '$lib/store';
	import { interpolateLab } from 'd3-interpolate';
	import { tweened } from 'svelte/motion';
	import { browser } from '$app/environment';

	let color1 = tweened(toHexColor('--color-black-light'), {
		duration: 500,
		interpolate: interpolateLab
	});

	let color2 = tweened(toHexColor('--color-black-light'), {
		duration: 500,
		interpolate: interpolateLab
	});

	pageColor.subscribe((color) => {
		if (!color.length) {
			color = ['--color-black-light'];
		}
		$color1 = toHexColor(color[0]);
		$color2 = toHexColor(color[1] ?? color[0]);
	});

	function toHexColor(color) {
		if (browser) {
			const hex = getComputedStyle(document.documentElement).getPropertyValue(color);
			return hex;
		}
	}
</script>

<div
	style:background={`linear-gradient(to right, 
    ${$color1} 20%,
    ${interpolateLab($color1, $color2)(0.5)},
    ${$color2} 80%
	)`}
/>

<style>
	div {
		height: 20rem;
		transition: all 0.2s ease-out;
		background-color: var(--color-black-light);
		display: flex;
		justify-content: space-between;
	}
</style>
