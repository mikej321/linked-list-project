class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 1;
    }

    append(value) {
        let node = this.head;
        if (node) {
            while (node.next) {
                node = node.next;
            }
            let nextNode = new Node(value);
            node.next = nextNode;
            this.length++;
        }
    }

    prepend(value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    size() {
        return this.length;
    }

    headNode() {
        return this.head;
    }

    tailNode() {
        let node = this.head;

        if (node) {
            while (node.next) {
                node = node.next;
            }
        }
        return node;
    }

    at(index) {
        let node = this.head;
        let i = 0;

        while (node) {
            node = node.next;
            i++;
            if (i === index) {
                return node;
            }
        }
        return undefined;
    }

    pop() {
        let node = this.head;
        for (let i = 1; i < this.length - 1; i++) {
            node = node.next;
        } 
        node.next = null;
        this.length--;
    }

    contains(value) {
        let node = this.head;

        while (node) {
            if (value === node.value) {
                return true;
            } else {
                node = node.next;
            }
        }
        return false;
    }

    find(value) {
        let node = this.head;
        let count = 1;

        while (node) {
            if (node.value === value) {
                return count;
            } else {
                node = node.next;
                count++;
            }
        }
        return null;
    }

    toString() {
        let node = this.head;
        let strList = '';

        while (node) {
            strList += `( ${node.value} ) -> `;
            node = node.next;
        }

        strList += '( null )';
        console.log(strList);
    }

    insertAt(value, index) {
        let node = this.head;
        let count = 1;

        if (node) {
            while (node.next) {
                if (count === index) {
                    let newNode = new Node(value, node.next);
                    node.next = newNode;
                    this.length++;
                    break;
                } else {
                    count++;
                    node = node.next;
                }
            }
        }
    }

    removeAt(index) {
        let node = this.head;

        for (let i = 1; i < this.length; i++) {
            if (i === index - 1) {
                node.next = node.next.next;
            }
        }
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let node1 = new Node(10)

let list = new LinkedList(node1)

list.prepend(5);

list.append(20);

list.toString()