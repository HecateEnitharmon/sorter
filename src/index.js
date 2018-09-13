class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = function(a,b) {return a - b};
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
      var newArr = [];
      indices.sort(function (a, b) { return a - b });
      for (var index = 0; index < indices.length; index++) {
          newArr.push(this.arr[indices[index]]);
      }
      newArr.sort(this.compareFunction);
      for (var ind = 0; ind < indices.length; ind++) {
          this.arr[indices[ind]] = newArr[ind];
      }
  }

  setComparator(compareFunction) {
      this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;