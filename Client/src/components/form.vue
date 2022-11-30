<template>
    <div class="col-3">
        {{editProduct}}
        <form @submit="onSubmit" class="form-control">
            <div class="form-group mb-1  ">
                <label for="">Tên gói cước</label>
                <input  v-model="title" type="text" class="form-control fomat_form " id=""  placeholder="vd: super80">
            </div>

            <div class="form-group mb-1 ">
                <label for="">Giá :</label>
                <input v-model="price" type="number" class="form-control fomat_form" id=""  placeholder="vd: 250.000">
            </div>

            <div class="form-group mb-1  ">
                <label for="">Tốc độ</label>
                <input v-model="speed" type="text" class="form-control" id=""  placeholder="vd: 200pbs">
               
            </div>
            <div class="form-group mb-1 ">
                <button  type="submit" class="btn btn-primary ">Thêm </button>
            </div>
            <!-- <div class="form-group mb-1 ">
                <button @click="cancel" class="btn btn-primary ">Hủy</button>
            </div> -->
        </form>
    </div>
</template>

<script >
export default {
    data() {
        return {
            // product:this.editProduct,
            title:this.editProduct.title,
            // title: 'sfwfw',
            price:0,
            speed:0,

        }
    },
    props:{
        editProduct:{type:Object,},
        
    },
    emits: ['changeSubmit']  
    ,
    watch: {
        title() {
        //    this.product=this.editProduct
           console.log('123');
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.$emit('changeSubmit',this.product)
        },
        cancel(){
            this.product={}
        }
    }
    ,
}

</script>

<style  scoped>
</style>