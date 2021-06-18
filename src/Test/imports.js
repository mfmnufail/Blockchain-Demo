
// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';
 

var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var bigInt = require("big-integer");
var crypto = require("crypto");
var eccrypto = require("eccrypto");
var SHA256 = require("crypto-js/sha256");


  // var keypair = ec.genKeyPair();
  // const hashDigest = sha256(125645 + "message");
  // const hmacDigest = Base64.stringify(hmacSHA512('path' + hashDigest, keypair.getPrivate()));

  <p>
          {/* {(bigInt(keypair.getPrivate(),16)).toString()}
          {(eccrypto.generatePrivate()).toString()} */}
          {/* {(CryptoJS.HmacSHA1("Message", "Key")).toString()} */}
          {/* {hmacDigest} */}

          {(SHA256(0+''+''+JSON.stringify("Hi how are"))).toString()}
        </p>
