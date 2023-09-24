//implemented with Adjacency List 

class Graph {
    constructor() {
        this.nodeNum = 0;
        this.adjList = {}
    }

    addVertex(node) {
        this.adjList[node] = [];
        this.nodeNum++;
    }
    addEdge(node1,node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1); 
    }
}
const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');

myGraph.addEdge('3','1');
myGraph.addEdge('4','2'); 
myGraph.addEdge('5','1');
myGraph.addEdge('4','3');
myGraph.addEdge('3','5');
myGraph.addEdge('2','1');

