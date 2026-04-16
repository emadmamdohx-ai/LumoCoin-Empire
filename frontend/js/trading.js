class TradingEngine {
    constructor() {
        this.orders = [];
        this.priceHistory = [];
        this.currentPrice = 0;
    }

    // Method to handle buy orders
    buyOrder(quantity, price) {
        const order = { type: 'buy', quantity, price, date: new Date() };
        this.orders.push(order);
        this.updatePrice(price);
    }

    // Method to handle sell orders
    sellOrder(quantity, price) {
        const order = { type: 'sell', quantity, price, date: new Date() };
        this.orders.push(order);
        this.updatePrice(price);
    }

    // Update the current price and maintain price history
    updatePrice(newPrice) {
        this.currentPrice = newPrice;
        this.priceHistory.push({ price: newPrice, date: new Date() });
    }

    // Method to get order history
    getOrderHistory() {
        return this.orders;
    }

    // Method to get the current price
    getCurrentPrice() {
        return this.currentPrice;
    }

    // Method to get price history
    getPriceHistory() {
        return this.priceHistory;
    }
}

export default TradingEngine;