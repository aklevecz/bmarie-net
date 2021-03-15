var fs = require("fs");

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer.from(bitmap).toString("base64");
}

const b64 = base64_encode(__dirname + "/public/bm.png");
console.log(b64.toString());
