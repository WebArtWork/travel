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

document.querySelector(".burger-wrap").addEventListener("click", function () {
    document.querySelector(".header-navigation").classList.toggle("header-navigation--open");
    document.querySelector(".burger").classList.toggle("burger--close");
});


document.addEventListener("DOMContentLoaded", function() {
    const headerNavigation = document.querySelector('.header-navigation');
    const headerMedias = document.querySelector('.header-medias');
  
    // Сохраните исходное место элемента header-medias
    const header = document.querySelector('header');
  
    function moveHeaderMedias() {
      if (window.innerWidth <= 480) {
        if (headerNavigation && headerMedias) {
          // Переместите header-medias внутрь header-navigation
          if (!headerNavigation.contains(headerMedias)) {
            headerNavigation.appendChild(headerMedias);
          }
        }
      } else {
        // Верните header-medias обратно в исходное место, если он там не находится
        if (header && !header.contains(headerMedias)) {
          header.insertBefore(headerMedias, headerNavigation);
        }
      }
    }
  
    // Вызовите функцию при загрузке и при изменении размера окна
    moveHeaderMedias();
    window.addEventListener('resize', moveHeaderMedias);
  });
  

  document.addEventListener("DOMContentLoaded", function () {
  var customSelect = document.getElementById("customSelect");
  var selected = customSelect.querySelector(".select-selected");
  var items = customSelect.querySelector(".select-items");
  var options = items.querySelectorAll("div");

  selected.addEventListener("click", function () {
      items.classList.toggle("select-open");
      selected.classList.toggle("select-open");
  });

  options.forEach(option => {
      option.addEventListener("click", function () {
      var selectedValue = this.getAttribute("data-value");
      selected.innerHTML = this.innerHTML + '<span class="arrow"></span>';
      items.classList.remove("select-open");
      selected.classList.remove("select-open");
      options.forEach(opt => opt.classList.remove("same-as-selected"));
      this.classList.add("same-as-selected");
      // Додайте свою логіку обробки вибору
      console.log("Selected value: " + selectedValue);
      });
  });

  document.addEventListener("click", function (e) {
      if (!customSelect.contains(e.target)) {
      items.classList.remove("select-open");
      selected.classList.remove("select-open");
      }
  });
  });
