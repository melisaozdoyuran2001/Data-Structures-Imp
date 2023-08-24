class Array {
    constructor(){
        this.data = {};
        this.length = 0;
        }
    
    get(index){
        return this.data[index]; 
    }

    push(item) { //push back
        this.data[this.length] = item;
        this.length++; 
        return this.length ; 
    }

    pop() { //remove last elemeent
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length-- ; 
        return lastItem; 
    }
}

const exampleArray = new Array();
console.log(exampleArray.length);
exampleArray.push(1);
console.log(exampleArray);
exampleArray.push(2); 
console.log(exampleArray);
exampleArray.pop(); // remove last element
console.log(exampleArray); 