// 페이지 전환 제어
const buttons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.page;

        pages.forEach(page => {
            page.classList.remove("active");
        });

        document.getElementById(target).classList.add("active");

        // SKILL 페이지 진입 시 바 애니메이션 실행
        if (target === "page4") {
            animateSkills();
        }
    });
});

// 스킬 바 애니메이션
function animateSkills() {
    const fills = document.querySelectorAll(".fill");

    fills.forEach(fill => {
        const value = fill.dataset.skill;
        fill.style.width = value + "%";
    });
}
