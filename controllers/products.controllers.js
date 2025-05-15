const products = require('../mock-data/products.json')


const getAllProducts = (req, res) => { 
  try {
    res.status(200).json({products})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}






module.exports = { getAllProducts}