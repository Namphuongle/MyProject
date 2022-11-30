<template>
    <div>
       <Login :PP='PP' PT="{'name':'phuo' }" @clickchange="abc"/>
    </div>
</template>,
<script>
import Login from './login.vue';
    export default {
        components: {
            Login,
        },
        data(){

            return {}
        
        },
        methods: {
            abc() {


            }
        }
    }
</script>
<style props>
.abc {
    color: red
}
.fontsize {
    font-size: 100px;
}
</style>