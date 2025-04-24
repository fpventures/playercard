// ApiService.js - Handles API communications
import { getBaseUrl } from '../config.js';

export default class ApiService {
    constructor() {
        // Set base URL and API paths based on environment
        this.baseUrl = getBaseUrl();
        this.apiPrefix = 'ro/';
        this.apiBase = this.baseUrl + this.apiPrefix;
    }

    async fetchPortfolioData() {
        try {
            const response = await fetch(this.apiBase + 'index.json');
            if (!response.ok) {
                throw new Error('Failed to fetch portfolio data');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching portfolio data:', error);
            return null;
        }
    }
}
