const textElement = document.getElementById('text-type');
const texts = [
    "O caminho para o sucesso começa com um corte impecável!",
    "Clique abeixo e garanta seu horário!"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; 
        setTimeout(typeWriter, 1); 
    } else {
        setTimeout(typeWriter, 50);
    }
}

typeWriter();
