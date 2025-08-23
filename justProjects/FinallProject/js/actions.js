function sendMessage() {
    const emailTo = 'egormasterm@gmail.com';

    const emailFrom = document.getElementById('email').value;

    const name = document.getElementById('name').value;
    const text = document.getElementById('message-text').value;

    const subject = "Message From " + emailFrom;
    const body = text + "\n\nAnswer on Email: " + emailFrom

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
}

function filterContent(category) {
    let items = document.querySelectorAll('.blog');

    items.forEach((item) => {
        if (category === "all") {
            item.style.display = "flex";
        } else if (item.classList.contains(category)) {
            item.style.display = "flex";
            document.getElementById('category').textContent = "Category: " + category;
            document.getElementById('category').style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
}

filterContent('all');