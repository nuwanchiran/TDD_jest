module.exports.getCustomerSync = function (id) {
  return { id, points: 11 }
}

module.exports.getCustomer = async function (id) {
  return new Promise((resolve, reject) => {
    resolve({ id, points: 11 })
  })
}