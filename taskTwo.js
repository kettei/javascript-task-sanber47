const productData = require('./taskTwo.data');

let productBin = productData
  
  function getTotalQuantity(productBin, productCode) {
    let totalQuantity = 0;
    
    for (const item of productBin.data) {
      if (item.productCode === productCode) {
        totalQuantity += item.quantity;
      }
    }
    
    return totalQuantity;
  }
  
  const productCodeToCheck = "FBR00040101";
  const totalQuantity = getTotalQuantity(productBin, productCodeToCheck);
  
  console.log(`Total quantity for productCode ${productCodeToCheck}: ${totalQuantity}`);
  