<template>
  <div>
    <h1 class="jumbotron header">Voodoo Child Post</h1>
    <div class="container main">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
        perferendis?
      </p>
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User Id</th>
            <th scope="col">Post Title</th>
            <th scope="col">Post Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{post.id}}</td>
            <td>{{post.userId}}</td>
            <td>{{post.title}}</td>
            <td>{{post.body}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// Import Axios for usage  
import axios from 'axios'

export default {
  name: "PostExample",
  data() {  
    return {       
        posts: [  ]     
    };
  },

  created(){
      // console.log('Connected Created HTTP.');
      // Using axios in order to get element from API
      axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
          // Getting the entire data from the API
          this.posts = posts.data
      });
  }
};
</script>

<style>
.header, .main>p {
  text-align: center;
}
</style>
