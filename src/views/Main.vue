<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import {inject,computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
// const global = inject("global");
const Global = global
const configData = computed(() => store.getters["app/CONFIG"]);

  function  redirectToDownload(type) {
    console.log(configData.value.data,"download *********");
      if (!configData.value.data.iosAppUrl || !configData.value.data.androidAppUrl) {
        alert(
          "请刷新网页以获取APP下载链接！\n Please refresh the page to get App download link!"
        );
        return;
      }
      if (type == 0) {
        // ios
        window.open(configData.value.data.iosAppUrl);
      } else if (type == 1) {
        // android
        window.open(configData.value.data.androidAppUrl);
      } 
    }

</script>

<template>
  <div class="bg-[#000e2e] h-full hidden sm:block">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
  <div class="block sm:hidden h-screen mobile">
      <img class="bground_m" src="@/assets/images/layout_one/mobile/mobilebg.jpg" alt="">
      <div class="header_m"><img src="@/assets/images/layout_one/logo.png" alt="" >
        <p class="pt-3">{{Global?.siteName}}</p>
      </div>
      <div class="adv-txt" >
        <p  style="font-weight: 700;">{{Global?.siteName}}</p>
        <p  style="font-weight: 600;"> 加密安全、聊得放心、用的安心。零距离社交、大雁时时刻刻陪伴着您。从此距离不再遥远、自由不再受限。 </p>
        <p  style="font-weight: 700;"></p>
      </div>
      <div class="main_m" ><img src="@/assets/images/layout_one/mobile/mb.png" alt="" ></div>
      <div class="down_m" >
        <div class="down_b" >
          <div class="" ><a href="#"  >
              <div @click="redirectToDownload(0)" class="down_b1" ><img src="@/assets/images/layout_one/mobile/ios.svg" alt="" >
                <p >苹果下载</p>
              </div>
            </a>
            </div>
            <a href="#" >
            <div class="down_b1" @click="redirectToDownload(1)" >
              <div class="" ><img src="@/assets/images/layout_one/mobile/android.svg" alt="" >
                <p >安卓下载</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div id="footer">
        <p > Copyright © {{Global?.siteName}} Co., Ltd. All rights reserved. </p>
      </div>
  </div>
</template>
