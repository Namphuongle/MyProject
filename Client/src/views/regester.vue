<template>
    <div>
        <navVue/>
    <div class="form-container d-flex justify-content-center">
        <form action="" class="w-50" @submit="register">

            <div class="form-group mb-1 ">
                <label for="">Tên đăng nhập </label>
                <input v-model="username"  type="text" class="form-control fomat_form mr-5 " id=""  placeholder="abc@gmail.com">
            </div>

            <div class="form-group mb-1  ">
                <label for="">Mật khẩu </label>
                <input v-model="password"  type="password" class="form-control fomat_form " id=""  placeholder="">
            </div>

            <div class="form-group mb-1  ">
                <label for="">Nhập lại mật khẩu </label>
                <input v-model="repassword"  type="password" class="form-control fomat_form " id=""  placeholder="">
            </div>

            <!-- <button type="submit" class="btn btn-primary">Đăng nhập </button> -->
            <button type="submit" class="btn btn-danger ml-4">Đăng Ký </button>
           
        </form>
    </div>

    </div>
</template>

<script >
import navVue from '../components/nav.vue';
import AccountService from '../services/account.service';
export default {
    components: {
        navVue,
    },
    data() {
        return {
            username: '',
            password: '',
            repassword: '',
            type: 'user',
        }
    },
    methods: {
       async register(e) {
            e.preventDefault()
            if(this.password == this.repassword ) {
            let data = {
                username: this.username,
                password: this.password,
                repassword: this.repassword,
            }
            
           let result = await AccountService.create(data)
           if(result){
            alert("đăng ký tài khoản thành công")
          
            this.username= ''
            this.password= ''
            this.repassword= ''


           }
            
console.log(result);
            // this.$emit('changeSubmit',this.product)   
            }
            // if(this.username=="admin" && this.password == '123')
            // {
            //     // this.$router.push({path:'/admin/123'})
            //     console.log();
            // }
        }
    }
}
</script>

<style  scoped>

</style>