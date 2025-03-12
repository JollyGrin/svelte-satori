<script>
	import colors from 'nice-color-palettes';
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
		attendeeName = 'Guest User',
		attendeeUsername = '/username',
		ticketNumber = 'TKT-' + Math.floor(Math.random() * 100000),
		avatarUrl = ''
	} = $props();

	const rng = seedrandom(seed);
	let palette = randomItem(colors);

	const bg = palette[palette.length - 1];
	const accentColor = palette[0];
	palette = palette.slice(0, -1);

	const dotCount = 150;
	const sizes = [1, 2, 3, 5, 8];

	let points = new Array(dotCount).fill(null).map(() => ({
		x: random(width, 0),
		y: random(height, 0),
		color: randomItem(palette),
		size: randomItem(sizes)
	}));

	// Add a few larger highlight dots for visual interest
	for (let i = 0; i < 5; i++) {
		points.push({
			x: random(width, 0),
			y: random(height, 0),
			color: accentColor,
			size: random(15, 10)
		});
	}

	/**
	 * @param {number} upper
	 * @param {number} lower
	 */
	function random(upper, lower) {
		const result = rng() * (upper - lower) + lower;
		return result;
	}

	/**
	 * @param {any[]} arr
	 */
	function randomItem(arr) {
		const idx = Math.floor(random(arr.length, 0));
		return arr[idx];
	}

	/**
	 * Generates fake barcode lines for visual effect
	 */
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
</script>

<div
	class="ticket-container"
	style="max-width: {width}px; background-color: {bg};"
	style:height={satori ? `${height}px` : undefined}
>
	<!-- Background dots effect -->
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="background-dots">
		{#each points as { x, y, color, size }}
			<circle cx={x} cy={y} r={size} fill={color} />
		{/each}
	</svg>

	<div class="ticket-content">
		<!-- Left section - Avatar and Attendee info -->
		<div class="attendee-section">
			<div class="avatar-container">
				{#if avatarUrl}
					<img src={avatarUrl} alt={attendeeName} class="avatar" />
				{:else}
					<div class="avatar-placeholder" style="background-color: {accentColor}">
						{attendeeName.charAt(0)}
					</div>
				{/if}
			</div>
			<div class="attendee-info">
				<h2 class="attendee-name">{attendeeName}</h2>
				<p class="attendee-username">{attendeeUsername}</p>
			</div>
		</div>

		<!-- Right section - Event details and barcode -->
		<div class="event-section">
			<div class="event-details">
				<h3 class="event-name">{eventName}</h3>
				<p class="event-datetime">{eventDate}</p>
				<p class="event-location">{eventLocation}</p>
			</div>

			<div class="ticket-barcode">
				<svg width={barcodeWidth} height="60" viewBox="0 0 {barcodeWidth} 60">
					{#each barcodeLines as { x, height, width }}
						<rect {x} y={0} {width} {height} fill="#000" />
					{/each}
				</svg>
				<p class="ticket-number">{ticketNumber}</p>
			</div>

			<!-- Social icons in the style of the inspiration -->
			<div class="social-icons">
				<div class="icon">#</div>
				<div class="icon">○</div>
				<div class="icon">○</div>
			</div>
		</div>
	</div>

	<!-- Perforation line for the ticket -->
	<div class="perforation-line">
		{#each Array(20) as _, i}
			<div class="perforation-dot"></div>
		{/each}
	</div>
</div>

<style>
	.ticket-container {
		position: relative;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			sans-serif;
		display: flex;
		flex-direction: column;
		color: white;
	}

	.background-dots {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		opacity: 0.8;
	}

	.ticket-content {
		position: relative;
		z-index: 1;
		display: flex;
		padding: 24px;
		height: 100%;
		gap: 24px;
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
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid rgba(255, 255, 255, 0.8);
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
	}

	.attendee-username {
		font-size: 16px;
		opacity: 0.9;
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
	}

	.event-datetime,
	.event-location {
		font-size: 14px;
		margin: 0;
		opacity: 0.9;
	}

	.ticket-barcode {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #ffffff;
		padding: 8px;
		border-radius: 6px;
		align-self: flex-end;
	}

	.ticket-number {
		font-size: 12px;
		color: #000;
		margin: 4px 0 0 0;
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
		background-color: #000;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}

	.perforation-line {
		display: flex;
		justify-content: space-between;
		padding: 0 12px;
		position: relative;
		margin-top: auto;
	}

	.perforation-dot {
		width: 8px;
		height: 8px;
		background-color: white;
		border-radius: 50%;
		opacity: 0.6;
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
