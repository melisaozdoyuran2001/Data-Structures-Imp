//stack 

//LINKED LIST IMPLEMENTATION

class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0; 
    }
    peek() {
        return this.top; 
    }

    push(value) {
        const newNode = new Node(value); 
        if (!this.top){
            this.top = newNode;
            this.bottom = newNode; 
        }else {
            const curTop = this.top; 
            this.top = newNode;
            this.top.next = curTop;
        }
        this.length++;
        return this; 
    }

    pop() {
        if(!this.top){
            return 'stack is empty';
        }
        if (this.top == this.bottom){
            this.bottom = null;
        }
        const curTop = this.top;
        this.top = this.top.next;
        this.length--;
        return curTop; 
    }
}

const stack = new Stack();
console.log(stack.push(2) );
console.log(stack.peek()); 
console.log(stack.push(3) );
console.log(stack.push(4) );
console.log(stack.pop() );
console.log(stack.pop() );



