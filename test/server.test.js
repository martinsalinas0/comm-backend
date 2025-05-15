const mocha = require('mocha')
const chai = require('chai'); 
const expect = require('chai').expect; 


describe('GET all products api', () => { 
  it('should return all products in database', (done) => { 
    chai
    .request(server)
    .get('/api/products')
    .end((err, res) => { 
      res.should.have.status(200); 
      res.should.be.an('object'); 
      res.should.have.proprty('products'); 
      res.body.products.should.be.an('opbject'); 
      done()
    })
  })
}); 
