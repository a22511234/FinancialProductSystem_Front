<template>
<main>
    <Navbar />
    <div class="my-5">
        <div class="mx-auto w-25 " style="max-width:100%;">
            <h2 class="text-center mb-3">Update Product</h2>
            <form @submit.prevent="updateProduct">
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="ProductID" class="form-label">商品編號</label>
                        <input id="ProductID" type="text" name="ProductID" readonly ='readonly' class="form-control" placeholder="ProductID" required v-model="product.productID">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="ProductName" class="form-label">商品名稱</label>
                        <input id="ProductName" type="text" name="ProductName" class="form-control" placeholder="ProductName" required v-model="product.productName">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="Price" class="form-label">商品價格</label>
                        <input id="Price" type=number step=0.01 name="Price" class="form-control" placeholder="Price" required v-model="product.price">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="FeeRate" class="form-label">商品手續費</label>
                        <input id="FeeRate" type=number step=0.01 name="FeeRate" class="form-control" placeholder="FeeRate" required v-model="product.feeRate">
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
import ProductService from '../service/ProductService';
export default {
    name: 'UpdatePatient',
    components: {
        Navbar
    },

    data() {
        return {
            product: {
                ProductID: '',
                ProductName: '',
                Price: '',
                FeeRate: '',
            }
        }
    },

    beforeMount() {
        this.getPatients();
    },

    methods: {
        getPatients(){
            fetch(`http://localhost:8080/productapi/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.product = data;
                console.log(this.product);
            })

        },
        updateProduct() {
            ProductService.updateProducts(this.product).then((response) => {
                this.products = response.data;
                console.log(response.data)
            }) .then(data => {
                console.log(data);
                this.$router.push('/');
            })

        }
    }
}
</script>
