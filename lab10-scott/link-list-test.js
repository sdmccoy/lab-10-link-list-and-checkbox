'use strict';

const LinkList = require('./link-list.js');
const expect = require('expect');

describe('Testing LINK LIST', () => {
  describe('Testing the constructor LinkList', () => {
    it('it should create a new node', () => {
      let node = new LinkList(1);
      expect(node.value).toEqual(1);
      expect(node.next).toEqual(null);
    });
  });
  describe('Testing the appendNode method', () => {
    describe('if successful', () =>{
      it('it should append a new node to the end of the chain', () =>{
        let node = new LinkList(1);
        let secondNode = new LinkList(2);
        LinkList.appendNode(secondNode);
        expect(secondNode.value).toEqual(2);
        expect(secondNode.next).toEqual(null);
        expect(node.next).toEqual(secondNode);
      });
    });
    describe('if passing through a no value/node', ()=>{
      it('it should not append a new node', () =>{
        let node = new LinkList(1);
        let secondNode = new LinkList();
        LinkList.appendNode(secondNode);
        expect(secondNode).toNotExist();
        expect(node.next).toEqual(null);
      });
    });
    describe('if passing through a non node value', () => {
      it('it should not append a new node', () =>{
        let node = new LinkList(1);
        let secondNode = new LinkList('notanode');
        LinkList.appendNode(secondNode);
        expect(secondNode).toNotExist();
        expect(node.next).toEqual(null);
      });
    });
  });
});
