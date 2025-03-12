import RenderImage from '../../lib/CartridgeTicketSatori.svelte';
import { parseQuery } from '$lib/parse';
import { componentToPng } from '$lib/renderImage';
import { read } from '$app/server';
import sourceSerifPro from '$lib/fonts/SourceSerifPro-Regular.ttf';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const query = url.searchParams;
	const { seed, width, height } = parseQuery(query);

	// Load the font - though this is actually handled inside componentToPng now
	// We're leaving this for future reference
	await read(sourceSerifPro).arrayBuffer();

	// Define sample ticket data for the image
	const props = {
		seed,
		width,
		height,
		satori: true,
		eventName: 'Onion DAO',
		eventDate: 'June • July 2025',
		eventLocation: 'Chicago, IL, USA',
		attendeeName: 'deanlol',
		attendeeUsername: '/username',
		ticketNumber: 'TKT-' + Math.floor(Math.random() * 100000)
	};

	// Call componentToPng with the correct parameter order:
	// component, props, height, width
	// The function already returns a Response with correct headers
	// @ts-ignore - Type mismatch between Svelte component and expected ComponentType
	return componentToPng(RenderImage, props, height, width);
};
