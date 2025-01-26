// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP and ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the portfolio title (fade in and slide up)
    gsap.fromTo(".portfolio-title", 
        {
            opacity: 0, // Start hidden
            y: 100, // Start below the screen
        }, 
        {
            opacity: 1, // Fade in
            y: 0, // Move to normal position
            duration: 1, 
            ease: "power3.out", 
            scrollTrigger: {
                trigger: ".portfolio-title", 
                start: "top 80%", // Trigger when top of the title reaches 80% of the viewport height
                end: "top 30%", // End when top of the title reaches 30% of the viewport height
                scrub: true, 
                once: true, // Trigger only once (when it first enters the viewport)
            }
        });

    // Animate the subtitle (fade in and slide up)
    gsap.fromTo(".projects-subtitle", 
        {
            opacity: 0, 
            y: 50, // Start slightly below
        }, 
        {
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            scrollTrigger: {
                trigger: ".projects-subtitle", 
                start: "top 80%", 
                end: "top 30%",
                scrub: true, 
                once: true, 
            }
        });

    // Animate the description (fade in and slide up)
    gsap.fromTo(".portfolio-description", 
        {
            opacity: 0, 
            y: 50, 
        }, 
        {
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            scrollTrigger: {
                trigger: ".portfolio-description", 
                start: "top 80%", 
                end: "top 30%",
                scrub: true, 
                once: true, 
            }
        });

    // Add GSAP ScrollTrigger animations for the images
    const images = document.querySelectorAll('.portfolio-images .image-wrapper');

    images.forEach((image, index) => {
        gsap.fromTo(image, 
            {
                opacity: 0, 
                y: 100, 
                rotation: index % 2 === 0 ? -30 : 30, 
                scale: 0.95 
            }, 
            {
                opacity: 1, 
                y: 0, 
                rotation: 0, 
                scale: 1, 
                duration: 1, 
                ease: "power3.out", 
                scrollTrigger: {
                    trigger: image,
                    start: "top 80%", 
                    end: "top 30%", 
                    scrub: true, 
                }
            });
              // Scroll hijacking & ScrollTrigger animations
 // Animate new-section with scroll-triggered pinning
    gsap.fromTo(".new-section", 
        {
          y: "100vh",  // Start the new section below the viewport
        },
        {
          y: "0",  // End the new section at normal position
          scrollTrigger: {
            trigger: ".hero",  // Trigger when scrolling through the hero
            start: "top top",   // Start when the top of the hero section is at the top
            end: "bottom top",  // End when the bottom of the hero section reaches the top
            scrub: true,        // Sync the scroll position with animation
            pin: true,          // Pin the new section while scrolling
            markers: false,     // Disable markers for a cleaner view
          },
        }
      );
    // Pin the Hero Section while scrolling
    gsap.to(".hero", {
        scrollTrigger: {
            trigger: ".hero",  // Trigger animation from the hero section
            start: "top top",   // Trigger when the top of the hero hits the top of the viewport
            end: "bottom top",  // End when the bottom of the hero hits the top
            scrub: true,        // Sync the animation with scroll position
            pin: true,          // Pin the hero section during scrolling
            markers: false,     // Disable markers for a cleaner view
        }
    });     
    });

      gsap.to(".mouse", {
        y: 10, // Move down by 10px
        duration: 0.75,
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation back to original
        ease: "power1.inOut",
    });
    const imText = document.getElementById('im');
    
    // Add the 'loaded' class after the page load (can also add a delay if you prefer)
    setTimeout(() => {
        imText.classList.add('loaded');
    }, 500);  // 500ms delay (can be adjusted)
    gsap.to("#im", {
        duration: 0,  // Duration of the animation
        color: "#e82e2e",  // New color for "I'm"
        ease: "power1.inOut",  // Easing function
        repeat: 0,  // Repeat indefinitely (optional)
        yoyo: true  // Make the animation reverse back and forth
    });
// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Typewriter Animation for Title
let titleText = "I'M DARIUS";
let titleElement = document.getElementById("im");
let index = 0;

function typeWriter() {
    titleElement.innerHTML = ""; // Clear the content for repeat effect
    
    function write() {
        if (index < titleText.length) {
            titleElement.innerHTML += titleText.charAt(index);
            index++;
            setTimeout(write, 100); // Adjust speed (100ms per character)
        } else {
            setTimeout(() => {
                index = 0;  // Reset the index to start again
                typeWriter(); // Restart the typing effect
            }, 1000); // Add a delay (1 second) before restarting
        }
    }
    
    write(); // Start the typing effect
}

typeWriter(); // Start the initial typing animation

gsap.from(".skills-right .skills-images img", {
    scrollTrigger: {
        trigger: ".skills-section",  // Trigger when skills section comes into view
        start: "top bottom",         // Start when the section's top hits the bottom of the viewport
        end: "bottom top",           // End when the section's bottom hits the top of the viewport
        scrub: true,                 // Sync animation with scroll
        markers: false               // Disable markers for a cleaner view
    },
    opacity: 0,      // Start with opacity 0
    x: 100,          // Start from the right
    stagger: 0.1,    // Stagger animations for each image
    duration: 1,     // Duration of animation
});
gsap.from(".skills-right .skills-icons img", {
    scrollTrigger: {
        trigger: ".skills-section",  // Trigger when skills section comes into view
        start: "top bottom",         // Start when the section's top hits the bottom of the viewport
        end: "bottom top",           // End when the section's bottom hits the top of the viewport
        scrub: true,                 // Sync animation with scroll
        markers: false               // Disable markers for a cleaner view
    },
    opacity: 0,      // Start with opacity 0
    x: 10,          // Start from the right
    stagger: 0.1,    // Stagger animations for each icon
    duration: 1,     // Duration of animation
});

gsap.from(".skills-left .skills-item", {
    scrollTrigger: {
        trigger: ".skills-section",  // Trigger when skills section comes into view
        start: "top bottom",         // Start when the section's top hits the bottom of the viewport
        end: "bottom top",           // End when the section's bottom hits the top of the viewport
        scrub: true,                 // Sync animation with scroll
        markers: false               // Disable markers for a cleaner view
    },
    opacity: 0,       // Start with opacity 0
    x: -5,          // Start from the left
    stagger: 0.2,     // Stagger the animations for each item
    duration: 10,      // Duration of the animation
})
gsap.to(window, {
    scrollTo: { y: "max", autoKill: false },
    duration: 2, // Smooth scroll duration (2 seconds)
    ease: "power2.inOut", // Easing function
    paused: true, // Initial state is paused, so the scroll does not happen immediately
    scrollTrigger: {
        trigger: ".skills-section",  // Trigger the scroll animation when this section comes into view
        start: "top bottom",         // Start when the section's top reaches the bottom of the viewport
        end: "bottom top",           // End when the section's bottom reaches the top of the viewport
        scrub: true,                 // Sync scroll with animation
        markers: false               // Disable scroll trigger markers for a clean look
    }
    
});

});
