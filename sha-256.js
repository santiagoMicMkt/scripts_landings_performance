const crypto = require('crypto');

function hashSHA256(message) {
    const hash = crypto.createHash('sha256');
    hash.update(message);
    return hash.digest('hex');
}

console.log(hashSHA256('3057239772'));