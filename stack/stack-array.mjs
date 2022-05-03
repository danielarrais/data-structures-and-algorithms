class Stack {
    constructor() {
        this.items = [];
    }

    push(...elements) {
        this.items.push(elements);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        const size = this.size();
        const lastItemIndex = size === 0 ? 0 : size - 1;
        return this.items[lastItemIndex];
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.toString();
    }
}

export default Stack;