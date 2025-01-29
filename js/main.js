document.addEventListener('DOMContentLoaded', function() {
    // Check if accessed from mobile device
    if (/Android|iPhone/i.test(navigator.userAgent)) {
        console.log('Mobile device detected');
    } else {
        console.log('Desktop device detected');
    }
});