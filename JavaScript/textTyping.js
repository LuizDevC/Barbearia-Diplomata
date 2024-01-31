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


const textServices = document.getElementById('text-services');
const textServicesTw = [
    "Não perca tempo!",
    "Garanta seu horário agora!"
];
let textIndexServices = 0;
let charIndexServices = 0;
let DeletingServices = false;

function typeWriter() {
    const currentText = textServicesTw[textIndexServices];

    if (DeletingServices) {
        textServices.textContent = currentText.substring(0, charIndexServices - 1);
        charIndexServices--;
    } else {
        textServices.textContent = currentText.substring(0, charIndexServices + 1);
        charIndexServices++;
    }

    if (!DeletingServices && charIndexServices === currentText.length) {
        DeletingServices = true;
        setTimeout(typeWriter, 2000);
    } else if (DeletingServices && charIndexServices === 0) {
        DeletingServices = false;
        textIndexServices = (textIndexServices + 1) % textServicesTw.length; 
        setTimeout(typeWriter, 1); 
    } else {
        setTimeout(typeWriter, 50);
    }
}

typeWriter();
