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
        seed = 'ticket',
        satori = false,
        eventName = 'Developer Conference 2025',
        eventDate = 'June 15-17, 2025',
        eventLocation = 'San Francisco, CA',
        attendeeName = 'John Developer',
        ticketNumber = 'CONF-' + Math.floor(Math.random() * 10000)
    } = $props();

    // Colors
    const bgColor = '#111827';
    const primaryColor = '#22D3EE';
    const secondaryColor = '#F472B6';
    const textColor = '#FFFFFF';
</script>

<div 
    style="display: flex; flex-direction: column; width: {width}px; height: {height}px; background-color: {bgColor}; font-family: 'Source Serif Pro', system-ui, sans-serif; color: {textColor}; position: relative;"
>
    <!-- Background gradient -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(244, 114, 182, 0.1)); z-index: 1;"></div>
    
    <!-- Background grid -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; background-image: radial-gradient({primaryColor} 1px, transparent 1px); background-size: 30px 30px; opacity: 0.2; z-index: 2;"></div>
    
    <!-- Content container -->
    <div style="display: flex; flex-direction: column; padding: 60px; position: relative; z-index: 10; width: 100%; height: 100%; box-sizing: border-box;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 50px;">
            <div style="display: flex; flex-direction: column;">
                <div style="font-size: 48px; font-weight: bold; margin-bottom: 10px; color: {primaryColor}; display: flex;">{eventName}</div>
                <div style="font-size: 24px; color: {textColor}; opacity: 0.8; display: flex;">{eventDate} | {eventLocation}</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: center; background-color: {secondaryColor}; width: 120px; height: 120px; border-radius: 60px;">
                <div style="font-size: 24px; font-weight: bold; color: {bgColor}; display: flex;">TICKET</div>
            </div>
        </div>
        
        <!-- Main content -->
        <div style="display: flex; flex: 1; border: 2px dashed {primaryColor}; padding: 40px; border-radius: 10px;">
            <div style="display: flex; flex-direction: column; justify-content: center; flex: 1;">
                <div style="display: flex; flex-direction: column; margin-bottom: 40px;">
                    <div style="font-size: 18px; color: {primaryColor}; margin-bottom: 5px; display: flex;">ATTENDEE</div>
                    <div style="font-size: 36px; font-weight: bold; display: flex;">{attendeeName}</div>
                </div>
                
                <div style="display: flex; flex-direction: column;">
                    <div style="font-size: 18px; color: {primaryColor}; margin-bottom: 5px; display: flex;">TICKET NUMBER</div>
                    <div style="font-size: 36px; font-weight: bold; display: flex;">{ticketNumber}</div>
                </div>
            </div>
            
            <!-- Barcode-like visual (just for show) -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 200px;">
                <div style="display: flex; width: 160px; height: 160px;">
                    <div style="display: flex; width: 100%; height: 100%; flex-wrap: wrap;">
                        {#each Array(16) as _, i}
                            <div style="width: 40px; height: 40px; background-color: {i % 3 === 0 ? primaryColor : i % 2 === 0 ? secondaryColor : 'transparent'}; display: flex;"></div>
                        {/each}
                    </div>
                </div>
                <div style="margin-top: 15px; font-size: 16px; opacity: 0.7; display: flex;">SCAN TO CHECK IN</div>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="display: flex; justify-content: space-between; margin-top: 40px; align-items: center;">
            <div style="display: flex; font-size: 16px; opacity: 0.6;">Powered by SvelteKit & Satori</div>
            <div style="display: flex; font-size: 16px; opacity: 0.6;">Seed: {seed}</div>
        </div>
    </div>
</div>

<style>
</style>
