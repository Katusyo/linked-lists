import Node from "./node.js";

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }

        let current = this.headNode;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    head() {
        if (this.headNode === null) {
            return undefined;
        }
        return this.headNode;
    }

    tail() {
        if (this.headNode === null) {
            return undefined;
        }
        let current = this.headNode;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    at(index) {
        if (index < 0) {
            return undefined;
        }
        let current = this.headNode;
        let count = 0;
        while (current) {
            if (count === index) {
                return current;
            }
            current =current.next;
            count++;
        }
        return undefined;
    }

    pop() {
        if (this.headNode === null) {
            return undefined;
        }
        if (this.headNode.next === null) {
            this.headNode = null;
            return;
        }

        const removedNode = this.headNode;
        this.headNode = this.headNode.next;

        return removedNode;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    findIndex(value) {
        let current = this.headNode;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    }

    toString() {
        if (this.headNode === null) {
            return "";
        }
        let current = this.headNode;
        let result = "";
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.next;
        }
        result += "null";
        return result;
    }

    insertAt(index, value) {
        if (index < 0 || index > this.size()) {
            throw new RangeError("index out of bounds");
        }
        if (index === 0) {
            const newNode = new Node(value);
            newNode.next = this.headNode;
            this.headNode = newNode;
            return;
        }
        let current = this.headNode;
        let count = 0;
        while (current) {
            if (count === index - 1) {
                const newNode = new Node(value);
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
            count++;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            throw new RangeError("index out of bounds");
        }
        if (index === 0) {
            this.headNode = this.headNode.next;
            return;
        }
        let current = this.headNode;
        let count = 0;
        while (current) {
            if (count === index - 1) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
            count++;
        }
    }
}


export default LinkedList;