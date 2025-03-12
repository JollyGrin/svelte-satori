<script lang="ts">
	import seedrandom from 'seedrandom';

	/**
	 * @typedef {Object} Props
	 * @property {number} [width]
	 * @property {number} [height]
	 * @property {string} [seed]
	 * @property {boolean} [satori]
	 * @property {string} [eventName]
	 * @property {string} [eventDate]
	 * @property {string} [eventLocation]
	 * @property {string} [attendeeName]
	 * @property {string} [attendeeUsername]
	 * @property {string} [ticketNumber]
	 * @property {string} [avatarUrl]
	 */

	/** @type {Props} */
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
	const primaryColor = cyberColors[Math.floor(rng() * cyberColors.length)];
	const secondaryColor =
		cyberColors[(Math.floor(rng() * cyberColors.length) + 2) % cyberColors.length];

	/**
	 * @param {number} upper
	 * @param {number} lower
	 */
	function random(upper: number, lower: number) {
		const result = rng() * (upper - lower) + lower;
		return result;
	}

	// Generate grid lines
	function generateGridLines() {
		const horizontalLines = [];
		const verticalLines = [];
		const horizontalCount = 12;
		const verticalCount = 20;

		// Horizontal grid lines
		for (let i = 0; i <= horizontalCount; i++) {
			const y = (height / horizontalCount) * i;
			horizontalLines.push({
				x1: 0,
				y1: y,
				x2: width,
				y2: y,
				opacity: i % 3 === 0 ? 0.4 : 0.1
			});
		}

		// Vertical grid lines
		for (let i = 0; i <= verticalCount; i++) {
			const x = (width / verticalCount) * i;
			verticalLines.push({
				x1: x,
				y1: 0,
				x2: x,
				y2: height,
				opacity: i % 4 === 0 ? 0.4 : 0.1
			});
		}

		return { horizontalLines, verticalLines };
	}

	const { horizontalLines, verticalLines } = generateGridLines();

	// Generate digital noise
	function generateDigitalNoise() {
		const noiseElements = [];
		const noiseCount = 150;

		for (let i = 0; i < noiseCount; i++) {
			const x = random(width, 0);
			const y = random(height, 0);
			const size = random(3, 1);
			const opacity = random(0.5, 0.1);

			noiseElements.push({ x, y, size, opacity });
		}

		return noiseElements;
	}

	const noiseElements = generateDigitalNoise();

	// Generate binary pattern as rectangles instead of text
	function generateBinaryPattern() {
		const patterns = [];
		const patternCount = 5;
		const bitsPerPattern = 30;

		for (let i = 0; i < patternCount; i++) {
			const bits = [];
			const x = random(width - 300, 50);
			const y = random(height - 50, 50);
			const bitSize = random(8, 4);
			const spacing = bitSize + 2;

			for (let j = 0; j < bitsPerPattern; j++) {
				if (Math.floor(random(2, 0)) === 1) {
					bits.push({
						x: x + j * spacing,
						y,
						width: bitSize,
						height: bitSize,
						opacity: random(0.4, 0.1)
					});
				}
			}

			patterns.push(bits);
		}

		return patterns.flat();
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
