<template>
    <vert-menu></vert-menu>
    <div class="container">
    <MainNav></MainNav>
    </div>
    <div class="container">
      <!-- Меню слева -->
      <nav class="menu">
        <MainMenu></MainMenu>
        <MainCheck></MainCheck>
      </nav>

      <!-- Содержимое страницы -->
      <div class="content">
        <!-- Заголовок -->
        <header>
          <h1>Добро пожаловать на наш сайт!</h1>
        </header>

        <div class="contentBox">
            <div>
              <h1>Результат запроса:</h1>
              <ul>
                <li v-for="item in items" :key="item.id">{{ item.title }}</li>
              </ul>
            </div>

            <section>
              <b-button @click="clickMe">Click M1e</b-button>
            </section>


          <MainCarusel></MainCarusel>
        <br>
        <br>
        <br>
          <vert-menu></vert-menu>
        <div class="container">
          <MainColaps></MainColaps>

        </div>
        </div>

        <!-- Футер -->
        <footer>
          <p>&copy; 2022 Название вашей компании. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import MainCheck from "@/components/MainCheck.vue";
import MainNav from "@/components/MainNav.vue";
import MainCarusel from "@/components/MainCarusel.vue";
import MainColaps from "@/components/MainColaps.vue";
import VertMenu from "@/components/VertMenu.vue";
// import axios from 'axios';

export default {
  name: 'App',
  components: {VertMenu, MainColaps, MainCarusel, MainNav, MainCheck, MainMenu},
  // components: {MainMenu},
  data() {
    return {
      items: []
    };
  },
    mounted() {
    // axios.get('http://127.0.0.1:8000/users/')
    //   .then(response => {
    //     this.items = response.data;
    //   })
    //   .catch(error => {
    //     console.error('Ошибка при загрузке данных:', error);
    //   });
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}

header {
  background-color: #f4f4f4;
  padding: 10px;
  text-align: center;
}

.contentBox {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
}

footer {
  margin-top: auto;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>