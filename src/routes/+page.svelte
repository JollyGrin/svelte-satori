<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import { page } from '$app/stores';
	import Image from '../lib/Dots.svelte';
	import { parseQuery } from '$lib/parse';
	import '../app.css';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	type Props = {
		data: import('./$types').PageData;
	};

	let { data }: Props = $props();

	let { width, height } = $derived(parseQuery($page.url.searchParams));

	let title = $derived(`Dynamic Svelte social image - "${data.seed}"`);
	let description = $derived(
		'This card was generated dynamically using Svelte, Satori, and resvg to create a unique hacker-style ticket for the event. Each ticket is customized with user details.'
	);
</script>

<svelte:head>
	<title>{title}</title><meta content="summary_large_image" name="twitter:card" /><meta
		content="Dynamic Svelte social images"
		property="og:site_name"
	/><meta content={title} property="og:title" /><meta content={base} property="og:url" /><meta
		content={description}
		name="description"
	/><meta content={description} property="og:description" /><meta
		content="https://social-card-gules.vercel.app/satori?seed={data.seed}"
		property="og:image"
	/></svelte:head
>

<h1>Dynamic social images with Svelte</h1>
{#key data.seed}
	<Image seed={data.seed} {width} {height} />
{/key}
<form
	action="/"
	onsubmit={preventDefault((e) => {
		const data = new FormData(e.target);
		const searchParams = new URLSearchParams(data);
		goto(`/?${searchParams.toString()}`, { keepfocus: true, noscroll: true });
	})}
>
	<input type="hidden" name="seed" value={data.nextSeed} />
	<button>New seed</button>
</form>
<p>
	Share <a href={$page.url.toString()}>this URL</a> and the
	<a href="/satori?seed={data.seed}">social image</a> will be dynamically generated from the Svelte component
	above. The SVG pattern is randomly generated using the word as a seed, so the same word will produce
	the same pattern.
</p>

<p>This uses:</p>
<ul>
	<li><a href="https://kit.svelte.dev/">SvelteKit</a></li>
	<li>
		Vercel's <a href="https://github.com/vercel/satori">Satori library</a> to convert JSX nodes to SVG
	</li>
	<li>
		Nate Moore's <a href="https://github.com/natemoo-re/satori-html">satori-html</a> to convert HTML
		to JSX nodes
	</li>
</ul>

<p>
	Built by <a href="https://geoffrich.net">Geoff Rich</a>. Source code available
	<a href="https://github.com/geoffrich/sveltekit-satori">on GitHub</a>
</p>

<style>
	button {
		width: 100%;
		max-width: 30ch;
		height: 3rem;
		margin: 1rem auto;
		background-color: var(--primary);
		color: white;
		font-size: 1.5rem;
		border: none;
		border-radius: 8px;
		font-family: inherit;
		cursor: pointer;
		transition: scale 0.3s ease-out;
		display: block;
	}

	button:active {
		transform: scale(0.95);
	}
</style>
