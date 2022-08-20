<template>
  <el-form :model="form" label-width="120px" :rules="rules">
    <el-form-item label="Username" prop="username">
      <el-input v-model.trim="form.username" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model.trim="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Login</el-button>
      <el-button type="primary" @click="onSubmit">Register</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();

const form = reactive({
  username: '',
  password: '',
})

const onSubmit = () => {
  axios.get('/', {
    // url参数
    params: {
      id: 100,
      vip: 7
    },
    // 请求头信息
    headers: {
      name: 'admin',
      age: 20
    }
  }).then(response => {
    console.log(response);
    // 响应体
    console.log(response.data);
    console.log('submit!')
    localStorage.setItem("username", form.username);
    router.push("/home")
  })
}
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})


// const axios = require('axios')
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000'
</script>