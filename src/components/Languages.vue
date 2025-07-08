<template>
    <div class="languages">
      <h2>Yeteneklerim</h2>
      <div class="language-container" v-for="language in languages" :key="language.name">
        <div class="language-item">
          <span class="language-name">{{ language.name }}</span>
          <div class="level-indicator">
            <span class="dot" v-for="n in 5" :key="n" :class="{ filled: n <= language.level }"></span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'myLanguages',
    data() {
      return {
        languages: [
          { name: 'c#', level: 4 },
          { name: '.Net', level: 4 },
          { name: 'Java', level: 3 },
          { name: 'SQL', level: 4 },
          { name: 'Vue.js', level: 4 },
          { name: 'Javascript', level: 4 },
          { name: 'React', level: 2 },
          { name: 'html css', level: 4 },
          
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .languages {
    text-align: center;
  }
  
  .language-container {
    border: 2px solid #ccc; 
    border-radius: 12px; 
    padding: 10px; 
    margin: 10px auto; 
    background-color: #f9f9f9; 
    width: 50%; 
  }
  
  .language-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .language-name {
    margin-right: 15px; 
    font-size: 1.2rem; 
  }
  
  .level-indicator {
    display: flex;
  }
  
  .dot {
    width: 15px; 
    height: 15px; 
    border-radius: 50%;
    margin: 0 3px; 
    background-color: lightgray; 
  }
  
  .dot.filled {
    background-color: #b9803a; 
  }
  @media (max-width: 768px) {
  .language-container {
    width: 90%;
    padding: 14px;
  }

  .language-name {
    font-size: 1rem;
  }

  .dot {
    width: 14px;
    height: 14px;
  }
}
  </style>
  