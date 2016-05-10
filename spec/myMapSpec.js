/* This is the test file for myMap function
 *    PLEASE DO NOT EDIT THIS FILE
 * To run these tests do `mocha spec/test-myMap.js`
*/

var mocha = require('mocha');
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

var expect = chai.expect;
chai.config.includeStack = false; // turn off stack trace
chai.config.showDiff = true; // turn on reporter diff display

var myMap = require('../myMap');

describe('myMap', function() {
  // sample data
  beforeEach(function() {
    testArr = ['a', 'b', 'c', 'd'];
  });

   it("takes a function as the second argument and calls that function (callback)", function testCallback() {
  //   function spyOnMe() {}
  //   var spy = chai.spy(spyOnMe);
  //   myMap(testArr, spy);
  //   expect(spy).to.have.been.called();
  // });
  //
  // it("passes each value in the array to the callback", function testEachItem(){
  //   var resultingArray = [];
  //   myMap(testArr, function(item) {
  //     resultingArray.push(item);
  //   });
  //   // compare elements in the result to expected array
  //   console.log('       results: ', resultingArray);
  //   expect(resultingArray).to.have.members(['a', 'b', 'c', 'd']);
  // });
  //
  //
  // it("passes each index in the array to the callback as argument 2", function testEachIndex() {
  //   var resultingArray = [];
  //   myMap(testArr, function(_item, index) {
  //     resultingArray.push(index);
  //   });
  //   // compare elements in the result to expected array
  //   console.log('       results: ', resultingArray);
  //   expect(resultingArray).to.have.members([0, 1, 2, 3]);
  // });
  //
  //
  // it("passes the entire array to the callback as the 3rd argument", function testArrayPassing() {
  //   var resultingArray = [];
  //   myMap(testArr, function(_item, _index, arr) {
  //     console.log('       results: ', arr);
  //     // each time the callback is called verify that the array is as expected
  //     // Note: until the callback is called though, this test will still pass
  //     expect(arr).to.have.members(['a', 'b', 'c', 'd']);
  //   });
  // });
  //
  // it("returns an array", function() {
  //   var results = myMap(testArr, function() {
  //     // no-op
  //   });
  //   console.log('       results: ', results);
  //   expect(results).to.be.an('Array');
  // });
  //
  // it("returns an array with the same number of elements", function() {
  //   var results = myMap(testArr, function(){});
  //   console.log('       results: ', results);
  //   expect(results.length).to.equal(testArr.length);
  // });
  //
  // it("returns an array constructed from the return values of the callback", function() {
  //   var results = myMap(testArr, function(){
  //     return 999;
  //   });
  //   console.log('       results: ', results);
  //   expect(results).to.have.members([999, 999, 999, 999]);
  // });
  //
  //
  // // edge cases
  // it("doesn't alter the original array", function testAlterations() {
  //   var resultingArray = [];
  //   myMap(testArr, function(_item, _index, _arr) {
  //     resultingArray.push('nothing');
  //   });
  //   // compare elements in the result to expected array
  //   console.log('       results: ', testArr);
  //   expect(testArr).to.have.members(['a', 'b', 'c', 'd']);
  // });
  //
  //
  // it("works with arrays of length 0", function testArrayL0() {
  //   var resultingArray = [];
  //   myMap([], function(item) {
  //     resultingArray.push(item);
  //   });
  //   // compare elements in the result to expected array
  //   console.log('       results: ', resultingArray);
  //   expect(resultingArray.length).to.equal(0);
  // });
  //
  //
  // it("works with arrays of length 1", function testArrayL1() {
  //   var resultingArray = [];
  //   myMap([13], function(item) {
  //     resultingArray.push(item);
  //   });
  //   // compare elements in the result to expected array
  //   console.log('       results: ', resultingArray);
  //   expect(resultingArray.length).to.equal(1);
  // });

});
