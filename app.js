// Basic AR Physics Lab
console.log('Basic AR Physics Lab Loading...');

// Simple state
let bulbState = {
    isOn: false
};

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('AR Physics Lab initialized');
    
    // Wait for A-Frame to load
    const scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
        initializeAR();
    } else {
        scene.addEventListener('loaded', initializeAR);
    }
});

function initializeAR() {
    console.log('A-Frame scene loaded, setting up AR...');
    
    const marker = document.querySelector('#main-marker');
    const bulb = document.querySelector('#bulb');
    
    if (marker) {
        marker.addEventListener('markerFound', function() {
            console.log('✅ Marker detected!');
            updateStatus('Marker found! Click the yellow bulb to toggle it.');
        });
        
        marker.addEventListener('markerLost', function() {
            console.log('❌ Marker lost!');
            updateStatus('Marker lost. Point camera at the printed marker.');
        });
    }
    
    if (bulb) {
        // Add click listener for desktop
        bulb.addEventListener('click', function() {
            console.log('Bulb clicked!');
            toggleBulb();
        });
        
        // Add touch listener for mobile
        bulb.addEventListener('touchstart', function(e) {
            e.preventDefault();
            console.log('Bulb touched!');
            toggleBulb();
        });
    }
    
    updateStatus('Ready! Point your camera at the printed marker.');
}

function toggleBulb() {
    bulbState.isOn = !bulbState.isOn;
    const bulb = document.querySelector('#bulb');
    const statusElement = document.getElementById('bulb-status');
    
    if (bulbState.isOn) {
        // Turn ON
        bulb.setAttribute('material', {
            color: 'yellow',
            emissive: '#ffff88',
            emissiveIntensity: 0.5
        });
        bulb.setAttribute('animation', {
            property: 'scale',
            to: '1.2 1.2 1.2',
            dur: 200,
            direction: 'alternate',
            loop: 2
        });
        statusElement.textContent = 'ON 💡';
        statusElement.style.color = '#ffff00';
        updateStatus('Bulb is ON - Bright and glowing!');
    } else {
        // Turn OFF
        bulb.setAttribute('material', {
            color: '#444444',
            emissive: '#000000',
            emissiveIntensity: 0
        });
        bulb.setAttribute('scale', '1 1 1');
        bulb.removeAttribute('animation');
        statusElement.textContent = 'OFF';
        statusElement.style.color = '#888888';
        updateStatus('Bulb is OFF - No light emitted.');
    }
    
    console.log(`Bulb is now: ${bulbState.isOn ? 'ON' : 'OFF'}`);
}

function updateStatus(message) {
    const statusElement = document.getElementById('status');
    if (statusElement) {
        statusElement.textContent = message;
    }
    console.log('📱 Status:', message);
}

// Manual toggle function for UI button
function toggleBulbManually() {
    console.log('Manual toggle button pressed');
    toggleBulb();
}

// Make function globally available
window.toggleBulbManually = toggleBulbManually;

// Error handling
window.addEventListener('error', function(e) {
    console.error('❌ Error:', e.error);
    updateStatus('Error occurred: ' + e.message);
});

console.log('✅ Basic AR Physics Lab script loaded');