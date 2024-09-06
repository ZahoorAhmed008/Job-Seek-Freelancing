document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-pic');
    const profileDropdown = document.querySelector('.profile-dropdown');

    profilePic.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        profileDropdown.style.display = 'none';
    });

    profileDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
