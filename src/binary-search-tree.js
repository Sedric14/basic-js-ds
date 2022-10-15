const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


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

  remove(data, item = this.start) {
    if (item.data > data) {
      item.left = this.remove(data, item.left);
    } else if (item.data < data) {
      item.right = this.remove(data, item.right);
    } else {
      if (item.left === null && item.right === null) {

        item = null;
      } else if (item.left === null) {
        item = item.right;
      } else if (item.right === null) {
        item = item.left;
      } else {
        let prevNode = item.left;
        while (prevNode.right) {
          prevNode = prevNode.right;
        }
        item.data = prevNode.data;
        item.left = this.remove(prevNode.data, item.left);
      }
    }
    return item;
  }

  min() {
    if(this.start === null) return null;
    // console.log('5we ' + this.minItem(this.start));
    this.minItem(this.start);
    return this.minim
  }

  minItem(item) {
    if (item.left === null) {
      // console.log(item.data);
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

module.exports = {
  BinarySearchTree
};