class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
        this.prev = null; 
    }
}


class DoublyLinkedList{
    constructor(value) { 
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1; 
    }

    append(value) {
        const node = new Node(value); 
        node.prev = this.tail; 
        this.tail.next = node;
        this.tail = node; 
        this.length++;
        return this; 
    }

    prepend(value) {
        const node = new Node(value); 
        node.next = this.head; 
        this.head.prev = node; 
        this.head = node; 
        this.length++ ;
        return this; 
    }

    insert(index, value) { 
        if (index === 0) {
            this.prepend(value);
            return this.print()
        }

        if (index >= this.length) {
            return this.append(value);
        }
        const node = new Node(value); 
        const firstNode = this.goToIndex(index-1); 
        const nextPointer = firstNode.next; 
        firstNode.next = node ; 
        node.next = nextPointer; 
        node.prev = firstNode;
        nextPointer.prev = node; 
        this.length++; 
        return this.print(); 
    }

    goToIndex(index) {
        let i = 0;
        let curr = this.head; 
        while (i != index) {
            i++; 
            curr= curr.next; 
        }
        return curr; 
    }


    delete(index) {
        const prevNode = this.goToIndex(index-1); 
        const nextNode = prevNode.next.next ; 
        prevNode.next = nextNode;
        nextNode.prev = prevNode; 
        this.length--; 
        return this.print(); 
    }

    print() {
        const arr = [];
        let curr = this.head ;
        while (curr !== null) {
            arr.push(curr.value); 
            curr = curr.next; 
        }
        console.log(arr);
    }
}


//tests
const myList = new DoublyLinkedList(1); 
console.log(myList); 
myList.append(2);  //append
console.log(myList); 
myList.append(3); 
console.log(myList); 
myList.prepend(0); //prepend 
console.log(myList); 
myList.insert(2, 1.5); 
myList.insert(100, 100);  //insert 
myList.print(); 
myList.delete(1); //delete


