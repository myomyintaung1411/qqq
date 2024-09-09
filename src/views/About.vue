<script setup>
import { ref } from 'vue'
// import {inject } from 'vue'
// const global = inject("global");
const showMore = ref(false)
const Global = global

</script>

<template>
  <div class="page-body">
    <div class="aboutus-page">
      <div class="list wrap">
        <div class="announcement">
          <div class="time"><span>29</span><span>2021.09</span></div>
          <div class="article">

            <h2>公司介绍</h2><span></span><span>2021-09-29</span>

            <p v-if="!showMore">{{Global?.siteName}}科技有限公司是国内专业的软件开发、人工智能研究、定制开发公司。自成立以来，秉承"民生之语、协作、奉献、超越"的精神，着力打造集战略咨询... <span>
                <i @click="showMore = !showMore">查看全文</i>
              </span>
            </p>
            <p v-if="showMore" @click="showMore = !showMore">
              {{Global?.siteName}}科技有限公司是国内专业的软件开发、人工智能研究、定制开发公司。自成立以来，秉承"民生之语、协作、奉献、超越"的精神，着力打造集战略咨询、平台技术和专业服务为一体的软件企业。在银行、医疗、物流、制造、培训、核能、汽车等行业拥有丰富的软件开发经验。
              我公司涵盖多种应用与技术平台，拥有成熟的信息系统和软件开发外包业务范围，我们的专业团队将作为您的IT部门来开展长期紧密的合作，立足于您的业务和信息化目标，开发符合您业务目标和商业价值的软件。
              我们将抓住机遇，坚持以人为本，加大自主产品创新，提升重大工程实施能力，加快规范化进程，实现规模经济和跨越式发展，立志打造“中国软件行业优秀企业”。 <span><i>收起</i></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
