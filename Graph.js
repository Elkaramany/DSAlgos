class Graph{
    constructor(){
        this.adjacencyList= {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeVertex(v){
        let v2;
        while(this.adjacencyList[v].length){
            v2 = this.adjacencyList[v].pop();
            this.removeEdge(v2, v);
        }
        delete this.adjacencyList[v]
    }

    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1)
    }

    recursiveDFS(v){
        let result = [], visited = {};
        let list = this.adjacencyList;
        (function DFS(v){
            if(!v) return null;
            visited[v] = true;
            result.push(v);
            list[v].forEach(neighbour => {
                if(!visited[neighbour]) return DFS(neighbour)
            });
        })(v);
        return result;
    }

    iterativeDFS(v){
        let stack = [v], result = [], visited = {},currentVertex;
        while(stack.length){
            currentVertex = stack.pop();
            visited[currentVertex] = true;
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }

    BFS(v){
        let queue = [v], visited = {}, result = [], currentVertex;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            visited[currentVertex] = true;
            this.adjacencyList[currentVertex].forEach(neighbour =>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.BFS("A"));