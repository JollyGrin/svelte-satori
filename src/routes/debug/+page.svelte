<script>
    import SatoriDebugView from '$lib/SatoriDebugView.svelte';
    import SimpleSatoriTicket from '$lib/SimpleSatoriTicket.svelte';
    
    let seed = 'debug-seed';
    let width = 1200;
    let height = 630;
</script>

<svelte:head>
    <title>Satori Debug View</title>
</svelte:head>

<div class="container">
    <h1>Satori Rendering Debug</h1>
    <p>
        This page shows a preview of how your component will look when rendered by Satori.
        You can adjust the parameters below to match your social card rendering settings.
    </p>
    
    <div class="controls">
        <p>
            <a href="/prerender.png" target="_blank">View prerendered image</a> | 
            <a href="/satori?seed={seed}" target="_blank">View Satori rendered image</a>
        </p>
        
        <div class="parameters">
            <label>
                Seed:
                <input type="text" bind:value={seed} />
            </label>
            <label>
                Width:
                <input type="number" bind:value={width} />
            </label>
            <label>
                Height:
                <input type="number" bind:value={height} />
            </label>
        </div>
    </div>
    
    <div class="section">
        <h2>Original Component</h2>
        <p>This shows how your original Dots component renders in the browser:</p>
        <SatoriDebugView {width} {height} {seed} />
    </div>
    
    <div class="section">
        <h2>Simplified Component</h2>
        <p>This shows a simplified version that will render similarly in both browser and Satori:</p>
        <SimpleSatoriTicket {width} {height} {seed} satori={false} />
    </div>
    
    <div class="section">
        <h2>Testing Satori Rendering</h2>
        <p>
            To test how your component renders in Satori:
        </p>
        <ol>
            <li>
                Visit <a href="/satori?seed={seed}&width={width}&height={height}" target="_blank">/satori?seed={seed}&width={width}&height={height}</a> to see how Satori renders the component.
            </li>
            <li>
                Compare this to how it appears in the browser above.
            </li>
            <li>
                Make adjustments to your component using the debugging tips below.
            </li>
        </ol>
    </div>
    
    <div class="information">
        <h2>How to debug Satori rendering issues:</h2>
        <ol>
            <li>
                <strong>Component Structure:</strong> 
                Satori works best with simple component structures. Replace all HTML semantic elements 
                (h1, p, etc.) with divs that have explicit styles.
            </li>
            <li>
                <strong>CSS Properties:</strong>
                Satori only supports a subset of CSS. Use basic properties like display, width, height, 
                color, background-color, etc. Avoid complex CSS like shadows, gradients, or animations.
            </li>
            <li>
                <strong>Explicit Styling:</strong>
                Always use inline styles with explicit pixel values. Add display properties to all elements.
            </li>
            <li>
                <strong>Fonts:</strong>
                Ensure fonts are properly loaded and specified in the component. Use web-safe fonts if possible.
            </li>
            <li>
                <strong>SVG Elements:</strong>
                Keep SVG elements simple. Avoid complex SVG features like filters, masks, or complex paths.
            </li>
        </ol>
    </div>
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        font-family: system-ui, -apple-system, sans-serif;
    }
    
    .controls {
        margin: 20px 0;
        padding: 10px;
        background: #f5f5f5;
        border-radius: 4px;
    }
    
    .parameters {
        display: flex;
        gap: 20px;
        margin-top: 10px;
    }
    
    .parameters label {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .parameters input {
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    
    .section {
        margin: 30px 0;
        padding: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
    }
    
    .information {
        margin-top: 40px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 4px;
        border-left: 4px solid #0074d9;
    }
    
    h1, h2 {
        color: #333;
    }
    
    a {
        color: #0074d9;
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }
</style>
