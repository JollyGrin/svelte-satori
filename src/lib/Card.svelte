<script>
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
		satori = false,
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
	function random(upper, lower) {
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

	const binaryPatterns = generateBinaryPattern();

	// Generate barcode for ticket
	function generateBarcodeLines() {
		const lines = [];
		const lineCount = 30;
		const maxHeight = 50;
		const lineWidth = 2;
		const totalWidth = lineCount * 3;

		for (let i = 0; i < lineCount; i++) {
			const height = random(maxHeight, 15);
			lines.push({
				x: i * 3,
				height,
				width: lineWidth
			});
		}

		return { lines, totalWidth };
	}

	const { lines: barcodeLines, totalWidth: barcodeWidth } = generateBarcodeLines();

	// Generate a simple circuit pattern
	function generateCircuitLines() {
		const lines = [];
		const points = [];
		const lineCount = 8;
		const pointCount = 4;

		// Generate random circuit points
		for (let i = 0; i < pointCount; i++) {
			points.push({
				x: random(width * 0.8, width * 0.2),
				y: random(height * 0.8, height * 0.2)
			});
		}

		// Connect points with lines
		for (let i = 0; i < lineCount; i++) {
			const start = points[i % points.length];
			const end = points[(i + 1) % points.length];

			// Add some randomization for more circuit-like appearance
			const midX = (start.x + end.x) / 2 + random(40, -40);
			const midY = (start.y + end.y) / 2 + random(40, -40);

			lines.push({
				x1: start.x,
				y1: start.y,
				x2: midX,
				y2: start.y,
				color: i % 2 === 0 ? primaryColor : secondaryColor,
				opacity: random(0.8, 0.4)
			});

			lines.push({
				x1: midX,
				y1: start.y,
				x2: midX,
				y2: midY,
				color: i % 2 === 0 ? primaryColor : secondaryColor,
				opacity: random(0.8, 0.4)
			});

			lines.push({
				x1: midX,
				y1: midY,
				x2: midX,
				y2: end.y,
				color: i % 2 === 0 ? primaryColor : secondaryColor,
				opacity: random(0.8, 0.4)
			});

			lines.push({
				x1: midX,
				y1: end.y,
				x2: end.x,
				y2: end.y,
				color: i % 2 === 0 ? primaryColor : secondaryColor,
				opacity: random(0.8, 0.4)
			});
		}

		return { lines, points };
	}

	const { lines: circuitLines, points: circuitPoints } = generateCircuitLines();
</script>

<div
	class="ticket-container"
	style="max-width: {width}px; background-color: {bgColor}; display: flex; flex-direction: column; padding: 20px; font-family: 'Source Serif Pro', monospace;"
	style:height={satori ? `${height}px` : undefined}
>
	<!-- Background grid effect -->
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="background-grid">
		<!-- Grid lines -->
		{#each horizontalLines as { x1, y1, x2, y2, opacity }}
			<line {x1} {y1} {x2} {y2} stroke={primaryColor} stroke-opacity={opacity} />
		{/each}

		{#each verticalLines as { x1, y1, x2, y2, opacity }}
			<line {x1} {y1} {x2} {y2} stroke={primaryColor} stroke-opacity={opacity} />
		{/each}

		<!-- Digital noise -->
		{#each noiseElements as { x, y, size, opacity }}
			<rect {x} {y} width={size} height={size} fill={secondaryColor} fill-opacity={opacity} />
		{/each}

		<!-- Circuit pattern -->
		{#each circuitLines as { x1, y1, x2, y2, color, opacity }}
			<line {x1} {y1} {x2} {y2} stroke={color} stroke-opacity={opacity} stroke-width="1.5" />
		{/each}

		{#each circuitPoints as { x, y }}
			<circle cx={x} cy={y} r="3" fill={primaryColor} />
		{/each}

		<!-- Binary patterns (rectangles instead of text) -->
		{#each binaryPatterns as { x, y, width, height, opacity }}
			<rect {x} {y} {width} {height} fill={primaryColor} fill-opacity={opacity} />
		{/each}
	</svg>

	<div class="ticket-content" style="display: flex; justify-content: space-between; position: relative; z-index: 5; padding: 24px;">
		<!-- Left section - Avatar and Attendee info -->
		<div
			class="attendee-section"
			style="display: flex; flex-direction: column; align-items: center; padding: 10px;"
		>
			<div
				class="avatar-container"
				style="display: flex; justify-content: center; align-items: center; width: 80px; height: 80px; border-radius: 4px; overflow: hidden; background-color: rgba(0,0,0,0.3);"
			>
				{#if avatarUrl}
					<img src={avatarUrl} alt={attendeeName} class="avatar" style="display: flex; width: 100%; height: 100%; object-fit: cover;" />
				{:else}
					<div
						class="avatar-placeholder"
						style="border: 2px solid {primaryColor}; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; font-size: 32px; font-weight: bold; color: white; background-color: rgba(0,0,0,0.5);"
					>
						{attendeeName.charAt(0)}
					</div>
				{/if}
			</div>
			<div
				class="attendee-info"
				style="display: flex; flex-direction: column; align-items: center; margin-top: 10px; gap: 4px;"
			>
				<div class="attendee-name" style="display: flex; color: {primaryColor}; margin: 0; font-size: 24px; font-weight: bold;">
					{attendeeName}
				</div>
				<div class="attendee-username" style="display: flex; margin: 0; font-size: 16px; color: white;">{attendeeUsername}</div>
			</div>
		</div>

		<!-- Right section - Event details and barcode -->
		<div class="event-section" style="display: flex; flex-direction: column; align-items: center; padding: 10px;">
			<div
				class="event-details"
				style="display: flex; flex-direction: column; align-items: center; margin-bottom: 10px; gap: 4px;"
			>
				<div class="event-name" style="display: flex; margin: 0; font-size: 22px; font-weight: bold; color: white;">{eventName}</div>
				<div class="event-datetime" style="display: flex; margin: 0; font-size: 16px; color: white;">{eventDate}</div>
				<div class="event-location" style="display: flex; margin: 0; font-size: 14px; color: white;">{eventLocation}</div>
			</div>

			<div
				class="ticket-barcode"
				style="display: flex; flex-direction: column; align-items: center; margin-top: 10px;"
			>
				<svg width={barcodeWidth} height="60" viewBox="0 0 {barcodeWidth} 60" style="display: flex;">
					{#each barcodeLines as { x, width, height }}
						<rect {x} y={0} {width} {height} fill={primaryColor} />
					{/each}
				</svg>
				<div class="ticket-number" style="display:flex; color: white; margin-top: 5px; font-size: 14px;">
					{ticketNumber}
				</div>
			</div>

			<!-- Social icons in the style of the inspiration -->
			<div class="social-icons" style="display: flex; justify-content: space-between; margin-top: 15px; gap: 10px;">
				<div
					class="icon"
					style="border: 1px solid {primaryColor}; color: {primaryColor}; display: flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 4px;"
				>
					#
				</div>
				<div
					class="icon"
					style="border: 1px solid {primaryColor}; color: {primaryColor}; display: flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 4px;"
				>
					○
				</div>
				<div
					class="icon"
					style="border: 1px solid {primaryColor}; color: {primaryColor}; display: flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 4px;"
				>
					○
				</div>
			</div>
		</div>
	</div>

	<!-- Glitch effect separator line -->
	<div class="glitch-line" style="background-color: {primaryColor}; display: flex; height: 2px; width: 100%; margin-top: 10px;"></div>
</div>

<style>
	.ticket-container {
		position: relative;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
		font-family: 'Source Serif Pro', monospace;
		display: flex;
		flex-direction: column;
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.background-grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.ticket-content {
		position: relative;
		z-index: 1;
		display: flex;
		padding: 24px;
		height: 100%;
		gap: 24px;
		backdrop-filter: blur(2px);
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

	.ticket-barcode {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.9);
		padding: 8px;
		border-radius: 2px;
		align-self: flex-end;
	}

	.ticket-number {
		font-size: 12px;
		margin: 4px 0 0 0;
		font-weight: bold;
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

	.glitch-line {
		height: 2px;
		margin-top: auto;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.glitch-line::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(255, 255, 255, 0.8) 50%,
			transparent 100%
		);
		animation: glitch 3s infinite linear;
	}

	@keyframes glitch {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	@media (max-width: 600px) {
		.ticket-content {
			flex-direction: column;
			gap: 16px;
		}

		.attendee-section {
			flex-direction: row;
			align-items: center;
		}

		.event-section {
			align-items: flex-start;
		}

		.ticket-barcode {
			align-self: flex-start;
		}

		.social-icons {
			align-self: flex-start;
		}
	}
</style>
