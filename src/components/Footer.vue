<script setup>
import {inject } from 'vue'
// const global = inject("global");
const Global = global
</script>

<template>
    <div class="page-footer">
        <div class="wrap">
            <ul>
                <li><router-link to="/v1/about-us">公司介绍</router-link></li>
                <li><router-link to="/v1/about-app">走进民生之语</router-link></li>
                <li><router-link to="/v1/about-software">软件介绍</router-link></li>
            </ul>
            <p class="copy-right">Copyright © 2022 {{Global?.domain}} {{Global?.company}} 版权所有 技术支持</p>
        </div>
    </div>
</template>    