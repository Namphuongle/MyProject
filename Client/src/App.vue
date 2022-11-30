<template>

  <div id="app">
    <!-- <Home/> --> 
    <!-- <Home /> -->
   

    
   <router-view></router-view>
    

  </div>



</template>

<script >
import Home from "./views/home.vue";
import Product from "./components/product.vue";
import Login from "./views/regester.vue";





export default {
  
  components: {
    Home,
    Product,
    Login
  },
  data() {
    return {
     
    };
  },
  methods: {
   
  }


}
</script>

<style >
.colorRed {
  color: red;
}

</style>
