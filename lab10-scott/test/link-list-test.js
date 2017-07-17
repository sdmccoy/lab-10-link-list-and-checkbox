'use strict';

const LinkList = require('../link-list.js');
const expect = require('expect');

describe('Testing LINK LIST', () => {
  describe('Testing the constructor LinkList', () => {
    describe('If passing in a node and successful', () => {
      it('it should create a new node', () => {
        let node = new LinkList(1);
        expect(node.value).toEqual(1);
        expect(node.next).toEqual(null);
      });
    });
    describe('If passing in no node', () => {
      it('it should not create a new node', () => {
        let node = new LinkList();
        expect(node.value).toNotExist();
        expect(node.next).toNotExist();
      });
    });
    describe('If passing in a value that is not a node', () => {
      it('it should not create a new node', () => {
        let notanode;
        let node = new LinkList(notanode);
        expect(node.value).toNotExist();
        expect(node.next).toNotExist();
      });
    });
  });
  describe('Testing the appendNode method', () => {
    describe('if successful', () =>{
      it('it should append a new node to the end of the chain', () =>{
        let node = new LinkList(1);
        let secondNode = new LinkList(2);
        node.appendNode(secondNode);
        expect(secondNode.value).toEqual(2);
        expect(secondNode.next).toEqual(null);
        expect(node.next).toEqual(secondNode);
      });
    });
    describe('if passing through a no value/node', ()=>{
      it('it should not append a new node', () =>{
        let node = new LinkList(1);
        node.appendNode();
        expect(node.value).toEqual(1);
        expect(node.next).toEqual(null);
      });
    });
    describe('if passing through a non node value', () => {
      it('it should not append a new node', () =>{
        let node = new LinkList(1);
        node.appendNode('notanode');
        expect(node.next).toEqual(null);
      });
    });
  });
  describe('Testing the findMiddle method', () => {
    describe('if successful', () =>{
      it('it should find the middle to be 2', () =>{
        let node = new LinkList(1);
        let secondNode = new LinkList(2);
        let thirdNode = new LinkList(3);
        node.appendNode(secondNode);
        node.appendNode(thirdNode);
        let middleNode = node.findMiddle();
        expect(middleNode.value).toEqual(2);
        expect(middleNode.next).toEqual(thirdNode);
      });
    });
    describe('if passing through an even amount of nodes', ()=>{
      it('it should return the node on the left side', () =>{
        let node = new LinkList(1);
        let secondNode = new LinkList(2);
        let thirdNode = new LinkList(3);
        let fourthNode = new LinkList(4);
        node.appendNode(secondNode);
        node.appendNode(thirdNode);
        node.appendNode(fourthNode);
        let middleNode = node.findMiddle();
        expect(middleNode.value).toEqual(2);
        expect(middleNode.next).toEqual(thirdNode);
      });
    });
    describe('if passing through just one node', () => {
      it('it should still find just the one node', () =>{
        let node = new LinkList(1);
        let middleNode = node.findMiddle();
        expect(middleNode.value).toEqual(1);
        expect(middleNode.next).toEqual(null);
      });
    });
  });

  describe('Testing the reverseTraverse method', () => {
    describe('if successful', () =>{
      it('it should travers the list in reverse', () =>{
        let list = new LinkList(1);
        list.appendNode(new LinkList(2));
        list.appendNode(new LinkList(3));
        list.traverseReverse();
        expect(list.value).toEqual(1);
        expect(list.next.value).toEqual(2);
      });
    });
  });
});
