document.getElementById('encrypt-btn').addEventListener('click', function() {
    const text = document.getElementById('input-text').value;
    const encryptedText = encryptText(text);
    displayResult(encryptedText);
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const text = document.getElementById('input-text').value;
    const decryptedText = decryptText(text);
    displayResult(decryptedText);
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-text');
    if (outputText) {
        navigator.clipboard.writeText(outputText.textContent);
    }
});

function encryptText(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function displayResult(result) {
    const outputArea = document.getElementById('output-area');
    const outputText = document.getElementById('output-text');
    const noMessage = document.getElementById('noMessage');

    if (result) {
        noMessage.style.display = 'none';
        outputArea.style.display = "flex";
        outputText.textContent = result; 
    } else {
        outputArea.style.display = 'none'; 
    }
}
