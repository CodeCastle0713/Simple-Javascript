/**
 * Problem: Total count the number of pairs of connected nodes each other in a graph.
 * Used BFS Algorithm. Coded by True Dragon - 12/25/2024
 */

const visited = new Set();
let queue = new Set();
let count = 0;
const graph = {
    1: [2,3],
    2: [1,4,3,5],
    3: [1,5,2],
    4: [2,5],
    5: [3,4,2]
};

// Expected Output : 7
function countConnectedComponents(start) {
    queue.add(start);
    while (queue.size > 0) {
      console.log("Queue : ", queue);

      let array = Array.from(queue);
      const current = array.shift();
      queue.delete(current);

      visited.add(current);
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          queue.add(neighbor);
          count++;
        }
      }
      console.log("Count : ", count);
    }
    return count;
}

console.log(countConnectedComponents(3));