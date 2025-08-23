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