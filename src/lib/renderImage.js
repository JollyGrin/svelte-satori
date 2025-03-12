import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';
import { read } from '$app/server';
import { render } from 'svelte/server';

import sourceSerifPro from '$lib/fonts/SourceSerifPro-Regular.ttf';
const fontData = read(sourceSerifPro).arrayBuffer();

/**
 * Renders a Svelte component to a PNG
 * @param {import('svelte').ComponentType<any>} component - The Svelte component to render
 * @param {Record<string, any>} props - Props to pass to the component
 * @param {number} height - Height of the output image
 * @param {number} width - Width of the output image
 * @returns {Promise<Response>} - PNG image as a Response
 */
export async function componentToPng(component, props, height, width) {
	// Use the Svelte 4+ render API from svelte/server
	const result = render(component, { props });

	// Create a react node from the HTML and CSS
	// @ts-ignore - The types between satori-html and satori have some incompatibilities
	const markup = toReactNode(
		`${result.html}<style>${result.css?.code || ''}</style>`
	);
	
	// Define default styles to ensure all divs have an explicit display property
	const defaultStyles = {
		div: {
			display: 'flex',
			flexDirection: 'column'
		},
		p: {
			margin: '0'
		},
		h1: {
			margin: '0'
		},
		h2: {
			margin: '0'
		},
		h3: {
			margin: '0'
		}
	};
	
	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Source Serif Pro',
				data: await fontData,
				style: 'normal'
			}
		],
		height: +height,
		width: +width,
		defaultStyles
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: +width
		}
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}
