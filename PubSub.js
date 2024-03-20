// Article for reference
// https://medium.com/@thebabscraig/javascript-design-patterns-part-2-the-publisher-subscriber-pattern-8fe07e157213
class PubSub {
    constructor() {
        this.subscribers = {};
    }

    Subscribe(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);

        return () => {
            this.Unsubscribe(event, callback);
        };
    }

    Unsubscribe(event, callback) {
        if (this.subscribers[event]) {
            this.subscribers[event] = this.subscribers[event].filter(
                (sub) => sub !== callback
            );
        }
    }

    Publish(event, data) {
        if (!this.subscribers[event]) return;
        this.subscribers[event].forEach(subscriberCallback =>
            subscriberCallback(data));
    }
}