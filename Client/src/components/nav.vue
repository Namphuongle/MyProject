<template>
    <div class="my-nav d-flex justify-content-between">
        
        <router-link to="/">
            <div><img src="../assets/fpt-logo.svg" alt=""></div>
        </router-link>

        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <router-link class="nav-link active" aria-current="page" to="/">Trang Chủ</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/internet">Internet
                            </router-link>
                            <router-link class="nav-link active" aria-current="page" to="/capquang">Cáp Quang
                            </router-link>
                            <router-link class="nav-link active" aria-current="page" to="/login">Đăng nhập
                            </router-link>





                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div @click="option">
            <div class="d-flex">
                
                <div><i class="fa-solid fa-user"></i></div>
                
                <div class="container">
                    <div class="dropdown">
                        <div class=" dropdown-toggle" data-toggle="dropdown">
                            <i class="fa-thin fa-square-down"></i>
                        </div>
                        <div class="dropdown-menu">
                            <div @click="logout" class="dropdown-item"> Log out</div>
                            <!-- <router-link class="dropdown-item" to="/" >Log out</router-link> -->
                            <!-- <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a> -->
                        </div>
                    </div>
                </div>
                

                


            </div>
            <p>{{ user?.gmail }}</p>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem("info")),
            // removeUser: JSON.parse(localStorage.removeItem("info"))
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("info")
            localStorage.removeItem("admin")
            this.$router.push("/")
        },
    }

}
</script>

<style scoped>
.my-nav {
    display: flex;
    justify-content: center;
}
</style>