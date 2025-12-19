const video = document.getElementById("myVideo");
const controlBtn = document.getElementById("video-control");

controlBtn.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        controlBtn.classList.add("is-playing"); // Để bạn ẩn nút đi bằng CSS nếu muốn
        console.log("Video đang phát");
    } else {
        video.pause();
        controlBtn.classList.remove("is-playing");
        console.log("Video đã dừng");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".speciality__card");
    const dots = document.querySelectorAll(".speciality__pagination .dot");

    // Cấu hình trình quan sát: Khi 50% diện tích card hiện diện
    const observerOptions = {
        root: null, // Sử dụng viewport làm khung nhìn
        threshold: 0.5, // 50% phần tử xuất hiện thì kích hoạt
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 1. Tìm chỉ số (index) của card đang hiện diện
                const index = Array.from(cards).indexOf(entry.target);

                // 2. Xóa class active ở tất cả các dots
                dots.forEach((dot) =>
                    dot.classList.remove("pagination__active")
                );

                // 3. Thêm class active vào dot tương ứng
                if (dots[index]) {
                    dots[index].classList.add("pagination__active");
                }
            }
        });
    }, observerOptions);

    // Bắt đầu quan sát từng card
    cards.forEach((card) => observer.observe(card));

    // Thêm tính năng: Click vào dot để cuộn đến card đó
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            cards[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".atmosphere__column");
    const dots = document.querySelectorAll(".atmosphere__pagination .dot");

    // Cấu hình trình quan sát: Khi 50% diện tích card hiện diện
    const observerOptions = {
        root: null, // Sử dụng viewport làm khung nhìn
        threshold: 0.5, // 50% phần tử xuất hiện thì kích hoạt
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 1. Tìm chỉ số (index) của card đang hiện diện
                const index = Array.from(cards).indexOf(entry.target);

                // 2. Xóa class active ở tất cả các dots
                dots.forEach((dot) =>
                    dot.classList.remove("pagination__active")
                );

                // 3. Thêm class active vào dot tương ứng
                if (dots[index]) {
                    dots[index].classList.add("pagination__active");
                }
            }
        });
    }, observerOptions);

    // Bắt đầu quan sát từng card
    cards.forEach((card) => observer.observe(card));

    // Thêm tính năng: Click vào dot để cuộn đến card đó
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            cards[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".evaluate__content");
    const dots = document.querySelectorAll(".evaluate__pagination .dot");

    // Cấu hình trình quan sát: Khi 50% diện tích card hiện diện
    const observerOptions = {
        root: null, // Sử dụng viewport làm khung nhìn
        threshold: 0.5, // 50% phần tử xuất hiện thì kích hoạt
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 1. Tìm chỉ số (index) của card đang hiện diện
                const index = Array.from(cards).indexOf(entry.target);

                // 2. Xóa class active ở tất cả các dots
                dots.forEach((dot) =>
                    dot.classList.remove("pagination__active")
                );

                // 3. Thêm class active vào dot tương ứng
                if (dots[index]) {
                    dots[index].classList.add("pagination__active");
                }
            }
        });
    }, observerOptions);

    // Bắt đầu quan sát từng card
    cards.forEach((card) => observer.observe(card));

    // Thêm tính năng: Click vào dot để cuộn đến card đó
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            cards[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        });
    });
});
