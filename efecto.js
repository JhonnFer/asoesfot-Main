// Script para efecto de escritura
const typewriter = (text, elementId, speed) => {
    const element = document.getElementById(elementId);
    let index = 0;

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };

    type();
};


