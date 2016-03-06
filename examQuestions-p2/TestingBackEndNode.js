/**
 * Created by Rune on 06-03-2016.
 */
// relevant packeges mocha chai nock

//tempoary eksampel
// test part

var expect = require("chai").expect;

var calculator = require("../module");

describe("Test calc", function(){
    it("should return 4",function(){
        expect(calculator(2,2)).to.be.equal(4);
    })
    it("should return 10",function(done){
        adder.addAsync(5,5, function(res){
            expect(res).to.be.equal(10);
            done();
        })
    })
});

// module part

function add(n1,n2){
    return n1+n2;
}

function addAsync(n1,n2,callback){
    setTimeout(function(){
        var result = n1 + n2;
        callback(result);

    },1000)
}
var res = addAsync(3,3,function(res){
    console.log("Result: " + res)
});
console.log(res);
//console.log(add(2,2));

module.exports.add = add;
module.exports.addAsync = addAsync;


