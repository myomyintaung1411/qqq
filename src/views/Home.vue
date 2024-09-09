<script setup>
import {inject,computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
// const global = inject("global");
const Global = global

const configData = computed(() => store.getters["app/CONFIG"]);

  function  redirectToDownload(type) {
    //console.log(configData.value.data,"download *********");
      // if (!configData.value.data.iosAppUrl || !configData.value.data.androidAppUrl) {
      //   alert(
      //     "请刷新网页以获取APP下载链接！\n Please refresh the page to get App download link!"
      //   );
      //   return;
      // }
      if (type == 0) {
        // ios
       // window.open(configData.value.data.iosAppUrl);
       window.open(Global.iosDownload)
      } else if (type == 1) {
        // android
        window.open(Global.androidDownload)
      //  window.open(configData.value.data.androidAppUrl);
      } else if (type == 2) {
        // desktop
        window.open(configData.value.data.pcDownloadAppUrl);
      }
    }

</script>
<template>
<div class="page-body h-fit ">
    <div class="home-page ">
        <div class="banner ">
            <div class="download wrap">
                <span class="iphone" @click="redirectToDownload(0)"></span>
                <span class="android" @click="redirectToDownload(1)"> </span>
                <!-- <span class="windows" @click="redirectToDownload(2)"></span> -->
                <!-- <img src="@/assets/images/layout_one/iphone.png" alt="iPhone Screen Shot" class="iphone-scrrenshot"> -->
                <p class="title">{{Global?.siteName}}</p>
                <p class="description">让你随时都能结交新朋友，让你随地都能与亲友联络，
                    让你无论身处何方都能远离孤独、寂寞；与爱人传达爱意、与亲友增进感情、与新朋友言欢
               </p>
            </div>
        </div>
    </div>
 </div>
</template>

<style scoped>
</style>
