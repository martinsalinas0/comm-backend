const mocha = require('mocha')
const chai = require('chai'); 
<<<<<<< HEAD:test/server-test.js
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
})
=======



>>>>>>> 7bba864db2d3687ec192207e734a1d8c03ff48d6:test/server.test.js
