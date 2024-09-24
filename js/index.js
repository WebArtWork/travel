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
      selected.querySelector(".select-title__title").innerHTML = this.innerHTML;
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

  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.cities__item');
    let selectedItem = null;
  
    function resetItems() {
      items.forEach(item => {
        item.classList.remove('selected');
        item.style.opacity = '1'; // Reset opacity to default
      });
      selectedItem = null; // Clear selected item
    }
  
    items.forEach(item => {
      item.addEventListener('click', function (event) {
        // Prevent event propagation to the document
        event.stopPropagation();
  
        // Reset all items
        resetItems();
  
        // Set this item as selected
        this.classList.add('selected');
        this.style.opacity = '1'; // Ensure the selected item is fully opaque
  
        // Set opacity for all other items
        items.forEach(el => {
          if (!el.classList.contains('selected')) {
            el.style.opacity = '0.5'; // Reduce opacity for non-selected items
          }
        });
  
        // Track the selected item
        selectedItem = this;
      });
    });
  
    // Handle clicks outside of the items
    document.addEventListener('click', function () {
      if (selectedItem) {
        resetItems();
        selectedItem = null;
      }
    });
  });
  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.drive-slider').slick({
    arrows: false,
    dots: true
  });