class Graph {
  constructor(arr) {
    this.graph = arr;
    this.visited = {};
    this.routes = {};
    this.lowCostList = {};
    this.neededToVisit = arr.length;
    this.notVisited = {};
    this.startPeak;
    this.endPeak;
    this._createLists();
  }

  dijkstraAlg(start, end) {
    this.startPeak = start;
    this.endPeak = end;
    delete this.notVisited[start];
    this.visited[start] = 0;
    this.neededToVisit--;
    this._findCostOfNearPeaks(start);

    if (this.neededToVisit === 0) {
      return this.visited[end]
    } else this._loopThroughTheRest();
    // HERE THIS PLACE!
  }

  _createLists() {
    for (let i = 0; i < this.graph.length; i++) {
      // Here, each peak is assigned a cost.
      this.notVisited[i] = Number.POSITIVE_INFINITY;
      this.routes[i] = 0;
    }
    return;
  }

  _findCostOfNearPeaks(currentPeak) {
    console.log("И начался опять _findCostOfNearPeaks(currentPeak)");
    let currentPeakRibs = this.graph[currentPeak];
    let lowestCost = Number.POSITIVE_INFINITY, lowestCostPeakKey;
    if (JSON.stringify(this.lowCostList) === "{}") {
      for (let i = 0; i < currentPeakRibs.length; i++) {
        if ((i in this.visited) != true && currentPeakRibs[i] > 0 &&
        (currentPeakRibs[i] + this.visited[currentPeak]) < this.notVisited[i]) {

          this.notVisited[i] = currentPeakRibs[i] + this.visited[currentPeak];
          this.routes[i] = parseInt(currentPeak, 10);
          console.log(`1 New cost of peak: ${i} is: ${this.notVisited[i]}`);
          this.lowCostList[i] = this.notVisited[i];
          if (lowestCost > this.notVisited[i]) {
            lowestCost = this.notVisited[i];
            lowestCostPeakKey = i;
          }
        }
      }
    }
    if (JSON.stringify(this.lowCostList) !== "{}") {
      lowestCost = Number.POSITIVE_INFINITY;
      lowestCostPeakKey = undefined;
      for (let key in this.lowCostList) {
        if (lowestCost > this.lowCostList[key]) {
          lowestCost = this.lowCostList[key];
          lowestCostPeakKey = key;
          this.lowCostList[lowestCostPeakKey] = lowestCost;
        }
      }
    }
    if (lowestCostPeakKey !== undefined) {
      this.neededToVisit--;
    } else return;

    console.log(`2 Next peak is ${lowestCostPeakKey}, it's cost is ${lowestCost}`);
    this.visited[lowestCostPeakKey] = lowestCost;
    delete this.lowCostList[lowestCostPeakKey];
    delete this.notVisited[lowestCostPeakKey];

    this._nextPeaksCostUpdate(lowestCostPeakKey);
    this._findCostOfNearPeaks(currentPeak);
  }

  _nextPeaksCostUpdate(peak) {
    let currentPeakRibs = this.graph[peak];
    for (let i = 0; i < currentPeakRibs.length; i++) {
      if ((i in this.visited) !== true && currentPeakRibs[i] > 0 &&
      (currentPeakRibs[i] + this.visited[peak]) < this.notVisited[i]) {

        this.notVisited[i] = currentPeakRibs[i] + this.visited[peak];
        this.routes[i] = parseInt(peak, 10);
        if (i in this.lowCostList) this.lowCostList[i] = this.notVisited[i];
        console.log(`3 New cost of peak ${i} is ${this.notVisited[i]}`);
      }
    }
    console.log('ПРОШЁЛ   _nextPeaksCostUpdate(peak)');
  }

  _loopThroughTheRest() {
    console.log("_loopThroughTheRest");
    for (let key in this.notVisited) {
      this.visited[key] = this.notVisited[key];
      delete this.notVisited[this.startPeak];
      this.neededToVisit--;

      if (this.neededToVisit === 0) return this.visited[this.endPeak];
      this._findCostOfNearPeaks(key);
    }
  }
}

const graph1 = new Graph([[0, 1, 1], [1, 0, 0], [1, 0, 0]]);
const graph = new Graph([[0, 4, 3, 0, 7, 0, 0], [4, 0, 6, 5, 0, 0, 0], [3, 6, 0, 11, 8, 0, 0], [0, 5, 11, 0, 2, 2, 10], [7, 0, 8, 2, 0, 0, 5], [0, 0, 0, 2, 0, 0, 3], [0, 0, 0, 10, 5, 3, 0]]);
const graph2 = new Graph([[0, 10, 30, 50, 10], [0, 0, 0, 0, 0], [0, 0, 0, 0, 10], [0, 40, 20, 0, 0], [10, 0, 10, 30, 0]]);

console.log(graph.dijkstraAlg(0, 5));
console.log(graph.visited);
console.log(graph.routes);
