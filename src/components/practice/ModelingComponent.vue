<template>
    <!-- HTML 요소의 동적 값 표시 -->
    <!-- HTML 요소 안에 중괄호 2번을 사용함으로서 script에 정의된 변수 값을 화면에 표시 -->
    <h1>hello world {{ language }}</h1>

    <!-- :value 문법을 사용하면 단방향 데이터 바인딩 -->
    <input type="text" :value="value1">
    <!-- v-model은 양방향 데이터 바인딩(화면에서 입력한 값이 JS를 변경시킴) -->
    <input type="text" v-model="value2">
    <button @click="showValue">변수 변경사항 확인</button>
    <br><br>
    <input type="text" v-model="count">
    <br>
    <v-btn @click="countUp" color="primary">숫자 올리기</v-btn>
    <v-btn @click="setZero" color="primary">초기화</v-btn>
    <br><br>

    <h2>{{ doubleCount }}</h2>
    <br>

    <h2>{{ count2 }}</h2>
    <v-btn @click="countUp2" color="primary">숫자 올리기</v-btn>
    <v-btn @click="setZero2" color="primary">초기화</v-btn>
</template>
<script>
    export default{
        data(){
            return{
                language:"java",
                value1:"java",
                value2:"python",
                count: 0,
                count2: 0
            }
        },
        // computed는 종속된 반응형 데이터가 변경될 때에 함수를 다시 실행하여 값을 계산하는 함수
        computed:{
            doubleCount(){
                return this.count * 2
            }
        },
        created(){
            alert("CREATED 함수 호출")
        },
        methods:{
            showValue(){
                alert(this.value2)
            },
            countUp(){
                this.count++
            },
            setZero(){
                this.count = 0
            },
            countUp2(){
                this.count2++
            },
            setZero2(){
                this.count2  = 0
            }
        }
    }
</script>