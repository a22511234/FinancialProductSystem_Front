<template>
<main>
    <!--Bootstrap Navbar-->
    <div class="container">
        <h4 class="text-center"> User Info</h4>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th> User Id</th>
                    <th> User Name</th>
                    <th> User Email</th>
                    <th> User Account</th>
                    <th> Action</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                    <td> {{user.userID }}</td>
                    <td> {{user.userName }}</td>
                    <td> {{user.email}}</td>
                    <td> {{user.account}}</td>
                    <td> <button type="button" class="btn btn-warning">修改</button> </td>
                </tr>
            </tbody>
        </table>
        <ul>
            <li><RouterLink to="/AddProduct">add</RouterLink></li>
        </ul>
        <div class="col-md-12">
            <h4 class="text-center"> Product List
                <a href="/addProduct" class="btn btn-primary" style="float: right;">新增</a></h4>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"> 商品 ID</th>
                        <th scope="col"> 商品名稱</th>
                        <th scope="col"> 商品價格</th>
                        <th scope="col"> 手續費率</th>
                        <th scope="col"> 動作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" v-bind:key="product.id">
                        <td> {{product.productID }}</td>
                        <td> {{product.productName }}</td>
                        <td> {{product.price}}</td>
                        <td> {{product.feeRate}}</td>
                        <td>
                            <a class="btn btn-warning" :href="`/edit/${product.id}`">修改</a> &nbsp;&nbsp;
                            <button type="button" class="btn btn-danger" @click="deleteProduct(patient.id)">刪除</button> &nbsp;&nbsp;
                            <button type="button" class="btn btn-info">加入清單</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
</template>

<script>
import UserService from '../service/UserService';
import ProductService from '../service/ProductService';

export default {
    name: 'Users',
    data() {
        return {
            users: [],
            products: []
        }
    },
    methods: {
        getUsers() {
            UserService.getUsers().then((response) => {
                this.users = response.data;
                console.log(response.data)
            });
        },
        getProducts() {
            ProductService.getProducts().then((response) => {
                this.products = response.data;
                console.log(response.data)
            });
        },
        deleteProduct(id) {
            ProductService.deleteProducts(id).then((response) => {
                this.products = response.data;
                console.log(response.data)
            });
        }
    },
    created() {
        this.getUsers();
        this.getProducts();
        this.deleteProduct();
    }

}
</script>
