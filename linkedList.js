
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}


class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;

        this.head = newNode;
    }
    size() {

        let counter = 0
        let current = this.head;
        while (current !== null) {
            counter++
            current = current.nextNode
        }
        return counter;
    }
    gethead() {
        return this.head;
    }

    tail() {
        let current = this.head;
        if (current === null) return null;

        while (current.nextNode !== null) {
            current = current.nextNode
        }
        return current
    }

    at(index) {
        let indexCounter = 0
        let current = this.head
        while (indexCounter < index && current !== null) {
            current = current.nextNode
            indexCounter++
        }

        if (current === null) {
            return null
        }
        return current;

    }

    pop() {
        if (this.head === null) {
            return null;
        }

        if (this.head.nextNode === null) {
            const nodeToPop = this.head;
            this.head = null;
            return nodeToPop;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        const nodeToPop = current.nextNode;
        current.nextNode = null;
        return nodeToPop;
    }

    contains(value) {
        if (this.head === null) {
            return false
        }
        let current = this.head;
        while (current !== null) {

            if (current.value === value) {
                return true

            }
            current = current.nextNode;
        }
        return false

    }

    find(value) {
        if (this.head === null) {
            return null
        }
        let counterIndex = 0;
        let current = this.head;
        while (current !== null) {

            if (current.value === value) {
                return counterIndex
            }
            current = current.nextNode;
            counterIndex++;

        }
        return null
    }

    toString() {
        let current = this.head
        let output = '';
        while (current !== null) {
            output += `(${current.value}) -> `;
            current = current.nextNode;
        }
        output += 'null';
        return output;

    }

}

const list = new LinkedList();
list.append(1);
list.append(4);
list.append(3);
list.append(8);

console.log(list.toString());



