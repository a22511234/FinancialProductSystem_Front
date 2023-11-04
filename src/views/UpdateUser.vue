<template>
<main>
    <Navbar />
    <div class="my-5">
        <div class="mx-auto w-25 " style="max-width:100%;">
            <h2 class="text-center mb-3">Update User</h2>
            <form @submit.prevent="updateUser">
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="ProductID" class="form-label">使用者編號</label>
                        <input id="userID" type="text" name="userID" readonly ='readonly' class="form-control" placeholder="userID" required v-model="user.userID">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="ProductName" class="form-label">使用者名稱</label>
                        <input id="userName" type="text" name="userName" class="form-control" placeholder="userName" required v-model="user.userName">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="Price" class="form-label">使用者Email</label>
                        <input id="Email" type=email step=0.01 name="Price" class="form-control" placeholder="Email" required v-model="user.email">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="FeeRate" class="form-label">使用者帳號</label>
                        <input id="Account" type=text step=0.01 name="FeeRate" class="form-control" placeholder="Account" required v-model="user.account">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 form-group">
                        <input class="btn btn-primary w-100" type="submit" value="Submit">
                    </div>
                </div>

                <div>

                </div>
            </form>

        </div>
    </div>

</main>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import UserService from '../service/UserService';
export default {
    name: 'UpdateUser',
    components: {
        Navbar
    },

    data() {
        return {
            user: {
                userID: '',
                userName: '',
                Email: '',
                Account: '',
            }
        }
    },

    beforeMount() {
        this.getUser();
    },

    methods: {
        getUser(){
            fetch(`http://localhost:8080/userapi/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.user = data;
                console.log(this.user);
            })

        },
        updateUser() {
            UserService.updateUser(this.user).then((response) => {
                this.user = response.data;
                console.log(response.data)
            }) .then(data => {
                console.log(data);
                this.$router.push('/');
            })

        }
    }
}
</script>
