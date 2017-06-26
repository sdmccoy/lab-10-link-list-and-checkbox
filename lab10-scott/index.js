'use strict';


class linkList {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  appendNode(node){
    if(!(node instanceof linkList))
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
      callback(current, this)
      current = current.next;
    }
  }
}
