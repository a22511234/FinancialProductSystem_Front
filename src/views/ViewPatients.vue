<template>
<main>
    <Navbar />
    <div class="container">
        <div class="col-md-12">
            <h4 class="text-center"> User Info</h4>
            <table class="table table-striped" style="text-align:center;">
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
                        <td> <a class="btn btn-warning" :href="`/edituser/${user.userID}`">修改</a> &nbsp;&nbsp; </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <br>
            <br>
        </div>
        <div class="col-md-12">
            <h4 class="text-center"> Product List
                <a href="/addProduct" class="btn btn-primary" style="float: right;">新增</a>
            </h4>
            <table class="table table-striped" style="text-align:center;">
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
                            <a class="btn btn-warning" :href="`/edit/${product.productID}`">修改</a> &nbsp;&nbsp;
                            <button type="button" class="btn btn-danger" @click="deleteProduct(product.productID)">刪除</button> &nbsp;&nbsp;
                            <button type="button" class="btn btn-info" @click="addLikelist(product.productID)">加入清單</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <br>
            <br>
        </div>
        <div class="col-md-12">
            <h4 class="text-center"> Like List</h4>
            <table class="table table-striped" style="text-align:center;">
                <thead>
                    <tr>
                        <th> 編號</th>
                        <th> 商品名稱</th>
                        <th> 商品數量</th>
                        <th> 扣款帳號</th>
                        <th> 手續費用</th>
                        <th> 預計扣款總金額</th>
                        <th> 動作 </th>
                    </tr>

                </thead>
                <tbody>
                    <tr v-for="likeList in likeLists" v-bind:key="likeList.id">
                        <td> {{likeList.index }}</td>
                        <td> {{likeList.productName }}</td>
                        <td> {{likeList.productCount}}</td>
                        <td> {{likeList.account}}</td>
                        <td> {{likeList.totalFee}}</td>
                        <td> {{likeList.totalAmount}}</td>
                        <td> <a class="btn btn-warning" :href="`/editlist/${likeList.likeListbyID}`">修改</a> &nbsp;&nbsp;
                            <button type="button" class="btn btn-danger" @click="deleteLikeList(likeList.likeListbyID)">刪除</button> &nbsp;&nbsp; </td>
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
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Users',
    components: {
        Navbar
    },
    data() {
        return {
            users: [],
            products: [],
            likeLists:[]
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
        getLikeList() {
                fetch('http://localhost:8080/likelistapi/likelist/F130914013')
                .then(res => res.json())
                .then(data => {
                    this.likeLists = data
                    console.log(data)
                })
            },
        deleteProduct(id) {
            fetch(`http://localhost:8080/productapi/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getProducts()
                    this.getLikeList()
                })
        },
        deleteLikeList(id) {
            fetch(`http://localhost:8080/likelistapi/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getLikeList()
                })
        },
        addLikelist(id) {
            fetch(`http://localhost:8080/likelistapi/F130914013/${id}`, {
                    method: 'POST'
                })
                .then(data => {
                    console.log(data)
                    this.getLikeList()
                })
        }
    },
    created() {
        this.getUsers();
        this.getProducts();
        this.getLikeList();
    }

}
</script>
