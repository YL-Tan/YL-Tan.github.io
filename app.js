const sections = document.querySelectorAll('.section');
const controls = document.querySelector('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const themeBtn = document.querySelector('.theme-btn');

// Event Delegation
controls.addEventListener('click', function(e){
    const btn = e.target.closest('.control');
    if (!btn) return; // guard clause
    const id = btn.dataset.id;
    if (!id) return; // guard clause

    // remove active-btn class from previous active button
    const currentBtn = document.querySelector('.active-btn');
    if (currentBtn) {
        currentBtn.classList.remove('active-btn');
    }

    // add active-btn class to the current active button
    btn.classList.add('active-btn');

    // remove active class from previous active section
    const currentSection = document.querySelector('.section.active');
    if (currentSection) {
        currentSection.classList.remove('active');
    }

    // add active class to the current active section
    const element = document.getElementById(id);
    if (element) {
        element.classList.add('active');
    }
});

if (sections && controls && sectBtn && allSections) {
    console.log('All DOM selections are successful.');
} else {
    console.error('Some DOM selections failed');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains('light-mode')) {
        themeBtn.setAttribute('data-tooltip', 'Light Mode');
    } else {
        themeBtn.setAttribute('data-tooltip', 'Dark Mode');
    }
});