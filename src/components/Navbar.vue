<template>
  <nav>
    <div class="navbar-container">
      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar" :class="{ 'active': isMenuOpen }"></div>
        <div class="bar" :class="{ 'active': isMenuOpen }"></div>
        <div class="bar" :class="{ 'active': isMenuOpen }"></div>
      </div>
      <div class="logo">
        <i class="fas fa-laptop-code"></i>
      </div>
      <ul class="navbar" :class="{ 'active': isMenuOpen }">
        <li v-for="(link, index) in links" :key="index" class="nav-item">
          <router-link :to="link.path" class="nav-link" @click="closeMenu">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar" :class="{ 'active': isMenuOpen }">
      <ul class="dropdown-menu">
        <li v-for="(link, index) in links" :key="index" class="dropdown-item">
          <router-link :to="link.path" class="nav-link" @click="closeMenu">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'myNavbar',
  data() {
    return {
      links: [
        { name: 'Anasayfa', path: '/' },
        { name: 'Hakkımda', path: '/about' },
        { name: 'Hizmetler', path: '/services' },
        { name: 'İletişim', path: '/contact' },
      ],
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
<style scoped>
nav {
  background-color: #34495e;
  padding: 10px 20px;
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  z-index: 1000; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-toggle {
  display: none; 
  flex-direction: column;
  cursor: pointer;
}

.logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.navbar {
  list-style: none;
  display: flex;
  margin: 0;
  transition: max-height 0.3s ease;
  overflow: hidden;
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 80%;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 18px;
}

.nav-link:hover {
  background-color: #2ecc71;
  color: white;
  transform: scale(1.2);
}

.sidebar {
  position: fixed;
  top: 0;
  right: -250px; 
  width: 250px;
  height: 100%;
  background-color: #34495e;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5); 
  transition: right 0.3s ease; 
  z-index: 100; 
}

.sidebar.active {
  right: 0; 
}

.dropdown-menu {
  list-style: none; 
  padding: 0; 
  margin: 0; 
  display: flex; 
  flex-direction: column; 
}

.dropdown-item {
  padding: 15px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px;
  transition: all 0.3s;
}

.bar.active {
  transform: rotate(45deg);
}

.bar.active + .bar {
  opacity: 0;
}

.bar.active + .bar + .bar {
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar {
    display: none; 
  }

  .menu-toggle {
    display: flex; 
  }
}
</style>
