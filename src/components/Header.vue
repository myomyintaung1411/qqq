
<script setup>
import {inject } from 'vue'
const Global = global

// const global = inject("global");
</script>


<template>
    <div class="page-header flex flex-col justify-center" >
        <div class="wrap">
            <div class="logo" >
                <a href="/v1" >
                    <img src="@/assets/images/layout_one/logo.jpg" alt="logo" />
                    <span class="app-name" >{{Global?.siteName}}</span>
                    </a>
            </div>
            <div class="nav" >
                <router-link to="/v1/home" class=" menu-item text-white"  aria-current="page">首页</router-link>
                    <router-link to="/v1/about-us" class="menu-item " >公司介绍</router-link>
                    <router-link to="/v1/about-app" class="menu-item " >走进民生之语</router-link>
                    <router-link to="/v1/about-software" class="menu-item router-link-active router-link-exact-active" >软件介绍</router-link>
          </div>
        </div>
    </div>
</template>

<style scoped>

.page-header {
    border-bottom: 1px solid #1a86ff;
    width: 100%;
    height: 120px;
    font-size: 16px
}

.page-header .wrap {
    margin: 0 auto;
    width: 1000px;
    /* margin-top: 37px */
}

.page-header .wrap .logo {
    position: relative;
    float: left
}

.logo a {
    text-decoration: none
}

.logo img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-top: 10px
}

.logo span.app-name {
    width: 120px;
    height: 20px;
    line-height: 20px;
    position: absolute;
    top: 30px;
    left: 70px;
    font-size: 24px;
    color: #fff
}

.logo span.app-desc {
    width: 240px;
    height: 16px;
    line-height: 16px;
    position: absolute;
    top: 40px;
    left: 70px;
    font-size: 16px;
    color: #1a86ff
}

.page-header .wrap .nav {
    float: right;
    margin-top: 25px
}

.wrap .nav .menu-item {
    display: inline;
    text-decoration: none;
    color: #ebe9e9;
    margin: 8px;
    padding: 8px 16px;
    font-weight: 700
}

.wrap .nav .menu-item:hover {
    color: #1a86ff
}

.router-link-active {
    color: #1a86ff !important
}

.wrap .nav .menu-item:last-child {
    color: #1a86ff !important;
    border-radius: 35px;
    border: 1px solid #1a86ff
}

.wrap .nav .menu-item:last-child:hover {
    color: #fff !important;
    background: #1a86ff
}
</style>