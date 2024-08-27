function encryptMessage() {
  let messageToEncrypt = document.getElementById("encript").value;
  const forbiddenCharacters = /[^a-z\s]+/gm;
  let showMessage = document.getElementById("show-message-text");
  const encryptedMessage = [];

  removeNonValidAlert();

  if (forbiddenCharacters.test(messageToEncrypt)) {
    addNonValidAlert();
  } else {
    for (let i = 0; i < messageToEncrypt.length; i++) {
      switch (messageToEncrypt[i]) {
        case "a":
          encryptedMessage.push("ai");
          break;
        case "e":
          encryptedMessage.push("enter");
          break;
        case "i":
          encryptedMessage.push("imes");
          break;
        case "o":
          encryptedMessage.push("ober");
          break;
        case "u":
          encryptedMessage.push("ufat");
          break;
        default:
          encryptedMessage.push(messageToEncrypt[i]);
      }
    }
  }

  showMessage.innerHTML = encryptedMessage.join("");
}

function decryptMessage() {
  let messageToDecrypt = document.getElementById("encript").value;
  const forbiddenCharacters = /[^a-z\s]+/gm;
  const expressionsToDecrypt = /ai|enter|imes|ober|ufat|[bcdfghjklmnpqrstvwxyz\s]/gm;
  const words = messageToDecrypt.match(expressionsToDecrypt) || [];
  let showMessage = document.getElementById("show-message-text");
  const decryptedMessage = [];

  removeNonValidAlert();

  if (forbiddenCharacters.test(messageToDecrypt)) {
    addNonValidAlert();
  } else {
    for (let i = 0; i < words.length; i++) {
      switch (words[i]) {
        case "ai":
          decryptedMessage.push("a");
          break;
        case "enter":
          decryptedMessage.push("e");
          break;
        case "imes":
          decryptedMessage.push("i");
          break;
        case "ober":
          decryptedMessage.push("o");
          break;
        case "ufat":
          decryptedMessage.push("u");
          break;
        default:
          decryptedMessage.push(words[i]);
          break;
      }
    }
  }

  showMessage.innerHTML = decryptedMessage.join("");
}

function clearContent() {
  let enterMessage = document.getElementById("encript");
  let showMessage = document.getElementById("show-message-text");

  enterMessage.value = "";
  showMessage.innerHTML = "";
}

function addNonValidAlert() {
  // Aquí puedes añadir lógica para mostrar alertas si es necesario
}

function removeNonValidAlert() {
  // Aquí puedes añadir lógica para ocultar alertas si es necesario
}