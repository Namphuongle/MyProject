<template>
    <div>
        <navVue/>
        <!-- <regester/> -->
    <div class="form-container d-flex justify-content-center">
        <form action="" class="w-50" >
            
            <div class="form-group mb-1 ">
                <label for="">Tên đăng nhập </label>
                <input v-model="username"  type="text" class="form-control fomat_form mr-5 " id=""  placeholder="abc@gmail.com">
            </div>

            <div class="form-group mb-1  ">
                <label for="">Mật khẩu </label>
                <input v-model="password"  type="password" class="form-control fomat_form " id=""  placeholder="">
            </div>

            <div class="d-flex">
            <button @click="onLogin" type="submit" class="btn btn-primary">Đăng nhập </button>
            
            <p >Bạn chưa có tài khoản? <router-link to="/regester">Đăng ký ngay</router-link> </p>
                <!-- <button type="submit" class="btn btn-danger ml-4">Đăng Ký </button> -->
                <!-- {{username}} -->
               
           </div>
           
           
        </form> 
        <!-- {{data}} -->
    </div>

    </div>
</template>

<script >
import navVue from '../components/nav.vue';
import accountService from '../services/account.service';
import regester from '../views/regester.vue';
export default {
    components: {
        navVue,
        regester,
    },
    data() {
        return {
            data:{},
            username:"",
            password: "",
           

        }
    },
    methods: {
        onLogin(e) {
            e.preventDefault()
            this.getAccount()
            this.data.forEach(user => {
                if (this.username == user.username && this.password == user.password) {
                     if( user.type == "admin"  ) {
                        const info  = {
                            gmail: user.username,

                        }
                        localStorage.setItem("admin",JSON.stringify(true))
                        localStorage.setItem("info",JSON.stringify(info))

                        this.$router.push({path: '/admin'})

               }else {
                localStorage.setItem("admin",JSON.stringify(false))
                this.$router.push({path: '/'})
               }
                }
              
            });
            // if(this.username == )

            // if(this.username=="admin" && this.password == '123')
            // {
            //     this.$router.push({path:'/admin/123'})
            //     alert('Đăng nhập thành công!!!')
            // }
        },
        async getAccount() {
            this.data = await accountService.getAll()
            // console.log(data);
        }
        
    },
    mounted() {
    this.getAccount()
  },
}
</script>

<style  scoped>

</style>