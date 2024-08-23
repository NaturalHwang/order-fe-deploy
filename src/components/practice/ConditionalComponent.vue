<template>
    <h1>Condition component</h1>
    <v-btn @click="changeState" color="primary"><h4>{{ Login }}</h4></v-btn>
    <div v-if="isLogined">환영합니다 고객님</div>
    <div v-else>로그인해주세요</div>
    <br><br>
    <h1>상품 목록 조회</h1>
    <ul>
        <!-- v-for에서는 반드시 key값을 지정. key를 지정함으로서 각 요소마다의 고유 식별 -->
        <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>

</template>
<script>
    export default{
        data(){
            return{
                isLogined:false,
                Login: "Login",
                products:[
                    {id:1, name:"apple"},
                    {id:2, name:"banana"},
                    {id:3, name:"strawberry"}
                ],
            }
        },
        methods:{
            changeState(){
                if(this.isLogined){
                    this.isLogined = false,
                    this.Login = "Login"
                } else{
                    this.isLogined = true,
                    this.Login = "LogOut"
                }
            }
        }
    }
</script>