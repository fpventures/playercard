// config.js - Configuration settings for the application

/**
 * Determines the base URL for API requests based on the current environment
 * In development, uses localhost
 * In production (GitHub Pages), uses the relative path from the current domain
 */
export function getApiBase() {
    // Check if we're running on localhost or a development environment
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
    
    if (isLocalhost) {
        return 'http://localhost:4242/ro/';
    } else {
        // On GitHub Pages, return the relative path from the repo base
        // This assumes the API files are served from the same repo
        let baseUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/')
        return baseUrl + 'api/ro/';
    }
}

export default {
    getApiBase: getApiBase
};
