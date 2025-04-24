// ApiService.js - Handles API communications
import { getApiBase } from '../config.js';

export default class ApiService {
    constructor() {
        this.apiBase = getApiBase();
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
