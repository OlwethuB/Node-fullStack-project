
<template>
  <!-- Your component template -->
// frontend/src/views/Users.vue
</template>

<script>
import axios from 'axios';

export default {
  // Your component options
  mounted() {
    axios.get('/users')
      .then(response => {
        // Handle the response data here
      })
      .catch(error => {
        // Handle errors here
      });
  }
}
</script>
