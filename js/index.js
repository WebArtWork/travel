const toggleClass = (id, className) => {
	const element = document.getElementById(id);
	if (element) {
		element.classList.toggle(className);
	} else {
		console.error('Element with ID ' + id + ' not found.');
	}
}


/* ACCARDION CODE */
document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const activeContent = document.querySelector(".accordion-content[style]");

            if (activeContent && activeContent !== content) {
                activeContent.style.maxHeight = null;
                activeContent.previousElementSibling.classList.remove("active");
            }

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.classList.remove("active");
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                this.classList.add("active");
            }
        });
    });
});


document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollPosition > 0) {
      header.style.background = '#000000a6';
      header.style.backdropFilter = 'blur(5px)';
    } else {
      header.style.background = 'transparent';
    }
  });