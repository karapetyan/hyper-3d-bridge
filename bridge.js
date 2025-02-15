export default class HyperBridge {
    constructor() {
        this.pendingRequests = new Map();

        window.addEventListener('message', (event) => {
            const { requestId, result, error } = event.data;
            if (this.pendingRequests.has(requestId)) {
                const { resolve, reject } = this.pendingRequests.get(requestId);
                if (error) reject(new Error(error));
                else resolve(result);
                this.pendingRequests.delete(requestId);
            }
        });
    }

    generateRequestId() {
        return `${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    }

    callMethod(method, params = []) {
        return new Promise((resolve, reject) => {
            const requestId = this.generateRequestId();
            this.pendingRequests.set(requestId, { resolve, reject });

            window.parent.postMessage(
                { method, params, requestId },
                '*'
            );
        });
    }

    async getUserInfo() {
        return this.callMethod('getUserInfo');
    }

    async getAvailablePerks() {
        return this.callMethod('getAvailablePerks');
    }

    async activatePerk(perkUid) {
        return this.callMethod('activatePerk', [perkUid]);
    }
}
