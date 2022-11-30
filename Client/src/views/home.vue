<template>

  <div >
   
    <div class="a row m-0"> <Nav /></div>
    <div class="a row m-0"> <Banner /></div> 
    <div class="d-flex justify-content-center  w-100 h-25 mt-1" id="it"><h1 class=" w-25 internet">internet</h1></div>
    <div class="a row m-0"> <Product id="internet" v-for="value in datas" :key="value.id" :product="value" @delete="ondelete" @edit="onEdit" /></div>
   

    <!-- <Banner /> -->
    <!-- <Product id="internet" v-for="value in datas" :key="value.id" :product="value" @delete="ondelete" @edit="onEdit" /> -->
    <div class="a row m-0">
      <form class="form-controll " v-if="admin" >
        <div class="form-group mb-1  ">
          <label for="">Tên gói cước</label>
          <input v-model="title" type="text" class="form-control fomat_form " id="" placeholder="vd: super80">
        </div>
        

        <div class="form-group mb-1 ">
          <label for="">Giá :</label>
          <input v-model="price" type="number" class="form-control fomat_form" id="" placeholder="vd: 250.000">
        </div>

        <div class="form-group mb-1  ">
          <label for="">Tốc độ</label>
          <input v-model="speed" type="text" class="form-control" id="" placeholder="vd: 200pbs">

        </div>
        <div class="form-group mb-1 ">
          <button @click="onSubmit" type="submit" class="btn btn-primary ">Thêm </button>
        </div>

        <div class="form-group mb-1 ">
          <button @click="onUpdate" type="submit" class="btn btn-primary ">Cập nhật</button>
        </div>
      </form>
    </div>

    <!-- <Form v-if="this.$route.params.id == 123" @change-submit="changeSubmit1" class="ml-5 mt-4" :formEdit="formEdit"  :editProduct="product" /> -->

  </div>
  <a href="https://zalo.me/0373196645" target="_blank"><img class="img__zalo" src="../assets/product_img/zalo1.png"
      alt="Liên hệ zalo"></a>
  <a href="mailto:namb1910106@student.ctu.edu.vn" target="_blank"><img class="img__gmail"
      src="../assets/product_img/gmail.png" alt="Lien he gmail"></a>
</template>

<script>
import Product from '../components/product.vue';
import Form from '../components/form.vue';
import Banner from '../components/banner.vue';
import Nav from '../components/nav.vue';
import Contact from '../components/contact.vue';
import contactService from '../services/contact.service';
import { watch } from 'vue';
import Internet from '../views/internet.vue';

export default {
  components: {
    Product,
    Form,
    Banner,
    Nav,
    Contact,
    Internet,


  },
  data() {
    return {
      datas: [],
      formEdit: false,
      product: {},
      title: this.product?.title,
      price: this.product?.price,
      speed: this.product?.speed,
      admin :JSON.parse(localStorage.getItem('admin')),
      user :JSON.parse( localStorage.getItem("info"))
    };
  },
  methods: {
    async ondelete(id) {

      this.datas.forEach((data, i) => {
        return id == data._id ? this.datas.splice(i, 1) : null;
      })

      await contactService.delete(id)
      // alert("successful delete.")

    },async getProduct() {
      this.datas = await contactService.getAll()
    },
    async onSubmit(e) {
      e.preventDefault();
      let product = {
      title: this.title,
      price: this.price,
      speed: this.speed,
      }
      
      this.datas.push(await contactService.create(product))
    },
    onEdit(product) {
      this.product = product
    },
    // onSubmit(e) {
    //         e.preventDefault();
    //         this.$emit('changeSubmit',this.product)
    //     },

    async onUpdate(e) {
        e.preventDefault();
        
        // this.title = this.title
        // this.price = this.price
        // this.speed = this.speed
        console.log(this.title)

       const result = await contactService.update(this.product._id,{
          title: this.title,
          price: this.price,
          speed: this.speed,
        })  
        console.log(result);
        if(result.message == 'Contact was updated successfully'){
          this.getProduct()
        }
        
    }
  },
  mounted() {
    this.getProduct()
  },
  watch: {
    product() {
        this.title = this.product?.title
        this.price = this.product?.price
        this.speed = this.product?.speed
        
    }
  },
  computed: {
    // async getProduct() {
    //   this.datas = await contactService.getAll()
    // },
    // productActive(){
    //   return this.product.title ? this.product : {};
    // }


  },
 

}
</script>

<style>
.a {
  position: relative;
}

.img__zalo,
.img__gmail {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  /* border: 1px solid red; */


}

.img__gmail {
  bottom: 120px;
  right: 20px;
}

.img__gmail:hover,
.img__zalo:hover {
  border: 3px solid green;
}
.internet {
  border-radius: 25px;
  text-align: center;
  background-color: rgb(224, 132, 12);
  color: aliceblue;
}
</style>