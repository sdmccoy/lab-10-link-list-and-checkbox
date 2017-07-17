'use strict';

module.exports = class LinkList {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  //BIG O: O(N^2) while loop nested in a for each
  appendNode(node){
    if(!(node instanceof LinkList))
      return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }
  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }
//BIG O: O(log N)
  findMiddle(){
    let slow;
    let fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
//BIG O: O(N)
  traverseReverse(){
    let prev = null;
    let cur = this;
    while (cur) {
      let temp = cur.next;
      //set cur.next to null
      cur.next = prev;
      //set prev to this
      prev = cur;
      //set the current.next stored in temp back to cur.
      cur = temp;
    }
    this.next = prev.next;
  }
};
