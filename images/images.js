/*
    REQUERIMIENTOS
require("fs");

RETORNA 

TRUE - FALSE
*/
const fs = require("fs");

function getImage(tempFile, nameFile, imageFolderRoute) {
  let date = new Date()
    .toISOString()
    .replace("T", "-")
    .replace(":", "-")
    .substring(0, 16);
  fs.rename(tempFile, imageFolderRoute + date + nameFile, (err) => {
    if (err) return false;
    
  });
  return true;
}

module.exports = {getImage}