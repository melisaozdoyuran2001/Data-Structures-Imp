//SEARCHING ALGORITHMS


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

    breadthFistSearch() {
        let curr = this.root ;
        let lst = [];
        let queue = [] ;
        queue.push(curr);

        while(queue.length > 0) {
            curr = queue.shift() ;
            lst.push(curr.value);

            if(curr.left) {
                queue.push(curr.left);
            }
            if(curr.right) {
                queue.push(curr.right);
            }

        }
        return lst; 
    }

    BFSRecursive(queue, lst) {
        if (!queue.length) {
            return lst;
        }
    
        const curr = queue.shift();
        lst.push(curr.value);
    
        if (curr.left) {
            queue.push(curr.left);
        }
        if (curr.right) {
            queue.push(curr.right);
        }
    
        return BFSRecursive(queue, lst);
    }

    DFSInOrder() {
        return traverseInOrder(this.root, []);

    }
    DFSPostOrder() {
        return traversePostOrder(this.root, []);

    }
    DFSPreOrder() {
        
        return traversePreOrder(this.root, []);
    }

}

function traverseInOrder(node, list) {
    if(node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if(node.right) {
        traverseInOrder(node.right, list)
    }
    return list; 
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if(node.left) {
        traverseInOrder(node.left, list);
    }
    
    if(node.right) {
        traverseInOrder(node.right, list)
    }
    return list; 
}

function traversePostOrder(node, list) {
    if(node.left) {
        traversePostOrder(node.left, list);
    }
   
    if(node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.value);
    return list; 
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


//console.log(tree.breadthFistSearch()); 
console.log(tree.DFSPostOrder()); 
 

//          8
//     4         30
// 1      6    15     45

