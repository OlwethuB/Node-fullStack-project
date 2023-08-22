const chai = require('chai');
const expect = chai.expect;
// Import the modules/functions from your API implementation
// const products = require('../model/productModel');
const { products } = require('../model/model');
// Describe the test suite
describe('API Tests', () => {
  // Describe a specific test case
  it('show the database info', () => {
    const products = products(products);
    expect(products).to.deep.equal({ id: 1, name: 'John' });
  });
  // Add more test cases as needed
});