<template>
  <div class="about-container">
    <div class="nav">
      <myNavbar />
    </div>
    <div class="content">
      <button class="toggle-button" @click="toggleSidebar">
        <i :class="isSidebarVisible ? 'fas fa-angle-left' : 'fas fa-angle-right'"></i>
      </button>
      <div class="sidebar" :class="{ open: isSidebarVisible }">
        <ul class="sidebar-menu">
          <li @click="selectSection('about')" :class="{ active: selectedSection === 'about' }">
            <i class="fas fa-user"></i> Hakkımda
          </li>
          <li @click="selectSection('education')" :class="{ active: selectedSection === 'education' }">
            <i class="fas fa-graduation-cap"></i> Eğitimim
          </li>
          <li @click="selectSection('experience')" :class="{ active: selectedSection === 'experience' }">
            <i class="fas fa-briefcase"></i> Deneyimlerim
          </li>
          <li @click="selectSection('languages')" :class="{ active: selectedSection === 'languages' }">
            <i class="fas fa-language"></i> Yeteneklerim
          </li>
        </ul>
      </div>
      <div class="main-content">
        <h3>{{ sectionTitle }}</h3>
        <div v-if="selectedSection === 'about'" class="about-text">
          <p>{{ sectionContent }}</p>
        </div>
        <div v-if="selectedSection === 'education'" class="education-section">
          <div v-for="(edu, index) in educationList" :key="index" class="education-card">
            <h4>{{ edu.university }}</h4>
            <p><strong>Başlangıç:</strong> {{ edu.start }} | <strong>Bitiş:</strong> {{ edu.end }}</p>
            <p><strong>Aldığım Eğitimler:</strong> {{ edu.courses.join(', ') }}</p>
          </div>
        </div>
        <div v-if="selectedSection === 'experience'" class="experience-section">
          <div v-for="(exp, index) in experienceList" :key="index" class="experience-card">
            <h4>{{ exp.company }}</h4>
            <p><strong>Pozisyon:</strong> {{ exp.position }}</p>
            <p><strong>Başlangıç:</strong> {{ exp.start }} | <strong>Bitiş:</strong> {{ exp.end }}</p>
            <p><strong>Projeler:</strong> {{ exp.projects.join(', ') }}</p>
          </div>
        </div>
        <div v-if="selectedSection === 'languages'" class="languages-section">
          <myLanguages />
        </div>
      </div>
    </div>
    <div>
      <myFooter/>
    </div>
  </div>
</template>


<script>

import myFooter from '../components/Footer.vue';
import myNavbar from '../components/Navbar.vue';
import myLanguages from '../components/Languages.vue';

export default {
  name: 'mAbout',
  components: {
    myNavbar,
    myLanguages,
    myFooter,
  },
  data() {
    return {
      selectedSection: 'about',
      isSidebarVisible: false,
      isMobile: window.innerWidth <= 768,
      sections: {
        about: {
          title: 'Hakkımda',
          content: 'Ben Ali Tolga Çakir, yazılım geliştirme alanında tutkulu bir geliştiriciyim. Modern web ve mobil uygulama geliştirme üzerine geniş bir deneyime sahibim. Projelerimde kullanıcı deneyimini her zaman öncelikli hedefim olarak görüyorum.',
        },
      },
      educationList: [
        {
          university: 'Çankırı Karatekin Üniversitesi',
          start: '2021',
          end: '2024',
          courses: [ 'Web Geliştirme', 'Mobil Uygulama Geliştirme', 'Makine Öğrenmesi','Veri Tabanı Sistemleri'],
        },
      ],
      experienceList: [
        {
          company: 'Farktor Yazılım E-Ticaret',
          position: 'Software Developer Intern',
          start: '10.06.2022',
          end: '10.09.2022',
          projects: ['Html Css React kullanara web geliştirme üzerinde çalıştım'],
        },
        {
          company: 'Narksoft',
          position: 'Software Developer Intern',
          start: '01.01.2023',
          end: '05.05.2023',
          projects: ['Vue.js kullanarak web geliştirme üzerinde çalıştım'],
        },
      ],
    };
  },
  computed: {
    sectionTitle() {
      switch (this.selectedSection) {
        case 'about':
          return this.sections.about.title;
        case 'education':
          return 'Eğitimim';
        case 'experience':
          return 'Deneyimlerim';
        default:
          return '';
      }
    },
    sectionContent() {
      return this.selectedSection === 'about' ? this.sections.about.content : '';
    },
  },
  methods: {
    selectSection(section) {
      this.selectedSection = section;
      if (this.isMobile) {
        this.isSidebarVisible = false; 
      }
    },
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; 
    },
  },
  watch: {
    '$route'() {
      this.isMobile = window.innerWidth <= 768; 
    },
  },
};
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.nav {
  z-index: 1001;
}

.content {
  display: flex;
  flex: 1;
  width: 100%;
  padding-top: 60px;
}

.sidebar {
  width: 20%;
  background-color: #f4f4f4;
  padding: 50px 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  transition: transform 0.3s ease;
  transform: translateX(0); 
}

.sidebar.open {
  transform: translateX(0); 
}

.sidebar-menu {
  list-style-type: none;
  padding: 0;
}

.sidebar-menu li {
  padding: 20px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.sidebar-menu li i {
  margin-right: 10px;
}

.sidebar-menu li:hover {
  background-color: #e2e2e2;
}

.sidebar-menu li.active {
  font-weight: bold;
  background-color: #d0d0d0;
}

.main-content {
  flex: 1;
  padding: 50px 40px;
  overflow-y: auto;
}

.main-content h3 {
  margin-bottom: 15px;
  font-size: 24px;
}

.education-section,
.experience-section,
.languages-section {
  display: flex;
  flex-direction: column;
}

.education-card,
.experience-card,
.languages-list {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 20px;
}

.education-card h4,
.experience-card h4,
.languages-list h4 {
  margin: 0;
  font-size: 25px;
}

.education-card p,
.experience-card p,
.languages-list li {
  margin: 5px 0;
  font-size: 20px;
}

.toggle-button {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
}
p{
font-size: 1.5rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    padding-top: 20px;
  }
 

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #f4f4f4;
    padding: 50px 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    transform: translateX(-100%); 
  }

  .sidebar.open {
    transform: translateX(0); 
  }

  .toggle-button {
    display: block; 
    position: absolute;
    top: 50%; 
    left: 10px; 
    transform: translateY(-50%);
    z-index: 1002; 
    background-color: #f4f4f4; 
    padding: 10px; 
    border-radius: 0 5px 5px 0; 
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
  }
  
}
</style>
