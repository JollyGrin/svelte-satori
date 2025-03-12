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

	// Colors - Cyberpunk palette
	const bgColor = '#0A192F';
	const primaryColor = '#00F0FF';
	const secondaryColor = '#FF00A8';
	const textColor = '#FFFFFF';
</script>

<div
	style="display: flex; flex-direction: column; width: {width}px; height: {height}px; background-color: {bgColor}; font-family: 'Courier New', monospace; color: {textColor}; position: relative;"
>
	<!-- Background grid -->
	<div
		style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; background-image: linear-gradient({primaryColor}22 1px, transparent 1px), linear-gradient(90deg, {primaryColor}22 1px, transparent 1px); background-size: 50px 50px; z-index: 2;"
	></div>

	<!-- Glowing border lines -->
	<div
		style="display: flex;position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: linear-gradient(90deg, transparent, {primaryColor}, transparent); box-shadow: 0 0 15px {primaryColor}; z-index: 3;"
	></div>
	<div
		style="display:flex;position: absolute; bottom: 0; left: 0; width: 100%; height: 5px; background: linear-gradient(90deg, transparent, {secondaryColor}, transparent); box-shadow: 0 0 15px {secondaryColor}; z-index: 3;"
	></div>

	<!-- Content container -->
	<div
		style="display: flex; flex-direction: column; padding: 50px; position: relative; z-index: 10; width: 100%; height: 100%; box-sizing: border-box;"
	>
		<!-- Header -->
		<div
			style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 50px;"
		>
			<div style="display: flex; flex-direction: column;">
				<div
					style="display:flex; font-size: 72px; font-weight: bold; margin-bottom: 10px; color: {primaryColor}; display: flex; text-shadow: 0 0 10px {primaryColor}80;"
				>
					{eventName}
				</div>
				<div
					style="display:flex; font-size: 24px; color: {textColor}; opacity: 0.8; display: flex; letter-spacing: 2px;"
				>
					{eventDate} | {eventLocation}
				</div>
			</div>
			<div
				style="display: flex; align-items: center; justify-content: center; background-color: {secondaryColor}; width: 120px; height: 120px; border-radius: 60px; box-shadow: 0 0 20px {secondaryColor}80;"
			>
				<div style="font-size: 24px; font-weight: bold; color: {bgColor}; display: flex;">
					TICKET
				</div>
			</div>
		</div>

		<!-- Main content -->
		<div
			style="display: flex; flex: 1; border: 2px solid {primaryColor}; background-color: {bgColor}99; padding: 40px; border-radius: 5px; box-shadow: 0 0 15px {primaryColor}40;"
		>
			<div style="display: flex; flex-direction: column; justify-content: center; flex: 1;">
				<div style="display: flex; flex-direction: column; margin-bottom: 40px;">
					<div
						style="font-size: 18px; color: {primaryColor}; margin-bottom: 5px; display: flex; letter-spacing: 3px;"
					>
						ATTENDEE
					</div>
					<div
						style="font-size: 36px; font-weight: bold; display: flex; text-shadow: 0 0 5px {textColor}60;"
					>
						{attendeeName}
					</div>
				</div>

				<div style="display: flex; flex-direction: column;">
					<div
						style="font-size: 18px; color: {primaryColor}; margin-bottom: 5px; display: flex; letter-spacing: 3px;"
					>
						TICKET NUMBER
					</div>
					<div
						style="font-size: 36px; font-weight: bold; display: flex; text-shadow: 0 0 5px {textColor}60;"
					>
						{ticketNumber}
					</div>
				</div>
			</div>

			<!-- Cyberpunk QR code visual -->
			<div
				style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 200px;"
			>
				<div style="display: flex; width: 160px; height: 160px;">
					<div style="display: flex; width: 100%; height: 100%; flex-wrap: wrap;">
						{#each Array(16) as _, i}
							<div
								style="width: 40px; height: 40px; background-color: {i % 4 === 0
									? primaryColor
									: i % 3 === 0
										? secondaryColor
										: 'transparent'}; 
                                display: flex;
                                box-shadow: {i % 3 === 0 ? `0 0 10px ${primaryColor}80` : 'none'};
                                "
							></div>
						{/each}
					</div>
				</div>
				<div
					style="margin-top: 15px; font-size: 16px; opacity: 0.7; display: flex; letter-spacing: 1px;"
				>
					SCAN TO CHECK IN
				</div>
			</div>
		</div>

		<!-- Footer -->
		<div
			style="display: flex; justify-content: space-between; margin-top: 40px; align-items: center;"
		>
			<div style="display: flex; font-size: 16px; opacity: 0.6; letter-spacing: 1px;">
				Powered by SvelteKit &amp; Satori
			</div>
			<div style="display: flex; font-size: 16px; opacity: 0.6; letter-spacing: 1px;">
				Seed: {seed}
			</div>
		</div>

		<!-- Circuit lines decoration -->
		<div
			style=" display:flex; position: absolute; bottom: 150px; left: 0; width: 150px; height: 2px; background-color: {secondaryColor}; z-index: 5; box-shadow: 0 0 8px {secondaryColor};"
		></div>
		<div
			style="display:flex; position: absolute; bottom: 150px; left: 0; width: 2px; height: 50px; background-color: {secondaryColor}; z-index: 5; box-shadow: 0 0 8px {secondaryColor};"
		></div>
	</div>
</div>

<style>
</style>
