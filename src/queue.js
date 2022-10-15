const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.enter = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.reverse()
    return this.enter
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const node = new ListNode(value)
    if(this.root === null) this.enter = node
    node.next = this.enter;
    this.enter = node;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let a;
    if(this.enter.next === null){
      a = this.enter.value;
      this.enter = null;
      return a;
    }else{
      let node = this.enter;
      while(node.next.next !== null){
        node = node.next;
      }
      a = node.next.value;
      node.next = null;
      return a;
    }
  }

  reverse(){
  let currNode = this.enter;
  let prevNode = null;
  let nextNode = null;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  this.enter = prevNode;
  return this
}
}



module.exports = {
  Queue
};
