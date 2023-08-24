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
        delete this.data[this.length-1] ;
        this.length-- ; 
        return lastItem; 
    }

    delete(index) { //delete a given index
        const item = this.data[index];
        this.shiftItems(index); 
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1 ; i++) {
            this.data[i] = this.data[i+1];
        }
       delete this.data[this.length-1];
       this.length--; 
    }
}

const exampleArray = new Array();
console.log(exampleArray.length);
exampleArray.push('my');
console.log(exampleArray);
exampleArray.push('name'); 
console.log(exampleArray);
exampleArray.pop(); // remove last element
console.log(exampleArray); 
exampleArray.push('is'); 
exampleArray.push('melisa'); 
console.log(exampleArray); 

