<template>
  <div>
    <div>
      <myNavbar />
    </div>
   <div style="padding: 20px 0;">
    <h1 class="page-title">Hizmetlerim</h1>
    <div class="services-container">
      <div class="service-card" v-for="(service, index) in services" :key="index">
        <img :src="service.image" alt="service.title" class="service-image" />
        <div class="service-text">
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <myFooter/>
  </div>
</div>
</template>

<script>
import myNavbar from '../components/Navbar.vue';
import myFooter from '../components/Footer.vue';
export default {
  name: 'ServicesPage',
  components: {
    myNavbar,
    myFooter,
  },
  data() {
    return {
      services: [
        {
          title: 'Web Geliştirme',
          description: 'Modern ve duyarlı web siteleri tasarlıyor ve geliştiriyorum. HTML, CSS ve JavaScript kullanarak kullanıcı dostu arayüzler oluşturuyorum.',
          image: require('@/assets/hizmet1.jpg'), 
        },
        {
          title: 'Mobil Geliştirme',
          description: 'Android ve iOS platformları için kullanıcı dostu mobil uygulamalar geliştiriyorum. React Native ve Flutter ile çapraz platform çözümleri sunuyorum.',
          image: require('@/assets/hizmet2.png'),
        },
        {
          title: 'UX/UI Tasarım',
          description: 'Kullanıcı deneyimini ön planda tutarak etkili ve estetik arayüz tasarımları yapıyorum. Kullanıcı odaklı yaklaşımla projelerimi şekillendiriyorum.',
          image: require('@/assets/hizmet3.jpg'), 
        },
        {
          title: 'WordPress Geliştirme',
          description: 'WordPress tabanlı web siteleri oluşturuyor ve özelleştiriyorum. Temalar ve eklentilerle kullanıcı dostu çözümler sunuyorum.',
          image: require('@/assets/hizmet4.jpg'), 
        },
      ],
    };
  },
};
</script>

<style scoped>

.page-title {
  text-align: center;
  margin: 40px 0;
  font-size: 2.5em; 
  color: #333;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.services-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
}

.service-card {
  display: flex; 
  gap: 20px; 
  border: none; 
  border-radius: 15px; 
  padding: 20px;
  background-color: #ffffff; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
}

.service-card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); 
}

.service-image {
  width: 180px; 
  height: auto; 
  border-radius: 10px; 
  object-fit: cover; 
}

.service-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
}

.service-card h2 {
  margin: 0 0 10px;
  color: #007bff; 
  font-weight: bold; 
}

.service-card p {
  margin: 0;
  color: #555; 
}

@media (max-width: 600px) {
  .service-card {
    flex-direction: column; 
    align-items: center; 
  }

  .service-image {
    width: 100%; 
    max-width: 300px; 
  }
}
</style>
