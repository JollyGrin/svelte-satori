<script lang="ts">
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
	 * @property {string} [ticketNumber]
	 */

	/** @type {Props} */
	let {
		width = 1200,
		height = 630,
		seed = 'cyber',
		satori = false,
		eventName = 'Onion DAO',
		eventDate = 'June • July 2025',
		eventLocation = 'Chicago, IL, USA',
		attendeeName = 'deanlol',
		ticketNumber = 'TKT-18893'
	} = $props();

	// Set up colors
	const bgColor = '#0a0a1f';
	const highlightColor = '#ff00ff';
	const accentColor = '#00ffff';
	const textColor = '#ffffff';
	const glowColor = '#ff00ff80';
</script>

<div
	style="display: flex; flex-direction: column; width: {width}px; height: {height}px; background-color: {bgColor}; font-family: 'Source Serif Pro', monospace; padding: 20px; position: relative; overflow: hidden;"
>
	<!-- Background grid lines -->
	<div
		style="display: flex; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(to right, {accentColor}10 1px, transparent 1px), linear-gradient(to bottom, {accentColor}10 1px, transparent 1px); background-size: 50px 50px;"
	></div>

	<!-- Glowing circles for decoration -->
	<div
		style="display: flex; position: absolute; top: -100px; left: -100px; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, {highlightColor}40 0%, transparent 70%); filter: blur(30px);"
	></div>
	<div
		style="display: flex; position: absolute; bottom: -50px; right: -50px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, {accentColor}40 0%, transparent 70%); filter: blur(20px);"
	></div>

	<!-- Header with event name -->
	<div
		style="display: flex; margin-top: 40px; width: 100%; justify-content: center; z-index: 5;"
	>
		<div
			style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 72px; font-weight: 700; color: {textColor}; text-transform: uppercase; letter-spacing: 3px; text-shadow: 0 0 15px {glowColor}; border-bottom: 2px solid {highlightColor}; padding-bottom: 10px;"
		>
			{eventName}
		</div>
	</div>

	<!-- Main content container -->
	<div
		style="display: flex; flex-direction: column; margin-top: 40px; border: 1px solid {accentColor}; border-radius: 5px; padding: 30px; background-color: {bgColor}80; backdrop-filter: blur(5px); z-index: 4; flex: 1;"
	>
		<!-- Ticket information row -->
		<div
			style="display: flex; justify-content: space-between; margin-bottom: 40px;"
		>
			<div style="display: flex; flex-direction: column;">
				<div
					style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 14px; color: {accentColor}; margin-bottom: 5px; text-transform: uppercase;"
				>
					Event Details
				</div>
				<div
					style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 24px; color: {textColor}; letter-spacing: 1px;"
				>
					{eventDate}
				</div>
				<div
					style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 24px; color: {textColor}; letter-spacing: 1px;"
				>
					{eventLocation}
				</div>
			</div>
			<div style="display: flex; flex-direction: column; align-items: flex-end;">
				<div
					style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 14px; color: {accentColor}; margin-bottom: 5px; text-transform: uppercase;"
				>
					Ticket Number
				</div>
				<div
					style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 32px; font-weight: 700; color: {highlightColor}; letter-spacing: 1px; text-shadow: 0 0 10px {glowColor};"
				>
					{ticketNumber}
				</div>
			</div>
		</div>

		<!-- Centered attendee name - prominently displayed -->
		<div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px; z-index: 5;">
			<div style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 18px; color: {accentColor}; text-transform: uppercase; letter-spacing: 2px;">
				Attendee
			</div>
			<div style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 60px; font-weight: 700; color: {textColor}; text-shadow: 0 0 20px {glowColor}; margin-top: 10px; text-align: center;">
				{attendeeName}
			</div>
		</div>

		<!-- Decorative elements -->
		<div
			style="display: flex; position: absolute; top: 50%; right: 40px; width: 100px; height: 200px; border-left: 2px dashed {highlightColor}; transform: translateY(-50%);"
		></div>
		<div
			style="display: flex; position: absolute; top: 50%; left: 40px; width: 100px; height: 200px; border-right: 2px dashed {accentColor}; transform: translateY(-50%);"
		></div>
	</div>

	<!-- Decorative bar codes and technical elements -->
	<div
		style="display: flex; justify-content: space-between; margin-top: 20px; margin-bottom: 20px; z-index: 3;"
	>
		<div
			style="display: flex; flex-direction: column; align-items: flex-start;"
		>
			<div
				style="display: flex; width: 200px; height: 40px; background-image: repeating-linear-gradient(90deg, {accentColor}, {accentColor} 2px, transparent 2px, transparent 5px);"
			></div>
			<div
				style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 12px; color: {accentColor}; margin-top: 5px;"
			>
				ID: {seed}-{Math.floor(Math.random() * 1000)}
			</div>
		</div>
		<div
			style="display: flex; flex-direction: column; align-items: flex-end;"
		>
			<div
				style="display: flex; width: 200px; height: 40px; background-image: repeating-linear-gradient(90deg, {highlightColor}, {highlightColor} 2px, transparent 2px, transparent 5px);"
			></div>
			<div
				style="display: flex; font-family: 'Source Serif Pro', monospace; font-size: 12px; color: {highlightColor}; margin-top: 5px;"
			>
				Powered by SvelteKit & Satori • Seed: {seed}
			</div>
		</div>
	</div>
</div>
