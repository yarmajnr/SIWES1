document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay');

    const toggleSidebar = (isOpen) => {
        sidebar.classList.toggle('open', isOpen);
        overlay.classList.toggle('show', isOpen);
    };

    // Open the sidebar and show overlay
    hamburger.addEventListener('click', () => toggleSidebar(true));

    // Close the sidebar and hide overlay
    overlay.addEventListener('click', () => toggleSidebar(false));

    // Function to show the content based on contentId
    const showContent = (contentId) => {
        document.querySelectorAll('.content-section').forEach(content => {
            content.style.display = content.id === contentId ? 'block' : 'none';
        });

        // Close sidebar and overlay on mobile after clicking a menu item
        if (window.innerWidth <= 768) {
            toggleSidebar(false);
        }
    };

    // Add event listeners to menu items
    document.querySelectorAll('.menu-item').forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            const contentId = menuItem.getAttribute('data-content-id');
            
            // Handle dropdown toggle
            const dropdown = menuItem.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown')) {
                dropdown.classList.toggle('open');
            } else {
                showContent(contentId);
            }
        });
    });

    // Initialize the first content section to be visible
    const firstMenuItem = document.querySelector('.menu-item[data-content-id]');
    if (firstMenuItem) {
        showContent(firstMenuItem.getAttribute('data-content-id'));
    }
});
