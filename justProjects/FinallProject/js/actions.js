function sendMessage() {
    const emailTo = 'egormasterm@gmail.com';

    const emailFrom = document.getElementById('email').value;

    const name = document.getElementById('name').value;
    const text = document.getElementById('message-text').value;

    const subject = "Message From " + emailFrom;
    const body = text + "\n\nAnswer on Email: " + emailFrom

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
}


const menuBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
});

const allowedDomains = [
    "@gmail.com",
    "@yahoo.com",
    "@outlook.com",
    "@hotmail.com",
    "@mail.ru",
    "@yandex.ru",
    "@rambler.ru",
    "@bk.ru",
    "@inbox.ru",
    "@list.ru",
    "@icloud.com",
    "@me.com",
    "@aol.com"
];

function checkEmail(emailByUser) {
    if (allowedDomains.some(domain => emailByUser.value.endsWith(domain))) {
        return true;
    } else {
        return false
    }
}

function getUsrData() {
    let pole = document.getElementById('email-getter');
    if (checkEmail(pole)) {
        usr_gmail = pole.value;
        pole.value = "";
        alert(`We will send you newest mails to ${usr_gmail}`);
    } else {
        alert("Your email address is invalid or not supported by us.");
    }
}

function publicateComment() {
    alert("Sorry this function is not available now.");
}

document.getElementById('submit').addEventListener('click', publicateComment);