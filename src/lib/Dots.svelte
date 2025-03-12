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
			style:transform={`translateX(${width / 2}px) translateX(-50%);`}
			style:position={'absolute'}
			style:color="#fff"
			style:font-size={'50px'}
		>
			{seed}
		</p>
	</div>
</div>

<style>
	.background-grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.attendee-section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;
		flex: 1;
	}

	.avatar-container {
		width: 80px;
		height: 80px;
		border-radius: 4px;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.avatar {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.avatar-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32px;
		font-weight: bold;
		color: white;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.attendee-info {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.attendee-name {
		font-size: 24px;
		font-weight: bold;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.attendee-username {
		font-size: 16px;
		opacity: 0.7;
		margin: 0;
	}

	.event-section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
	}

	.event-details {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.event-name {
		font-size: 18px;
		font-weight: bold;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.event-datetime,
	.event-location {
		font-size: 14px;
		margin: 0;
		opacity: 0.7;
	}

	.social-icons {
		display: flex;
		gap: 8px;
		align-self: flex-end;
		margin-top: 16px;
	}

	.icon {
		width: 32px;
		height: 32px;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		border-radius: 4px;
	}
</style>
