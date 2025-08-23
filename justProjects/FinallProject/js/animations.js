document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.little-notice, .header, .separator, #first-crop, #second-crop, #third-crop');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.1});

boxes.forEach(box => observer.observe(box));
});

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const boxes = document.querySelectorAll('.little-notice, .header, .separator, #first-crop, #second-crop, #third-crop, #fp, #hp, #da, #yii');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.classList.contains('visible')) {
            entry.target.classList.remove('visible');
        }
    });
    observer.disconnect();
    }, {threshold: 0.1});

    boxes.forEach(box => observer.observe(box));

document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const currentItem = header.parentElement;
        const content = header.nextElementSibling;
        const symbol = header.querySelector(".symbol");

        document.querySelectorAll(".accordion-item").forEach(item => {
            const otherHeader = item.querySelector(".accordion-header");
            const otherContent = item.querySelector(".accordion-content");
            const otherSymbol = item.querySelector(".symbol");

            if (item !== currentItem) {
                otherHeader.classList.remove("active");
                otherContent.classList.remove("show");
                otherSymbol.textContent = "+";
            }
        });

        if (header.classList.contains("active")) {
            header.classList.remove("active");
            content.classList.remove("show");
            symbol.classList.add("unactive");
            symbol.classList.remove("active");
            symbol.textContent = "+";
        } else {
            header.classList.add("active");
            content.classList.add("show");
            symbol.classList.add("active")
            symbol.classList.remove("unactive");
            symbol.textContent = "–";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('#fp, #hp, #da, #yii');

    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
                entry.target.classList.add("visible");

                if (entry.target.id === "fp") animateValue(entry.target, 0, 358, 2000);
                if (entry.target.id === "hp") animateValue(entry.target, 0, 724, 2000);
                if (entry.target.id === "da") animateValue(entry.target, 0, 28, 2000);
                if (entry.target.id === "yii") animateValue(entry.target, 0, 18, 2000);
            }
        });
    }, { threshold: 0.2 });

    boxes.forEach(box => observer.observe(box));
});