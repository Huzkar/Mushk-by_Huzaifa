

function setupScrollButtons(listId, leftBtnClass, rightBtnClass) {
    const list = document.getElementById(listId);
    const leftBtn = document.querySelector(leftBtnClass);
    const rightBtn = document.querySelector(rightBtnClass);

    function toggleButtons() {
        if (window.innerWidth <= 768) {
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
            return;
        }

        // Right button: show if there's overflow on right
        const canScrollRight = list.scrollWidth > list.clientWidth + list.scrollLeft;
        rightBtn.style.display = canScrollRight ? 'block' : 'none';

        // Left button: show if scrolled away from start
        leftBtn.style.display = list.scrollLeft > 0 ? 'block' : 'none';
    }

    leftBtn.addEventListener('click', () => {
        list.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        list.scrollBy({ left: 300, behavior: 'smooth' });
    });

    list.addEventListener('scroll', toggleButtons);
    window.addEventListener('resize', toggleButtons);

    // Delay execution to ensure DOM is fully loaded
    setTimeout(toggleButtons, 200);
}

// Setup scroll buttons for both product sections
setupScrollButtons('premiumList', '.scroll-button.left.premium', '.scroll-button.right.premium');
setupScrollButtons('goodList', '.scroll-button.left.good', '.scroll-button.right.good');

// Mobile "View More" button logic
document.querySelectorAll('.view-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const listId = btn.dataset.target;
        const productList = document.getElementById(listId);
        productList.classList.remove('hidden');
        btn.style.display = 'none';
    });
});

// Hide extra items on mobile initially
function applyMobileHiddenClass() {
    const premiumList = document.getElementById('premiumList');
    const goodList = document.getElementById('goodList');

    if (window.innerWidth <= 768) {
        premiumList.classList.add('hidden');
        goodList.classList.add('hidden');
    } else {
        premiumList.classList.remove('hidden');
        goodList.classList.remove('hidden');
    }
}
applyMobileHiddenClass();
window.addEventListener('resize', applyMobileHiddenClass);
