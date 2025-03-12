<script lang="ts">
	import seedrandom from 'seedrandom';

	let {
		width = 750,
		height = 393,
		seed = 'xylophone',
		satori = true,
		eventName = 'Onion DAO',
		eventDate = 'June • July 2025 ',
		eventLocation = 'Chicago, IL, USA',
		attendeeName = 'deanland',
		attendeeUsername = '/username',
		ticketNumber = 'TKT-' + Math.floor(Math.random() * 100000),
		avatarUrl = ''
	} = $props();

	const rng = seedrandom(seed);

	// Cyber colors
	const cyberColors = [
		'#00ff41', // Matrix green
		'#39ff14', // Neon green
		'#0ff0fc', // Cyan
		'#ff00ff', // Magenta
		'#ff3131' // Red
	];

	const bgColor = '#0a0a16'; // Dark blue-black background

	function random(upper: number, lower: number) {
		const result = rng() * (upper - lower) + lower;
		return result;
	}

	function randomItem(arr: any[]) {
		const idx = Math.floor(random(arr.length, 0));
		return arr[idx];
	}

	const sizes = [1, 2, 3, 5, 8, 13];

	let points = new Array(100).fill(null).map(() => ({
		x: random(width, 0),
		y: random(height, 0),
		color: '#fff',
		size: randomItem(sizes)
	}));
</script>

<div
	style="background-color: {bgColor}; max-width: {width}px; display: flex; position: relative; width: 100%;"
	style:height={satori ? `${height}px` : undefined}
>
	<div
		style="background-color: {bgColor}; width: 100%;"
		style:display="flex"
		style:position="relative"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}">
			{#each points as { x, y, color, size }}
				<circle cx={x} cy={y} r={size} fill={color} />
			{/each}
		</svg>
		<p
			class="seed"
			style:transform={`translateX(${width / 2}px) translateY(${height / 2}px);`}
			style:position={'absolute'}
			style:color="#fff"
			style:font-size={'50px'}
		>
			{seed}
		</p>
	</div>
</div>

<style>
</style>
