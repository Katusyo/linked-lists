const LinkedList = require("../src/LinkedList.js");

test("append adds a new node to an empty linked list", () => {
    const list = new LinkedList();

    list.append("dog");

    expect(list.head.value).toBe("dog");
});

test("append adds a node to the end of the linked list", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(list.head.next.value).toBe("cat");
});

test("size returns the number of nodes", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.size()).toBe(3);
});

test("size returns 0 for an empty linked list", () => {
    const list = new LinkedList();

    expect(list.size()).toBe(0);
});