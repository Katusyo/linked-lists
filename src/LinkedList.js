import Node from "./node.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    head() {
        if (this.head === null) {
            return undefined;
        }
        return this.head;
    }

    tail() {
        if (this.head === null) {
            return undefined;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }
}

export default LinkedList;