<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5">
                        회원 목록
                    </v-card-title>
                    <v-card-text>
                        <v-data-table
                        :headers="tableHeaders"
                        :items="memberList"
                        >
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            tableHeaders:[{title:'ID', key: 'id', align:'start'},
             {title:'이름', key: 'name', align:'start'}, 
             {title:'EMAIL', key:'email', align:'start'},
             {title:'주문수량', key:'orderCount', align:'start'}],
             memberList:[]
        }
    },
    async created(){
        // const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`, 토큰헤더자리)
        // const token = localStorage.getItem('token')
        // {"headers" : {"Authorization" : 'Bearer 토큰값'}, {"Content-Type" : 'application ~~~~'}}
        // const headers = {Authorization : `Bearer ${token}`}
        // const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`, {"headers":headers})
        // const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`, {headers})
        try{
            const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`)
            this.memberList = response.data.result.content 
        }catch(e){
            console.log(e)
        }
    }
}
</script>