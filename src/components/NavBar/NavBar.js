import "./_NavBar.scss";

function NavBar() {
  const navbarHTML = `
        <nav class="navbar default-nav-color">
            <div id="navbar-wrapper" class="navbar-wrapper">
                <div class="navbar-logo-wrapper show-sm-flex">
                    <a href="/"><img src="assets/svg/logo-mhu-black.svg" class="navbar-logo-image" alt="Logo"></a>
                </div>
                <ul class="navbar-menu" id="menu">
                    <li class="nav-item"><a href="/"><span class="nav-link-text">Work</span></a></li>
                    <li class="nav-item"><a href="/about"><span class="nav-link-text">About</span></a></li>
                    <li class="nav-item"><a href="assets/files/MichelleHuResume.pdf" target="_blank" rel="noopener noreferrer"><span class="nav-link-text">Resume</span></a></li>
                    <li data-scroll-target="footer" class="nav-item last-child"><a role="button"><span class="teal fw-medium nav-link-text">Connect with me!</span></a></li>
                </ul>
            </div>
        </nav>
    `;

  if (!document.querySelector(".navbar")) {
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
  }

  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  navbar.style.top = "0";

  const navbarHeight = navbar.offsetHeight;

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(
          () => {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          },
          limit - (Date.now() - lastRan),
        );
      }
    };
  };

  const handleScroll = throttle(() => {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (window.scrollY <= 5 || nearBottom) {
      navbar.classList.remove("navbar-hidden");
      navbar.style.top = "0";
    } else if (window.scrollY > lastScrollY) {
      navbar.classList.add("navbar-hidden");
      navbar.style.top = `-${navbarHeight}px`;
    } else if (window.scrollY < lastScrollY) {
      navbar.classList.remove("navbar-hidden");
      navbar.style.top = "0";
    }

    lastScrollY = window.scrollY;
  }, 100);

  window.addEventListener("scroll", handleScroll);

  // Go transparent over the hero, white everywhere else
  const hero = document.querySelector("#hero");

  if (hero) {
    navbar.classList.add("nav-transparent");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navbar.classList.add("transition-none");
          navbar.classList.add("nav-transparent");
          requestAnimationFrame(() =>
            navbar.classList.remove("transition-none"),
          );
        } else {
          navbar.classList.remove("nav-transparent");
        }
      },
      { threshold: 0, rootMargin: `-${navbarHeight}px 0px 0px 0px` },
    );

    observer.observe(hero);
  }

  const setActiveNavItem = () => {
    const navItems = document.querySelectorAll(".nav-item a");
    navItems.forEach((navItem) => {
      if (navItem.pathname === window.location.pathname) {
        navItem.parentElement.classList.add("active");
      }
    });
  };

  setActiveNavItem();
}

export default NavBar;
