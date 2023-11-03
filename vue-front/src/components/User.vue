<template>
     <div class = "container">
            <h4 class = "text-center"> User Info</h4>
            <table class = "table table-striped">
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
            <h4 class = "text-center"> Product List</h4>
            <table class = "table table-striped">
                <thead>
                    <tr>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> <button type="button" class="btn btn-primary">新增</button> </th>
                    </tr>
                    <tr>
                        <th> 商品 ID</th>
                        <th> 商品名稱</th>
                        <th> 商品價格</th>
                        <th> 手續費率</th>
                        <th> 動作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" v-bind:key="product.id">
                        <td> {{product.productID }}</td>
                        <td> {{product.productName }}</td>
                        <td> {{product.price}}</td>    
                        <td> {{product.feeRate}}</td>
                        <td> <button type="button" class="btn btn-warning">修改</button>  &nbsp;&nbsp;
                            <button type="button" class="btn btn-danger">刪除</button> &nbsp;&nbsp;
                            <button type="button" class="btn btn-info">加入清單</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>
<script>
import UserService from '../service/UserService';
import ProductService from '../service/ProductService';
export default {
    name: 'Users',
    data(){
        return {
            users: [],products:[]
        }
    },
    methods: {
        getUsers(){
            UserService.getUsers().then((response) => {
                this.users = response.data;   
                console.log(response.data)
            });
        },
        getProducts(){
            ProductService.getProducts().then((response) =>{
                this.products = response.data;   
                console.log(response.data)
            });
        }
    },
    created() {
        this.getUsers();
        this.getProducts();
    }
    
}


</script>

