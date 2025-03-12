<script>
	import seedrandom from 'seedrandom';

	/** @typedef {Object} TicketProps
	 * @property {number} [width]
	 * @property {number} [height]
	 * @property {string} [seed]
	 * @property {string} [eventName]
	 * @property {string} [eventDate]
	 * @property {string} [eventLocation]
	 * @property {string} [attendeeName]
	 * @property {string} [attendeeUsername]
	 * @property {string} [ticketNumber]
	 * @property {string} [avatarUrl]
	 */

	/** @type {TicketProps} */
	export let props = {};

	const {
		width = 1200,
		height = 600,
		seed = 'default',
		eventName = 'Onion DAO',
		eventDate = 'June • July 2025',
		eventLocation = 'Chicago, IL, USA',
		attendeeName = 'Guest User',
		attendeeUsername = '/username',
		ticketNumber = 'TKT-' + Math.floor(Math.random() * 100000),
		avatarUrl = ''
	} = props;

	const rng = seedrandom(seed);
	
	// Cyber colors
	const cyberColors = [
		'#00ff41', // Matrix green
		'#39ff14', // Neon green
		'#0ff0fc', // Cyan
		'#ff00ff', // Magenta
		'#ff3131'  // Red
	];
	
	const bgColor = '#0a0a16'; // Dark blue-black background
	const primaryColor = cyberColors[Math.floor(rng() * cyberColors.length)];
	const secondaryColor = cyberColors[(Math.floor(rng() * cyberColors.length) + 2) % cyberColors.length];
	
	/**
	 * Generate a random number between upper and lower bounds
	 * @param {number} upper - Upper bound
	 * @param {number} lower - Lower bound
	 * @returns {number} A random number
	 */
	function random(upper, lower) {
		const result = rng() * (upper - lower) + lower;
		return result;
	}
	
	/** @typedef {{x1: number, y1: number, x2: number, y2: number, opacity: number}} LineProps */
	/** @typedef {{x: number, y: number, size: number, opacity: number}} NoiseElement */
	/** @typedef {{x: number, height: number, width: number}} BarcodeLine */
	
	/** @type {LineProps[]} */
	const horizontalLines = [];
	
	/** @type {LineProps[]} */
	const verticalLines = [];
	
	const horizontalCount = 8;
	const verticalCount = 12;
	
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
	
	/** @type {NoiseElement[]} */
	const noiseElements = [];
	const noiseCount = 50;
	
	for (let i = 0; i < noiseCount; i++) {
		const x = random(width, 0);
		const y = random(height, 0);
		const size = random(3, 1);
		const opacity = random(0.5, 0.1);
		
		noiseElements.push({ x, y, size, opacity });
	}
	
	/** @type {BarcodeLine[]} */
	const barcodeLines = [];
	const lineCount = 20;
	const maxHeight = 40;
	const lineWidth = 2;
	const barcodeWidth = lineCount * 3;

	for (let i = 0; i < lineCount; i++) {
		const height = random(maxHeight, 15);
		barcodeLines.push({
			x: i * 3,
			height,
			width: lineWidth
		});
	}
</script>

<!-- The main container must be a div with explicit display flex -->
<div style="display: flex; flex-direction: column; width: {width}px; height: {height}px; background-color: {bgColor}; color: white; font-family: monospace; position: relative; overflow: hidden;">
	
	<!-- Background SVG for grid and noise -->
	<svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
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
	</svg>

	<!-- Content container -->
	<div style="display: flex; padding: 30px; z-index: 1; height: 100%;">
		<!-- Left column -->
		<div style="display: flex; flex-direction: column; flex: 1;">
			<!-- Avatar placeholder or image -->
			<div style="display: flex; width: 80px; height: 80px; margin-bottom: 20px; background-color: rgba(0,0,0,0.3); align-items: center; justify-content: center; border: 2px solid {primaryColor};">
				{#if avatarUrl}
					<img src={avatarUrl} alt={attendeeName} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
				{:else}
					<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 32px; font-weight: bold; color: white;">
						{attendeeName.charAt(0)}
					</div>
				{/if}
			</div>
			
			<!-- Attendee info -->
			<div style="display: flex; flex-direction: column;">
				<h2 style="margin: 0; font-size: 24px; color: {primaryColor}; font-weight: bold;">{attendeeName}</h2>
				<p style="margin: 0; font-size: 16px; opacity: 0.7;">{attendeeUsername}</p>
			</div>
		</div>
		
		<!-- Right column -->
		<div style="display: flex; flex-direction: column; flex: 1; align-items: flex-end;">
			<!-- Event details -->
			<div style="display: flex; flex-direction: column; align-items: flex-end; margin-bottom: 20px;">
				<h3 style="margin: 0; font-size: 18px; font-weight: bold; text-transform: uppercase;">{eventName}</h3>
				<p style="margin: 0; font-size: 14px; opacity: 0.7;">{eventDate}</p>
				<p style="margin: 0; font-size: 14px; opacity: 0.7;">{eventLocation}</p>
			</div>
			
			<!-- Barcode -->
			<div style="display: flex; flex-direction: column; align-items: center; background-color: rgba(255,255,255,0.9); padding: 8px; margin-top: auto;">
				<svg width={barcodeWidth} height="40" viewBox="0 0 {barcodeWidth} 40">
					{#each barcodeLines as { x, width, height }}
						<rect {x} y={0} {width} {height} fill={primaryColor} />
					{/each}
				</svg>
				<p style="margin: 4px 0 0 0; font-size: 12px; font-weight: bold; color: {bgColor};">{ticketNumber}</p>
			</div>
			
			<!-- Social icons -->
			<div style="display: flex; gap: 8px; margin-top: 16px;">
				<div style="display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border: 1px solid {primaryColor}; color: {primaryColor};">#</div>
				<div style="display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border: 1px solid {primaryColor}; color: {primaryColor};">○</div>
				<div style="display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border: 1px solid {primaryColor}; color: {primaryColor};">○</div>
			</div>
		</div>
	</div>
	
	<!-- Footer line -->
	<div style="height: 2px; width: 100%; background-color: {primaryColor}; margin-top: auto;"></div>
</div>
