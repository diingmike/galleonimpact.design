// script for dropdown menu
    const dropdownItems = document.querySelectorAll('.menu-dropdown-item');

    // Attach a listener to each dropdown item
    dropdownItems.forEach(li => 
    {
        // We attach the listener to the <a> element inside the <li>
        const link = li.querySelector('a');

        if (link) 
        {
            link.addEventListener('click', function(e) 
            {
                // Check if we are in the mobile view (less than or equal to 768px)
                const isMobileView = window.innerWidth <= 768; 

                if (isMobileView) 
                {
                    // Prevent the link from navigating to the page on click
                    e.preventDefault();
                    
                    // Toggle the 'menu-open' class on the parent <li> element
                    li.classList.toggle('menu-open');
                }
                // On desktop, the link behaves normally (navigates)
            });
        }
    });

// script for banner
    document.addEventListener("DOMContentLoaded", function() 
    {
        const headings = document.querySelectorAll(".banner .container h1");
        let index = 0;

        function showNext() {
            headings[index].classList.remove("active");
            headings[index].classList.add("exit");

            index = (index + 1) % headings.length;

            headings[index].classList.remove("exit");
            headings[index].classList.add("active");
        }

        setInterval(showNext, 5000); // change text every 5 seconds
    });

// script for year
    document.getElementById("year").textContent = new Date().getFullYear();

// script for go up
    // Go up button reference
    const goUpBtn = document.querySelector(".go-up");

    // Show button when scrolled down 300px
    window.addEventListener("scroll", () => 
    {
        if (window.scrollY > 300) 
        {
            goUpBtn.style.display = "block";
        } 
        else 
        {
            goUpBtn.style.display = "none";
        }
    });

    // Script for go up button
    function scrollToTop() 
    {
        window.scrollTo
        ({
            top: 0,
            behavior: 'smooth'
        });
    }