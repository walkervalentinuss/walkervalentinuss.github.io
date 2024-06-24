// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('shadow-active');
})

// Experience Item Click
document.addEventListener('DOMContentLoaded', function () {
    const experienceItems = document.querySelectorAll('.experience-item');
    const jobTitle = document.getElementById('job-title');
    const jobLocation = document.getElementById('job-location');
    const jobTime = document.getElementById('job-time');
    const jobSkills = document.getElementById('job-skills');
    const jobDescription = document.getElementById('job-description');

    const orgTitle = document.getElementById('org-title');
    const orgLocation = document.getElementById('org-location');
    const orgTime = document.getElementById('org-time');
    const orgSkills = document.getElementById('org-skills');
    const orgDescription = document.getElementById('org-description');

    experienceItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            
            const section = this.getAttribute('data-section');

            if (section === 'work') {
                // Update job details
                jobTitle.textContent = this.getAttribute('data-title');
                jobLocation.textContent = this.getAttribute('data-location');
                jobTime.textContent = this.getAttribute('data-time');

                // Update job skills
                jobSkills.innerHTML = `<span class="border-slate-300 border border-solid px-2 py-1 rounded-md text-sm">${this.getAttribute('data-skills')}</span>`;

                // Update job description
                jobDescription.innerHTML = this.getAttribute('data-description');
            } else if (section === 'org') {
                // Update org details
                orgTitle.textContent = this.getAttribute('data-title');
                orgLocation.textContent = this.getAttribute('data-location');
                orgTime.textContent = this.getAttribute('data-time');

                // Update org skills
                orgSkills.innerHTML = `<span class="border-slate-300 border border-solid px-2 py-1 rounded-md text-sm">${this.getAttribute('data-skills')}</span>`;

                // Update org description
                orgDescription.innerHTML = this.getAttribute('data-description');
            }
        });
    });
});