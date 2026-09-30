import LinkedList from "../src/LinkedList.js";

test("append adds a new node to an empty linked list", () => {
    const list = new LinkedList();

    list.append("dog");

    expect(list.head().value).toBe("dog");
});

test("append adds a node to the end of the linked list", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(list.head().next.value).toBe("cat");
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

test("head returns the first node in the linked list", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(list.head().value).toBe("dog");
});

test("head returns undefined if linked list is empty", () => {
    const list = new LinkedList();

    expect(list.head()).toBeUndefined();
});

test("tail returns the last node in the linked list", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.tail().value).toBe("parrot");
});

test("tail returns undefined if linked list is empty", () => {
    const list = new LinkedList();

    expect(list.tail()).toBeUndefined();
});

test("at(index) returns the node at the requested index", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.at(0).value).toBe("dog");
    expect(list.at(1).value).toBe("cat");
    expect(list.at(2).value).toBe("parrot");
});

test("at(index) returns undefined when the index is not found", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(list.at(5)).toBeUndefined();
    expect(list.at(-1)).toBeUndefined();
});

test("pop removes the head node from the linked list and returns it", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    const poppedNode = list.pop();

    expect(poppedNode.value).toBe("dog");
    expect(list.size()).toBe(2);
    expect(list.head().value).toBe("cat");
    expect(list.tail().value).toBe("parrot");
});

test("pop returns undefined when the linked list is empty", () => {
    const list = new LinkedList();

    expect(list.pop()).toBeUndefined();
});

test("contains returns true if the linked list contains the value", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.contains("cat")).toBe(true);
    expect(list.contains("parrot")).toBe(true);
    expect(list.contains("dragon")).toBe(false);
});

test("contains returns false if the linked list is empty", () => {
    const list = new LinkedList();

    expect(list.contains("dog")).toBe(false);
});

test("findIndex(value) returns the index of the node containing the first appearance of the value", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");
    list.append("cat");

    expect(list.findIndex("dog")).toBe(0);
    expect(list.findIndex("cat")).toBe(1);
    expect(list.findIndex("parrot")).toBe(2);
    expect(list.findIndex("dragon")).toBe(-1);
});

test ("toString returns a string representation of the linked list", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> null");
});

test("toString returns an empty string representation of the linked list when it is empty", () => {
    const list = new LinkedList();

    expect(list.toString()).toBe("");
});

test("insertAt inserts a new node at the specified index", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    list.insertAt(1, "hamster");

    expect(list.at(0).value).toBe("dog");
    expect(list.at(1).value).toBe("hamster");
    expect(list.at(2).value).toBe("cat");
    expect(list.at(3).value).toBe("parrot");
});

test("insertAt inserts a new node at the head of the linked list when index is 0", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    list.insertAt(0, "hamster");

    expect(list.at(0).value).toBe("hamster");
    expect(list.at(1).value).toBe("dog");
    expect(list.at(2).value).toBe("cat");
});

test("insertAt returns a RangeError when the index is out of bounds", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(() => list.insertAt(-1, "hamster")).toThrow(RangeError);
    expect(() => list.insertAt(3, "hamster")).toThrow(RangeError);
});

test("removeAt removes the node at the specified index", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    list.removeAt(1);

    expect(list.at(0).value).toBe("dog");
    expect(list.at(1).value).toBe("parrot");
});