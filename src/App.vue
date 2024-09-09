<script setup>
import allApi from '@/network/allApi'
import {inject,onMounted,ref } from 'vue'
import HeaderVue from './components/Header.vue';
import axios from 'axios'
import { useStore } from 'vuex';
const store = useStore()
// const global = inject("global");
 const Global = global
 const is_wechat = ref(false)
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

// Function to detect if the user is in WeChat's in-app browser
function isWeChat() {
    // var ua = navigator.userAgent.toLowerCase();
    // return ua.indexOf('micromessenger') !== -1;
   // how to check it is link is in wechat browser below code right?
//是否是微信浏览器
    // if (/(micromessenger)/i.test(navigator.userAgent)) { 
    // //是否电脑微信或者微信开发者工具
    //   if(/(WindowsWechat)/i.test(navigator.userAgent) || /(wechatdevtools)/i.test(navigator.userAgent)){
    //    // alert('电脑微信或者微信开发者工具')
    //    is_wechat.value = true
    //    store.commit('app/IS_WECHAT',true)
    //    console.log(is_wechat.value,"trieeeeeeeeeeee")
    //   }else{
    //     //手机微信打开的浏览器
    //   //alert('手机微信')
    //   is_wechat.value = true
    //   store.commit('app/IS_WECHAT',true)
    //   console.log(is_wechat.value,"trieeeeeeeeeeee")


    //   }
    // } else {
    //  // alert('其他浏览器')
    //  is_wechat.value = false
    //  store.commit('app/IS_WECHAT',false)
    //  console.log(is_wechat.value,"falseeeeeeeeeeeeeeee")


    // }

    const ua = window.navigator.userAgent.toLowerCase();
    const reg = /(micromessenger|wechatdevtools|WindowsWechat|其他可能的标识)/i;

        is_wechat.value = reg.test(ua);
        store.commit('app/IS_WECHAT', is_wechat.value);
        console.log(is_wechat.value,"ggggggggggggg")

}




 onMounted(()=>{
  isWeChat()
  //getConfig();
 })

</script>

<template>

      <main  class="page">
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
