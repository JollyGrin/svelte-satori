<script>
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
     * @property {string} [attendeeUsername]
     * @property {string} [ticketNumber]
     */

    /** @type {Props} */
    let {
        width = 750,
        height = 393,
        seed = 'debug',
        satori = false,
        eventName = 'Onion DAO',
        eventDate = 'June • July 2025',
        eventLocation = 'Chicago, IL, USA',
        attendeeName = 'deanlol',
        attendeeUsername = '/username',
        ticketNumber = 'TKT-12345'
    } = $props();

    const bgColor = '#0a0a16';
    const textColor = '#ffffff';
    const accentColor = '#00ff41';
</script>

<!-- Simple ticket that will render identically in browser and Satori -->
<div style="width: {width}px; height: {height}px; background-color: {bgColor}; display: flex; flex-direction: column; padding: 20px; font-family: 'Source Serif Pro', monospace; color: {textColor}; position: relative;">
    
    <!-- Background pattern - simple and consistent -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; opacity: 0.2; z-index: 1;">
        <div style="width: 100%; height: 100%; background: repeating-linear-gradient(45deg, {accentColor}, {accentColor} 10px, transparent 10px, transparent 20px);"></div>
    </div>
    
    <!-- Content container -->
    <div style="position: relative; z-index: 2; display: flex; flex-direction: column; width: 100%; height: 100%; padding: 20px;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div style="font-size: 24px; font-weight: bold; color: {accentColor}; display: flex;">
                {eventName}
            </div>
            <div style="font-size: 16px; color: {textColor}; display: flex;">
                {ticketNumber}
            </div>
        </div>
        
        <!-- Main content -->
        <div style="display: flex; flex: 1; justify-content: space-between;">
            <!-- Left section - Attendee -->
            <div style="display: flex; flex-direction: column; width: 40%;">
                <div style="width: 80px; height: 80px; background-color: {accentColor}; display: flex; justify-content: center; align-items: center; color: {bgColor}; font-size: 36px; font-weight: bold; margin-bottom: 15px;">
                    {attendeeName.charAt(0)}
                </div>
                <div style="font-size: 20px; font-weight: bold; margin-bottom: 5px; display: flex;">
                    {attendeeName}
                </div>
                <div style="font-size: 16px; color: #cccccc; display: flex;">
                    {attendeeUsername}
                </div>
            </div>
            
            <!-- Right section - Event details -->
            <div style="display: flex; flex-direction: column; width: 50%; align-items: flex-end;">
                <div style="font-size: 18px; margin-bottom: 5px; display: flex;">
                    {eventDate}
                </div>
                <div style="font-size: 16px; color: #cccccc; display: flex;">
                    {eventLocation}
                </div>
                <div style="width: 100%; height: 60px; margin-top: 20px; background-color: {accentColor}; display: flex; justify-content: center; align-items: center; color: {bgColor}; font-weight: bold;">
                    ADMIT ONE
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="display: flex; margin-top: 20px; padding-top: 10px; border-top: 1px solid {accentColor}; justify-content: center; color: {accentColor}; font-size: 12px;">
            This ticket was generated with Satori for debugging - Seed: {seed}
        </div>
    </div>
</div>
