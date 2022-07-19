<script setup>
import allApi from '@/network/allApi'
import {inject,onMounted } from 'vue'
import HeaderVue from './components/Header.vue';
import axios from 'axios'
import { useStore } from 'vuex';
const store = useStore()
// const global = inject("global");
 const Global = global
console.log(Global,"global is ************");
const getConfig = () => {
  axios.get((Global?.apiUrl)).then((res) => {
    // console.log(res.data);
   if(res.status == 200){
    store.commit('app/CONFIG_DATA',res.data)
   }
  }).catch((e) => {
    console.log(e);
  })
  // a
  //   .config(global)
  //   .then((res) => {
  //     console.log("getwelcomemsg", res);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
};

 onMounted(()=>{
  getConfig();
 })

</script>

<template>
      <main class="page">
      <router-view />
    </main>
</template>

<style >
/* @import "./assets/css/app.css"; */
@import "./assets/css/layout_one.css";
*,
*:before,
*:after {
  box-sizing: inherit;
}
a:focus,
a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

div:focus {
  outline: none;
}

html {
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: rgba(255, 255, 255);
  line-height: 1.7;
  font-family: "Open Sans", sans-serif;
  /* background-color: #000e2e; */
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;

}
</style>
