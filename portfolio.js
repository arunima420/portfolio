
  const projectItems = document.querySelectorAll(".project-item");
  const projectSection = document.querySelector("#projects");

  let animated = false;

  function showProjectsOneByOne() {
    if (animated) return;
    animated = true;

    projectItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 250); // delay between cards
    });
  }

  // Trigger on scroll
  window.addEventListener("scroll", () => {
    const sectionTop = projectSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 150) {
      showProjectsOneByOne();
    }
  });

  // Trigger when Projects nav is clicked
  document.querySelectorAll('a[href="#projects"]').forEach(link => {
    link.addEventListener("click", () => {
      setTimeout(showProjectsOneByOne, 500);
    });
  });
  