class Node{
    constructor(value) {
        this.value = value;
        this.left = null ;
        this.right = null;
         
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode; 
        }else {
            let currNode = this.root;
            while(true) {
                if(value < currNode.value) {
                    //Left
                    if(!currNode.left) {
                        currNode.left = newNode; 
                        return this
                    } 
                    currNode = currNode.left ;

                } else {
                    //Right
                    if(!currNode.right) {
                        currNode.right = newNode; 
                        return this;
                    }
                    currNode = currNode.right; 
                }
            }
        }
    }
    lookup(value) {
        if(!this.root) {
            return false;
        }
        let currNode = this.root;
        while(currNode) {
            if(value < currNode.value) {
                currNode = currNode.left ;
            } else if(value > currNode.value) {
                currNode= currNode.right; 
            } else if(currNode.value === value) {
                return currNode; 
            }
        }
        return false; 
    }

}


function traverse(node) {
    const tree = {value: node.value} ;
    tree.left = node.left === null ? null:
    traverse(node.left);
    tree.right = node.right === null ? null : 
    traverse(node.right); 
    return tree;
}

const tree = new BinarySearchTree() ; 
tree.insert(8);
tree.insert(4);
tree.insert(6);
tree.insert(30);
tree.insert(45);
tree.insert(15);
//console.log(tree.insert(1));
console.log(tree.lookup(8)); 
console.log(tree.lookup(100)); //return false

JSON.stringify(traverse(tree.root)); 

//          8
//     4         30
// 1      6    15     45

