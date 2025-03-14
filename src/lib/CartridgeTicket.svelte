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
		seed = 'those',
		satori = false,
		eventName = 'Onion DAO',
		eventDate = 'June • July 2025',
		eventLocation = 'Chicago, IL, USA',
		attendeeName = 'deanlol',
		ticketNumber = 'TKT-18893'
	} = $props();

	// Cartridge colors
	const cartridgeColor = '#B0B0B0';
	const cartridgeDarkColor = '#989898';
	const cartridgeHighlightColor = '#D0D0D0';
	const labelBgColor = '#5555AA';
	const labelTextColor = '#FF55AA';
	const textColor = '#333333';
	const textLightColor = '#FFFFFF';
</script>

<div
	style="display: flex; flex-direction: column; width: {width}px; height: {height}px; background-color: #FFFFFF; font-family: sans-serif; position: relative;"
>
	<!-- Cartridge body -->
	<div
		style="display:flex; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%; height: 90%; background-color: {cartridgeColor}; border-radius: 10px; box-shadow: 0 15px 30px rgba(0,0,0,0.2); display: flex; flex-direction: column; overflow: hidden;"
	>
		<!-- Top grooves -->
		<div
			style="display:flex; position: absolute; top: 0; left: 80px; width: 70%; height: 35px; display: flex;"
		>
			<div
				style="display:flex; width: 20px; height: 100%; background-color: {cartridgeDarkColor};"
			></div>
			<div
				style="display:flex; width: 20px; height: 100%; background-color: {cartridgeColor};"
			></div>
			<div
				style="display:flex; width: 20px; height: 100%; background-color: {cartridgeDarkColor};"
			></div>
			<div
				style="display:flex; width: 20px; height: 100%; background-color: {cartridgeColor};"
			></div>
			<div
				style="display:flex; width: 20px; height: 100%; background-color: {cartridgeDarkColor};"
			></div>
		</div>

		<!-- Right grooves -->
		<div
			style="position: absolute; top: 50px; right: 0; width: 35px; height: 60%; display: flex; flex-direction: column;"
		>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeDarkColor};"
			></div>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeColor};"
			></div>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeDarkColor};"
			></div>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeColor};"
			></div>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeDarkColor};"
			></div>
		</div>

		<!-- Left grooves -->
		<div
			style="position: absolute; top: 50px; left: 0; width: 35px; height: 60%; display: flex; flex-direction: column;"
		>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeDarkColor};"
			></div>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeColor};"
			></div>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeDarkColor};"
			></div>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeColor};"
			></div>
			<div
				style="display:flex; width: 100%; height: 20px; background-color: {cartridgeDarkColor};"
			></div>
		</div>

		<!-- Cartridge logo emboss -->
		<div
			style="display:flex; position: absolute; top: 45px; left: 50%; transform: translateX(-50%); width: 60%; height: 50px; border-radius: 25px; background-color: {cartridgeColor}; border-bottom: 3px solid {cartridgeDarkColor};"
		>
			<div
				style="position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; font-size: 24px; font-weight: bold; color: {cartridgeDarkColor}; letter-spacing: 1px;"
			>
				{eventName}
			</div>
		</div>

		<!-- Main label -->
		<div
			style="display:flex; position: absolute; top: 120px; left: 50%; transform: translateX(-50%); width: 70%; height: 50%; background-color: {labelBgColor}; border-radius: 5px; border: 2px solid #FFFFFF; box-shadow: inset 0 0 20px rgba(0,0,0,0.3); overflow: hidden;"
		>
			<!-- Label space background -->
			<div
				style="display:flex; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle, #6666CC 0%, #333399 100%); z-index: 1;"
			></div>

			<!-- Tetris-like falling blocks as decoration -->
			<div
				style="display:flex; position: absolute; top: 40%; left: 15%; width: 30px; height: 15px; background-color: #FF5555; z-index: 2;"
			></div>
			<div
				style="display:flex; position: absolute; top: 50%; left: 30%; width: 15px; height: 30px; background-color: #55FF55; z-index: 2;"
			></div>
			<div
				style="display:flex; position: absolute; top: 65%; left: 60%; width: 15px; height: 15px; background-color: #5555FF; z-index: 2;"
			></div>
			<div
				style="display:flex; position: absolute; top: 45%; left: 75%; width: 30px; height: 15px; background-color: #FFFF55; z-index: 2;"
			></div>
			<div
				style="display:flex; position: absolute; top: 70%; left: 40%; width: 15px; height: 15px; background-color: #FF55FF; z-index: 2;"
			></div>

			<!-- Event title -->
			<div
				style="display:flex; position: absolute; top: 20%; left: 0; width: 100%; text-align: center; font-size: 64px; font-weight: bold; color: {labelTextColor}; text-shadow: 4px 4px 0 #7700AA; z-index: 3; font-family: 'Impact', sans-serif;"
			>
				{eventName}
			</div>

			<!-- Attendee info -->
			<div
				style="position: absolute; bottom: 30px; left: 20px; display: flex; flex-direction: column; z-index: 3;"
			>
				<div style="display:flex; font-size: 14px; color: {textLightColor}; opacity: 0.8;">
					ATTENDEE
				</div>
				<div
					style="display:flex; font-size: 24px; font-weight: bold; color: {textLightColor}; text-shadow: 1px 1px 0 #000000;"
				>
					{attendeeName}
				</div>
			</div>

			<!-- Ticket number -->
			<div
				style="position: absolute; bottom: 30px; right: 20px; display: flex; flex-direction: column; align-items: flex-end; z-index: 3;"
			>
				<div style="display:flex; font-size: 14px; color: {textLightColor}; opacity: 0.8;">
					TICKET #
				</div>
				<div
					style="display:flex; font-size: 24px; font-weight: bold; color: {textLightColor}; text-shadow: 1px 1px 0 #000000;"
				>
					{ticketNumber}
				</div>
			</div>
		</div>

		<!-- Side information labels -->
		<div
			style="display:flex; position: absolute; bottom: 40px; left: 20px; transform: rotate(-90deg); transform-origin: left bottom; font-size: 14px; color: {textColor}; font-family: monospace;"
		>
			{eventDate}
		</div>
		<div
			style="display:flex; position: absolute; bottom: 40px; right: 20px; transform: rotate(90deg); transform-origin: right bottom; font-size: 14px; color: {textColor}; font-family: monospace;"
		>
			{eventLocation}
		</div>

		<!-- Bottom connector -->
		<div
			style="display:flex; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 80%; height: 30px; background-color: #7F7F7F; display: flex; justify-content: space-around; align-items: flex-start; padding-top: 5px;"
		>
			{#each Array(16) as _}
				<div
					style="display:flex; width: 10px; height: 20px; background-color: #D4AF37; border-radius: 1px;"
				></div>
			{/each}
		</div>

		<!-- Cartridge notch -->
		<div
			style="display:flex; position: absolute; bottom: 50px; left: 50%; transform: translateX(-50%); width: 40px; height: 15px; background-color: {cartridgeDarkColor}; border-radius: 2px;"
		></div>
	</div>

	<!-- Footer -->
	<div
		style="display:flex; position: absolute; bottom: 10px; left: 20px; font-size: 12px; color: #999; font-family: monospace;"
	>
		Powered by SvelteKit &amp; Satori • Seed: {seed}
	</div>
</div>

<style>
</style>
