<template>
    <div class="login-container">
        <!-- 백그라운드 이미지를 감싸는 래퍼 -->
        <div class="background-image-wrapper">
            <!-- 로그인 페이지의 백그라운드 이미지 -->
            <img :src="loginImage" alt="Login Page" class="background-image">
        </div>
        <!-- 로그인 폼을 감싸는 래퍼 -->
        <div class="login-form-container">
            <!-- 로그인 폼 -->
            <div class="login-form">
                <h1 class="title">FLINT</h1>
                <!-- 이메일 입력 필드 -->
                <input v-model="email" type="text" placeholder="Email" class="input-field">
                <!-- 비밀번호 입력 필드 -->
                <input v-model="password" type="password" placeholder="Password" class="input-field">
                <!-- 로그인 버튼 -->
                <button @click="login" class="login-button">LOGIN</button>
                <!-- 추가 링크들 (ID 찾기, 비밀번호 찾기, 회원가입) -->
                <div class="links">
                    <a href="/member/findemail" class="link">FIND ID</a> | 
                    <a href="/member/findpassword" class="link">FIND Password</a> | 
                    <a href="/member/signup" class="link">JOIN</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import loginImage from '@/assets/Main_IMG.png' // 로그인 페이지의 배경 이미지 경로 임포트

export default {
    name: 'LoginPage',
    data() {
        return {
            loginImage, // 배경 이미지 데이터
            email: '', // 이메일 입력 데이터
            password: '' // 비밀번호 입력 데이터
        }
    },
    methods: {
        // 로그인 함수
        async login() {
            try {
                // 서버로 로그인 요청을 보냄
                const response = await axios.post('http://localhost:8080/member/login', {
                    email: this.email,
                    password: this.password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                console.log(response.data);
                // 로그인 성공 시 처리
                alert(response.data.status_message)
            } catch (error) {
                console.error('로그인 오류:', error.response ? error.response.data : error.message)
                // 로그인 실패 시 처리
                alert(error.response ? error.response.data.error_message : error.message)
            }
        }
    }
}
</script>

<style scoped>
.login-container {
    display: flex; /* Flexbox를 사용하여 자식 요소 정렬 */
    height: 100vh; /* 화면 높이 100% */
    width: 100%; /* 화면 너비 100% */
    overflow: hidden; /* 넘치는 콘텐츠 숨김 */
}

.background-image-wrapper {
    flex: 3; /* Flexbox에서 3배 공간 차지 */
    position: relative; /* 상대적 위치 설정 */
    overflow: hidden; /* 넘치는 콘텐츠 숨김 */
}

.background-image {
    width: 100%; /* 이미지 너비 100% */
    height: 100%; /* 이미지 높이 100% */
    object-fit: cover; /* 이미지 비율 유지하며 영역 채우기 */
    position: absolute; /* 절대적 위치 설정 */
    top: 0; /* 상단 위치 설정 */
    left: 0; /* 좌측 위치 설정 */
}

.login-form-container {
    flex: 1; /* Flexbox에서 1배 공간 차지 */
    display: flex; /* Flexbox 사용 */
    justify-content: center; /* 가운데 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
    background-color: white; /* 배경색 흰색 */
}

.login-form {
    width: 80%; /* 너비 80% */
    max-width: 400px; /* 최대 너비 400px */
    padding: 20px; /* 내부 여백 20px */
    border-radius: 8px; /* 테두리 둥글게 */
    display: flex; /* Flexbox 사용 */
    flex-direction: column; /* 세로 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
}

.title {
    font-size: 2em; /* 글꼴 크기 2em */
    margin-bottom: 20px; /* 아래 여백 20px */
    color: #8F7598; /* 글꼴 색상 */
}

.input-field {
    width: 100%; /* 너비 100% */
    padding: 10px; /* 내부 여백 10px */
    margin: 10px 0; /* 상하 여백 10px */
    border: 1px solid #ccc; /* 테두리 */
    border-radius: 4px; /* 테두리 둥글게 */
}

.login-button {
    width: 100%; /* 너비 100% */
    padding: 10px; /* 내부 여백 10px */
    margin-top: 10px; /* 상단 여백 10px */
    background-color: #8F7598; /* 배경색 */
    color: white; /* 글자색 */
    border: none; /* 테두리 없음 */
    border-radius: 4px; /* 테두리 둥글게 */
    cursor: pointer; /* 커서 포인터 모양 */
}

.login-button:hover {
    background-color: #8F7598; /* 배경색 유지 */
}

.links {
    margin-top: 10px; /* 상단 여백 10px */
    display: flex; /* Flexbox 사용 */
    justify-content: center; /* 가운데 정렬 */
}

.link {
    margin: 0 5px; /* 좌우 여백 5px */
    color: #8F7598; /* 글꼴 색상 */
    text-decoration: none; /* 밑줄 없음 */
    font-size: 14px; /* 글꼴 크기 14px */
}

.link:hover {
    text-decoration: underline; /* 호버 시 밑줄 표시 */
}
</style>