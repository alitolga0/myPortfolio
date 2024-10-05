<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <h3>Ali Tolga Çakır</h3>
        </div>
        <div class="footer-socials">
          <a href="https://github.com/alitolga0" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ali-tolga-çakir-4429b7257" target="_blank" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:cakiralitolga1@gmail.com" class="social-link">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Ali Tolga Çakır - Tüm hakları saklıdır.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "myFooter",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .footer-logo h3 {
    font-size: 1.5rem;
    color: #b9803a;
    margin: 0;
  }
  
  .footer-socials {
    display: flex;
    gap: 15px;
  }
  
  .social-link {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-link:hover {
    color: #b9803a;
  }
  
  .footer-bottom {
    margin-top: 10px;
  }
  
  .footer-bottom p {
    font-size: 0.9rem;
    color: #ccc;
  }
  </style>
  