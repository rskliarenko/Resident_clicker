export const domHandler = {
    app: document.getElementById('container'),
    registerHtmlEl: (nameEl) => {
        domHandler[nameEl] = document.getElementById(nameEl);
    },
    setTextContent: (nameEl, textContent) => {
        domHandler[nameEl].textContent = textContent;
    },
    insertImage: (nameEl, image) => {
        domHandler[nameEl].innerHTML = `<img src='${image}' alt='${image}' />`;
    },
    updateProgressBar: (nameEl, value) => {
        domHandler[nameEl].value = value;
    }
}
