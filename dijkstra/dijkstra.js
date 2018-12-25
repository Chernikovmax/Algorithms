class Graph {
  constructor(arr) {
    this.graph = arr;
    this.visited = {};
    this.neededToVisit = arr.length;
    this.notVisited = {};
    this._createNotVisitedList();
  }

  dijkstraAlg(start, end) {
    delete this.notVisited[start];
    this.visited[start] = 0;
    this.neededToVisit--;
    this._findCostOfNearPeaks(start);
  }

  _createNotVisitedList() {
    for (let i = 0; i < this.graph.length; i++) {
      // Here, each peak is assigned a cost.
      this.notVisited[i] = Number.POSITIVE_INFINITY;
    }
    return;
  }
  _findCostOfNearPeaks(currentPeak) {
    if (this.neededToVisit === 0) return;
    let currentPeakRibs = this.graph[currentPeak];
    let lowestCost = Number.POSITIVE_INFINITY, lowestCostPeakKey;
    for (let i = 0; i < currentPeakRibs.length; i++) {
      if ((i in this.visited) != true && currentPeakRibs[i] > 0 &&
      (currentPeakRibs[i] + this.visited[currentPeak]) < this.notVisited[i]) {
        // this.indexesOfNear.push(i);
        this.notVisited[i] = currentPeakRibs[i] + this.visited[currentPeak];
        console.log(`Новая стоимость Вершины: ${i} равна: ${this.notVisited[i]}`);
        if (lowestCost > this.notVisited[i]) {
          lowestCost = this.notVisited[i];
          lowestCostPeakKey = i;
        }
      }
    }
    console.log(`Следующая вешина: ${lowestCostPeakKey}, с со стоимостью: ${lowestCost}`);
    this.visited[lowestCostPeakKey] = lowestCost;
    delete this.notVisited[lowestCostPeakKey];
    this.neededToVisit--;

    if (lowestCost)

    this._findCostOfNearPeaks(lowestCostPeakKey);
  }
}

// const notOrientedGraph = new Graph([[0, 1, 1], [1, 0, 0], [1, 0, 0]]);
const graph = new Graph([[0, 4, 3, 0, 7, 0, 0], [4, 0, 6, 5, 0, 0, 0], [3, 6, 0, 11, 8, 0, 0], [0, 5, 11, 0, 2, 2, 10], [7, 0, 8, 2, 0, 0, 5], [0, 0, 0, 2, 0, 0, 3], [0, 0, 0, 10, 5, 3, 0]]);


console.log(graph.dijkstraAlg(0, 5));
