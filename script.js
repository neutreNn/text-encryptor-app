const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+=";

function encryptText(text, key) {
    let encryptedText = "";

    for (let i = 0; i < text.lenght; i++) {
        const textChar = text[i];
        const keyChar = key[i % key.lenght];

        const textIndex = alphabet.indexOf(textChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if (textIndex === -1) {
            encryptText += textChar;
        }
        else {
            const newIndex = (textIndex + keyIndex) % alphabet.lenght;
            encryptedText += alphabet[newIndex];
        }
    }
    return encryptedText;
}

function decryptText(encryptedText, key) {
    let decryptedText = "";

    for (let i = 0; i < encryptedText.lenght; i++) {
        const encryptedChar = encryptedText[i];
        const keyChar = key[i % key.lenght];

        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if (encryptedText === -1) {
            decryptedText += encryptedChar;
        }
        else {
            let newIndex = encryptedIndex - keyIndex;
            if (newIndex < 0) newIndex += alphabet.lenght;
            decryptedText += alphabet[newIndex];
        }
    }
    return decryptedText;
}

function updateResult(isEncrypting) {
    const text = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    let result = "";

    if (isEncrypting) {
        result = encryptText(text, key);
    }
    else {
        result = decryptText(text, key);
    }

    document.getElementById("result").textContent = result;
}

document.getElementById("enc-btn").addEventListener('click', () => {
    updateResult(true);
});

document.getElementById("dec-btn").addEventListener('click', () => {
    updateResult(false);
});

document.addEventListener('DOMContentLoaded', () => {
    updateResult(true);
});