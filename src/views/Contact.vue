<template>
  <div class="contact-page">
    <myNavbar />
    
    <div class="contact-form-container">
      <h2>İletişim</h2>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Adınız:</label>
          <input type="text" v-model="name" required placeholder="Adınızı girin" />
        </div>
        <div class="form-group">
          <label for="email">E-posta:</label>
          <input type="email" v-model="email" required placeholder="E-posta adresinizi girin" />
        </div>
        <div class="form-group">
          <label for="message">Mesajınız:</label>
          <textarea v-model="message" required placeholder="Mesajınızı yazın"></textarea>
        </div>
        <button type="submit" class="submit-button">Gönder</button>
      </form>
      <div v-if="submitted" class="submission-confirmation">
        Teşekkür ederiz! Mesajınız başarıyla gönderildi.
      </div>
    </div>

    <div class="footer">
      <myFooter />
    </div>
  </div>
</template>

<script>
import myNavbar from '../components/Navbar.vue';
import myFooter from '../components/Footer.vue';

export default {
  name: 'ContactPage',
  components: {
    myNavbar,
    myFooter,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      
      if (!window.Email) {
        console.error("SMTP.js yüklenmedi. Lütfen kontrol edin.");
        return;
      }

      window.Email.send({
        Host: "smtp.elasticemail.com", 
        Username: "cakiralitolga22@gmail.com", 
        Password: "591D9C10390A6DDF382A2631344E29E2C05A", 
        To: 'cakiralitolga22@gmail.com', 
        From: "cakiralitolga22@gmail.com", 
        Subject: `Yeni mesaj - ${this.email}`, 
        Body: `Ad: ${this.name} <br/> E-posta: ${this.email} <br/> Mesaj: ${this.message}`,
        Port: "587",
      })
      .then(
        message => {
          if (message === 'OK') {
            this.submitted = true; 
            this.resetForm(); 
          } else {
            alert("Mesaj gönderilirken bir hata oluştu: " + message);
          }
        }
      )
      .catch(error => {
        console.error("E-posta gönderimi sırasında bir hata oluştu:", error);
      });
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script><style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh; 
  overflow-x: hidden; 
  padding: 10px;
}

.contact-form-container {
  flex: 1;
  width: 80%;
  max-width: 600px;
  margin: 80px auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px 20px 10px; 

}


h2 {
  font-size: 1.8rem; 
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px; 
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input,
textarea {
  width: 80%; 
  padding: 12px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  font-size: 1rem; 
  transition: border-color 0.3s; 
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none; 
}

textarea {
  height: 100px; 
  resize: vertical; 
}

.submit-button {
  padding: 12px 20px;
  background-color: #28a745; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 1rem; 
  transition: background-color 0.3s; 
  width: 100%; 
}

.submit-button:hover {
  background-color: #218838;
}

.submission-confirmation {
  margin-top: 20px; 
  color: green; 
  text-align: center; 
  font-weight: bold; 
}

.footer {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 10px; 
}
</style>
