<template>
  <div>
    <div>
      <myNavbar />
    </div>
    
    <div class="background-section">
      <h1>Software Developer</h1>
      <h2>Ali Tolga Çakir</h2>
    </div>

    <div>
      <section class="about-me">
        <h2>Hakkımda</h2>
        <p>
          Merhaba! Ben Ali Tolga Çakir, yazılım geliştirme konusunda tutkulu bir geliştiriciyim.
           Modern web ve mobil uygulama geliştirme üzerine deneyimim var. 
           Projelerimde her zaman kullanıcı deneyimini öncelikli hedefim olarak görüyorum. Sürekli öğrenmeyi ve yenilikleri takip
            etmeyi seviyorum. Amacım, kullanıcıların hayatını kolaylaştıran ve ilham veren çözümler üretmek.


        </p>
      </section>

      <section class="featured-projects">
        <h2>Öne Çıkan Projeler</h2>
        <div class="project-list">
          <a
            v-for="project in projects"
            :key="project.id"
            :href="project.link"
            target="_blank"
            class="project-card"
          >
            <div class="image-container">
              <img :src="project.image" alt="Project Image" />
              <h3 class="project-title">{{ project.title }}</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
   
    <div>
      <section class="services">
        <h2>Uzmanlık Alanlarım</h2>
        <div class="services-list">
          <div v-for="service in services" :key="service.id" class="service-card">
            <i :class="service.icon" class="service-icon"></i>
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </section>
    </div>
<div>
  <myLanguages/>
</div>
    <div>
      <myFooter/>
    </div>
  </div>
</template>

<script>
import myLanguages from '../components/Languages.vue';
import myNavbar from '../components/Navbar.vue';
import myFooter from '../components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    myNavbar,
    myFooter,
    myLanguages,
  },
  data() {
    return {
      projects: [
        { id: 1, title: 'ECommerce App', image: require('@/assets/proje3.jpg'), link: 'https://github.com/alitolga0/ECommerceApp' }, 
        { id: 2, title: 'Smart Pet App', image: require('@/assets/proje1.jpg'), link: 'https://github.com/HakanDogann1/SmartPetProject' },
        { id: 3, title: 'Air Quality Monitoring', image: require('@/assets/proje2.jpg'), link: 'https://github.com/alitolga0/AirqualityMonitoring' },
      ],
      services: [
        { id: 1, name: 'Web Geliştirme', icon: 'fas fa-code', description: 'Modern ve dinamik web siteleri geliştiriyorum.' },
        { id: 2, name: 'Mobil Uygulama Geliştirme', icon: 'fas fa-mobile-alt', description: 'Mobil platformlar için uygulamalar tasarlıyorum.' },
        { id: 3, name: 'UI/UX Tasarımı', icon: 'fas fa-paint-brush', description: 'Kullanıcı dostu ve şık arayüzler sunuyorum.' },
      ],
    };
  },
};
</script>

<style scoped>
.background-section {
  background-image: url('../assets/kapak.jpeg'); 
  background-size: cover;
  background-position: center; 
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b9803a;
  text-align: center;
  padding: 20px;
  max-width: 100%; 
  overflow: hidden; 
  
}

.about-me {
  background-color: #f4f4f4; 
  padding: 25px; 
  border-radius: 12px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin: 30px 10px; 
  text-align: center; 
  max-width: 100%; 
}

.about-me h2 {
  font-size: 2rem; 
  color: #b9803a; 
  margin-bottom: 10px; 
}

.about-me p {
  font-size: 2rem;
  color: #333; 
  line-height: 1.5;
}

h1 {
  font-size: 3rem;
  margin: 0;
}

h2 {
  font-size: 2rem;
}

.featured-projects {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.project-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.project-card {
  position: relative;
  border-radius: 8px;
  width: 250px;
  height: 350px;
  text-align: center;
  overflow: hidden;
  transition: transform 0.3s;
  text-decoration: none;
  max-width: 100%; 
}

.image-container {
  position: relative;
  height: 100%;
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.project-title {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px;
}

.project-card:hover {
  transform: scale(1.05);
}

.services {
  margin-top: 40px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 12px;
  text-align: center;
  max-width: 100%; 
}

.services-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.service-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 100%; /* Prevents overflow */
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-icon {
  font-size: 40px;
  color: #b9803a;
  margin-bottom: 15px;
}

.service-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.service-card p {
  font-size: 1rem;
  color: #666;
}

@media (max-width: 768px) {
  .services-list {
    flex-direction: column;
    align-items: center; 
  }

  .service-card {
    width: 90%; 
    margin: 10px 0; 
  }

  .project-card {
    width: 90%; 
    margin: 10px 0; 
  }
}
</style>
