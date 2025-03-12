<script>
    import Dots from './Dots.svelte';
    
    /**
     * @typedef {Object} Props
     * @property {number} [width]
     * @property {number} [height]
     * @property {string} [seed]
     */
     
    /** @type {Props} */
    let { 
        width = 750, 
        height = 393,
        seed = 'debug-view'
    } = $props();
    
    // These will be the same props passed to the Satori renderer
    const ticketProps = {
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
</script>

<div class="debug-container">
    <h2>Satori Debug View</h2>
    <p>This shows how Satori will render your component</p>
    
    <div class="view-container">
        <div class="satori-view">
            <Dots {...ticketProps} />
        </div>
    </div>
    
    <div class="debug-info">
        <h3>Debugging Tips:</h3>
        <ul>
            <li>Satori only supports a subset of CSS</li>
            <li>All elements should have explicit <code>display</code> properties</li>
            <li>Use pixel values instead of relative units</li>
            <li>Replace HTML elements like <code>h1</code>, <code>p</code> with <code>div</code></li>
            <li>Ensure font is loaded and specified in all text elements</li>
        </ul>
    </div>
</div>

<style>
    .debug-container {
        padding: 20px;
        font-family: system-ui, sans-serif;
    }
    
    .view-container {
        border: 2px dashed #666;
        padding: 10px;
        margin: 20px 0;
        background: #f5f5f5;
    }
    
    .satori-view {
        /* Set max-width to match your desired image dimensions */
        max-width: 800px;
        margin: 0 auto;
    }
    
    .debug-info {
        background: #ffe;
        padding: 15px;
        border-radius: 4px;
        margin-top: 20px;
    }
    
    code {
        background: #eee;
        padding: 2px 4px;
        border-radius: 3px;
        font-family: monospace;
    }
</style>
