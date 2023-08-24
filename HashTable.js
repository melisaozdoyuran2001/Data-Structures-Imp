class HashTable {
    constructor(size){
        this.data = new Array(size);
        }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length ; i++) {
            hash = (hash + key.charCodeAt(i) * i) % 
            this.data.length
        }
        return hash ;
    }

    set(key, value)
    {
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        } 
        this.data[address].push([key, value]); 
        return this.data; 
    }

    get(key){
        let address = this._hash(key); 
        const curr = this.data[address]; 
        console.log(curr);
        if (curr) {
            for(let i = 0; i < curr.length; i++){
                if (curr[i][0] === key){
                    return curr[i][1]; 
                }
            }
        }
        return undefined; 

    }

    keys(){
        if (!this.data.length) {
            return undefined;
        }

        const keys = []
        for (let i = 0 ; i < this.data.length ; i++){
            if (this.data[i] && this.data[i].length) {
                if (this.data.length >1 ) {
                    for (let j =0; j < this.data[i].length ; j++) {
                        keys.push(this.data[i][j][0]);
                    }
                } else {
                    keys.push(this.data[i][0]);
                }
            }
        }
        return keys; 
    }
} 

const myHashTable = new HashTable(3);
myHashTable.set('istanbul', 10); 
myHashTable.set('newyork', 20)
myHashTable.set('chicago', 30); 
//console.log(myHashTable); 
//console.log(myHashTable.get('a'));
console.log(myHashTable.keys()); 