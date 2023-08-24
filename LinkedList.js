class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }
}


class LinkedList{
    constructor(value) { 
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1; 
    }

    append(value) {
        const node = new Node(value); 
        this.tail.next = node;
        this.tail = node; 
        this.length++;
        return this; 
    }

    prepend(value) {
        const node = new Node(value); 
        const head = this.head ;
        node.next = head
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
        const firstPointer = firstNode.next; 
        firstNode.next = node ; 
        node.next = firstPointer; 
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
        prevNode.next = prevNode.next.next;
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
const myList = new LinkedList(1); 
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


