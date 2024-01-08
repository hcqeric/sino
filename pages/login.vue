<template>
    <a-card>
        <img src="/imgs/logo.jpg" />
        <h2>Login Page</h2>
        <!-- <a-input v-focus v-model="value" placeholder="Basic usage" /> -->
        <a-button type="primary" @click="handleLogin">Login</a-button>
    </a-card>
    
 </template>

 <script lang="ts" setup>
    const handleLogin = ()=>{
        message.info("Login Clicked!!!");
        navigateTo('/dashboard')
    }
    const value = ref<string>('');
</script>