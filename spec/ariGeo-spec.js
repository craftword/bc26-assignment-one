import  aritGeo from '../ariGeo/ariGeo'
import  chai from 'chai'

const should = chai.should()

describe("Case for an empty array", () => {

    it("should return 0 for an empty array", () => {
            aritGeo([]).should.eql(0);
        });

 });

 describe("Case for an arithmetic sequence", ()=> {

    it("should return `Arithmetic` for [2, 4, 6, 8, 10]", () => {
        aritGeo([2, 4, 6, 8, 10]).should.be.equal('Arithmetic');
        });

    it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", () => {
        aritGeo([5, 11, 17, 23, 29, 35, 41]).should.be.equal('Arithmetic');
    });

    it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", () => {
        aritGeo([15, 10, 5, 0, -5, -10]).should.be.equal('Arithmetic');
    });

});

describe("Case for a geometric sequence", () => {

it("should return `Geometric` for [2, 6, 18, 54, 162]", () => {
    aritGeo([2, 6, 18, 54, 162]).should.be.equal('Geometric');
      });

it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", () => {
    aritGeo([0.5, 3.5, 24.5, 171.5]).should.be.equal('Geometric');
      });

it("should return `Geometric` for [−128, 64, −32, 16, −8]", () => {
    aritGeo([-128, 64, -32, 16, -8]).should.be.equal('Geometric');
      });

    });
