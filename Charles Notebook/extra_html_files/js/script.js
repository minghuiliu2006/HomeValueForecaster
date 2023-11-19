// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Pull h1 content and display it in the header bar
    const h1Content = document.querySelector('h1').textContent;
    const headerBar = document.querySelector('.header-bar');
    const headerTitle = document.createElement('div');
    headerTitle.textContent = h1Content;
    headerTitle.classList.add('header-title');
    headerBar.appendChild(headerTitle);

    // Hide the original h1
    document.querySelector('h1').style.display = 'none';

    // Create menu items based on h2 and h3 elements
    const sidemenu = document.getElementById('sidemenu');
    const headers = document.querySelectorAll('h2, h3');
    let h2Item = null; // Store the current h2 item for nesting h3 items under it

    headers.forEach((header, index) => {
        const menuItem = document.createElement('li');
        const link = document.createElement('a');
        const id = 'section-' + (index + 1);

        // Add id to the header and create menu link
        header.id = id;
        link.textContent = header.textContent;
        link.href = '#' + id;
        menuItem.appendChild(link);

        // Add click event
        menuItem.addEventListener('click', (event) => {
            // Account for the header bar at the top (3em is equivalent to 48px)
            const yOffset = -48;
            if (header.tagName === 'H2') {
                const sublist = menuItem.querySelector('ul');
                if (sublist) {
                    sublist.style.display = sublist.style.display === 'block' ? 'none' : 'block';
                }
            } else {
                const y = header.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
            event.preventDefault();
        });

        // Handle nesting and indentation
        if (header.tagName === 'H3') {
            menuItem.style.marginLeft = '20px';
            const sublist = h2Item.querySelector('ul');
            if (!sublist) {
                const newSublist = document.createElement('ul');
                h2Item.appendChild(newSublist);
            }
            h2Item.querySelector('ul').appendChild(menuItem);
        } else {
            sidemenu.appendChild(menuItem);
            h2Item = menuItem; // Update the current h2 item for nesting h3 items under it
        }
    });

    // Toggle menu visibility when the menu icon is clicked
    const menuIcon = document.querySelector('.fa-bars');
    menuIcon.addEventListener('click', (event) => {
        sidemenu.style.display = sidemenu.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();  // Prevent this click event from triggering the document click event below
    });

    // Hide sidemenu when clicking outside of it or the menu icon
    document.addEventListener('click', (event) => {
        const isClickInside = sidemenu.contains(event.target) || menuIcon.contains(event.target);

        // If the click was outside the sidemenu and the sidemenu is displayed, hide it
        if (!isClickInside && sidemenu.style.display === 'block') {
            sidemenu.style.display = 'none';
        }
    });

    // Prevent clicks inside the sidemenu from closing the menu
    sidemenu.addEventListener('click', (event) => {
        event.stopPropagation();  // Stop the click event from bubbling up to the document
    });
});
