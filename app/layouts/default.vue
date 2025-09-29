<template>
  <div>
    <!-- Header -->
    <section id="header" :class="{ 'mobile-active': isMobileMenuActive }">
      <header>
        <span class="image avatar">
          <img src="~/assets/avatar.png" alt="Avatar" />
        </span>

        <h1 id="logo">
          <NuxtLink to="/">Rottenrow Hockey Club</NuxtLink>
        </h1>

        <p>The Coolest Hockey Guys in Glasgow</p>
      </header>

      <nav id="nav">
        <ul>
          <li>
            <a
              href="#about"
              :class="{ active: activeSection === 'about' }"
              @click.prevent="scrollTo('about')"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#teams"
              :class="{ active: activeSection === 'teams' }"
              @click.prevent="scrollTo('teams')"
            >
              Our Teams
            </a>
          </li>
          <li>
            <a
              href="#accomplishments"
              :class="{ active: activeSection === 'accomplishments' }"
              @click.prevent="scrollTo('accomplishments')"
            >
              A Few Accomplishments
            </a>
          </li>
        </ul>
      </nav>

      <footer>
        <ul class="icons">
          <li>
            <Icon name="mdi-email">
              <a href="mailto:chairman@rottenrowhockey.co.uk">
                <span class="label">Email</span>
              </a>
            </Icon>
          </li>
          <li>
            <Icon name="mdi-instagram">
              <a
                href="https://www.instagram.com/rottenrowhc/"
                target="_blank"
                title="Instagram"
              >
                <span class="label">Instagram</span>
              </a>
            </Icon>
          </li>
        </ul>
      </footer>
    </section>

    <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <slot />
      </div>

      <!-- Footer -->
      <section id="footer">
        <div class="container">
          <ul class="copyright">
            <li>© Rottenrow Hockey Club</li>
          </ul>
        </div>
      </section>
    </div>

    <!-- Mobile Title Bar -->
    <div id="titleBar">
      <a href="#header" class="toggle" @click="toggleMobileMenu"></a>
      <span class="title">
        <NuxtLink to="/">Rottenrow Hockey Club</NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup>
const isMobileMenuActive = ref(false);

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  // Close mobile menu after navigation
  isMobileMenuActive.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value;
};

// Handle scroll events to update active nav items
const activeSection = ref("about");

const updateActiveSection = () => {
  const sections = ["about", "teams", "accomplishments"];
  const scrollPos = window.scrollY + 100; // Offset for header

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection(); // Initialize
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<style>
@import "~/assets/css/main.css";
</style>
