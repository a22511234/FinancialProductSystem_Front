<template>
<main>
    <Navbar />
    <div class="my-5">
        <div class="mx-auto w-25 " style="max-width:100%;">
            <h2 class="text-center mb-3">Update LikeList</h2>
            <form @submit.prevent="updateLikelist">

                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="ProductName" class="form-label">商品名稱</label>
                        <input id="ProductName" type="text" name="ProductName" class="form-control" placeholder="ProductName" required v-model="Likelist.productName">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                        <label for="ProductCount" class="form-label">商品數量</label>
                        <input id="ProductCount" type="number" name="ProductCount" class="form-control" placeholder="ProductCount" required v-model="Likelist.productCount">
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
export default {
    name: 'UpdatePatient',
    components: {
        Navbar
    },

    data() {
        return {
            Likelist: {
                index: '',
                likeListbyID:'',
                productID:'',
                ProductName: '',
                ProductCount: '',
                Account: '',
                TotalFee:'',
                TotalAmount:'',
            }
        }
    },

    beforeMount() {
        this.getLikelist();
    },

    methods: {
        getLikelist(){
            fetch(`http://localhost:8080/likelistapi/likelist/F130914013/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.Likelist = data;
                console.log(this.Likelist);
            })

        },
        updateLikelist() {
            fetch(`http://localhost:8080/likelistapi/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.Likelist)
            })
            .then(data => {
                console.log(data);
                this.$router.push('/');
            })
        }
    }
}
</script>
