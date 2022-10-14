const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(itemdata) {
    this.data = itemdata;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.start = null;
    this.minim = 0;
    this.maxim = 0;
    this.finded;
    this.hasIt = false;
  }

  root() {
    return this.start;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.start === null) {
      this.start = newNode;
      return;
    }
    

    this.addItem(this.start, newNode);
  }

  addItem(currentItem, newItem){
    if (newItem.data < currentItem.data){
      if (currentItem.left === null) {
        currentItem.left = newItem;
      } else {
        this.addItem(currentItem.left, newItem);
      }
    }
    if (newItem.data > currentItem.data) {
      if (currentItem.right === null) {
        currentItem.right = newItem;
      } else {
        this.addItem(currentItem.right, newItem);
      }
    }
    if (newItem.data === currentItem.data) {
      console.warn('Element is Already exist');
    }
  }

  has(data) {
    console.log(this.start);
    if(this.start === null) return false;
    this.hasItem(this.start, data);
    return this.hasIt;
  }

  hasItem(currItem, data){
    if(data < currItem.data){
      if (currItem.left === null) {
        this.hasIt = false
        return false;
      } else {
        this.hasItem(currItem.left, data);
      }
    }
    if (data > currItem.data) {
      if (currItem.right === null) {
        this.hasIt = false;
        return false;
      } else {
        this.hasItem(currItem.right, data);
      }
    }
    if (data === currItem.data) {
      this.hasIt = true;
      return true;
    }
  }

  find(data) {
    if(this.start === null) return null;
    this.findItem(this.start, data);
    return this.finded;
  }

  findItem(currItem, data){
    if(data < currItem.data){
      if (currItem.left === null) {
        this.finded = null;
        return null;
      } else {
        this.findItem(currItem.left, data);
      }
    }
    if (data > currItem.data) {
      if (currItem.right === null) {
        this.finded = null;
        return null;
      } else {
        this.findItem(currItem.right, data);
      }
    }
    if (data === currItem.data) {
      this.finded = currItem;
      return currItem;
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(this.start === null) return null;
    console.log('5we ' + this.minItem(this.start));
    this.minItem(this.start);
    return this.minim
  }

  minItem(item) {
    if (item.left === null) {
      console.log(item.data);
      this.minim = item.data;
      return item.data
    }
    this.minItem(item.left)
  }

  max() {
    if(this.start === null) return null;
    this.maxItem(this.start);
    return this.maxim;
  }

  maxItem(item){
    if(item.right === null){ 
      this.maxim = item.data;
      return item.data;
    }
    this.maxItem(item.right);
  }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree.find(8).data);

module.exports = {
  BinarySearchTree
};