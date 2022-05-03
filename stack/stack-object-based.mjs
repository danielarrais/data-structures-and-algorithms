class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const popItem = this.items[this.count]
        delete this.items[this.count];

        return popItem;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    size() {
        return this.count;
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }

        return Object.values(this.items).toString();
    }
}

export default Stack;