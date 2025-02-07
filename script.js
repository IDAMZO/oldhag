const messages = [
    "Are you fr?",
    "Like fr fr??",
    "positive like 100%???",
    "bbg please please please :(",
    "Layan don't mess with me!",
    "If you say no, I'll be super duper sad",
    "I'll be very very very very very very upset",
    "I'll be extra very very very very very very very upset",
    "you'll regret this.",
    "Kidding, so pleasee say yes please with a cherry on top! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
