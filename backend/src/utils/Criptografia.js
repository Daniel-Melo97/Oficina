const crypto = require("crypto");

const DADOS_CRIPTOGRAFAR = {
    algoritm : "aes256",
    secret : '12345678123456881234567812345678',
    type : "hex",
    iv: Buffer.from('a1a3e5f106cb8ecde808915e5a05dc37',"hex")
};

module.exports = {
    criptografar(senha) {
        const cipher = crypto.createCipheriv(DADOS_CRIPTOGRAFAR.algoritm, DADOS_CRIPTOGRAFAR.secret, DADOS_CRIPTOGRAFAR.iv);
        cipher.update(senha);
        return cipher.final(DADOS_CRIPTOGRAFAR.type);
    },
    descriptografar(senha){
        const decipher = crypto.createDecipheriv(DADOS_CRIPTOGRAFAR.algoritm, DADOS_CRIPTOGRAFAR.secret, DADOS_CRIPTOGRAFAR.iv);
        decipher.update(senha, DADOS_CRIPTOGRAFAR.type);
        return decipher.final().toString();
    }
}


