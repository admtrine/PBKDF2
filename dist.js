window.crypto.subtle.deriveKey(
    {
        "name": "PBKDF2",
        salt: window.crypto.getRandomValues(new Uint8Array(16)),
        iterations: 1000,
        hash: {name: "SHA-1"}, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
    },
    key, //your key from generateKey or importKey
    { //the key type you want to create based on the derived bits
        name: "AES-CTR", //can be any AES algorithm ("AES-CTR", "AES-CBC", "AES-CMAC", "AES-GCM", "AES-CFB", "AES-KW", "ECDH", "DH", or "HMAC")
        //the generateKey parameters for that type of algorithm
        length: 256, //can be  128, 192, or 256
    },
    false, //whether the derived key is extractable (i.e. can be used in exportKey)
    ["encrypt", "decrypt"] //limited to the options in that algorithm's importKey
)
.then(function(key){
    //returns the derived key
    console.log(key);
})
.catch(function(err){
    console.error(err);
});
