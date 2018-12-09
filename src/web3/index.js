const { web3 } = require('web3-api-wrap');
const abi = require('./abi.json');

module.exports = {
  web3,
  abi,
  hashedgeFactory: web3.loadContract(abi.hashedgeFactory, '0x345ca3e014aaf5dca488057592ee47305d9b3e10')
};