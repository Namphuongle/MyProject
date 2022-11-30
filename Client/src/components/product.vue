<template>
    <div class="col-3 my-cart">
        
        <div class="cart mt-3 ml-5 ">

            <div class="cart__title">{{product.title}}  </div>

            <div class="price">{{
    product.price.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1.')
 }}  đ/tháng</div>
            <div class="speed">{{product.speed}} Mpbs</div>

            <div class="discribe">
                <ul class="discribe-list">
                    <li><BIconPersonFill/> Trang bị MODEM 2 băng tần  </li>
                    <li><BIconTagFill/> Lắp đặt miễm phí (*)</li>
                    <li><BIconServer></BIconServer> trả trước 6 tháng tặng 1 tháng</li>
                    <li><i class="fa-solid fa-dollar-sign"></i> Trả trước 12 tháng tặng 2 tháng</li>
                </ul>

            
            </div>

            <div class="row ">
               <a  href="mailto:namb1910106@student.ctu.edu.vn" target="_blank" class="col-md-4  col-sm-12 btn btn-outline-success">Đăng ký</a>
               <button v-if="admin" @click="onDelete" class="col-md-4  col-sm-12 btn btn-outline-danger " >Xóa</button>
               <button v-if="admin " @click="onEdit" class="col-md-4 col-sm-12 btn btn-outline-primary " >Sửa</button>
            </div>

           
        </div>
    </div>
</template>

<script>
import {BIconTag,BIconServer,BIconTagFill,BIconPersonFill} from "bootstrap-icons-vue"

export default {
    data() {
        return {
            admin :JSON.parse(localStorage.getItem('admin'))
        }
    },
    components: {
        BIconTag,
        BIconServer,
        BIconTagFill,
        BIconPersonFill,
    },
    props: {
        product: {
            type: Object, 
            required: true,
            
        },
       
        
    },
    emits: [
        'delete',
        'edit',
    ],
    methods: {
        onDelete() {
            this.$emit('delete',this.product._id)
            
        },
        onEdit() {
            this.$emit('edit',this.product)
        }
    },
    
}
</script>

<style>
.cart {
    border: 1px solid red;
    padding: 5% ;
    /* margin: 10% ; */
    border-radius: 10%;
    background-color: rgb(245, 245, 241);
    
   
    
}
.my-cart :hover {
    background: burlywood;
}
.cart__title {
    font-size: 30px;
    color: #64c15e;
    
}
.discribe-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>