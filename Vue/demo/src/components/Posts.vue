<template>
  <div>
    <h1 class="jumbotron">Voodoo Child Post</h1>
    <div class="container">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
        perferendis?
      </p>
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Post Id</th>
            <th scope="col">Post Title</th>
            <th scope="col">Post Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <th scope="row">{{counter}}</th>
            <td>{{post.id}}</td>
            <td>{{post.title}}</td>
            <td>{{post.body}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostExample",
  data() {  
    return {     
        counter: 0,    
        posts: [
            {id:'4556', title:'Post 1', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum, consequuntur.'},
            {id:'4557', title:'Post 2', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum, consequuntur.'},
            {id:'4558', title:'Post 3', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum, consequuntur.'},
            {id:'4559', title:'Post 4', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum, consequuntur.'}
        ]     
    };
  },

  methods: {
      increment() { 
        this.counter++;
      }
    }
};
</script>

<style></style>
