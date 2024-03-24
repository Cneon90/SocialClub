<template>
  <div>
    <button @click="fetchData">Отправить запрос</button>
    <div v-if="response">{{ response }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      response: null
    }
  },
  methods: {
    fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
          this.response = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>