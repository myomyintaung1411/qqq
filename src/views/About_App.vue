<script setup>
// import {inject } from 'vue'
// const global = inject("global");
const Global = global
</script>


<template>

    <div class="page-body" data-v-5fc70c0a="">
        <div class="aboutapp wrap">
            <div class="left-nav">
                <ul>
                    <li>关于我们</li>
                    <li>团队</li>
                </ul>
            </div>
            <div class="right-content">
                <div class="app-article">
                    <div class="pb-32">
                        <div class="box">
                            <h1>关于我们</h1>
                            <p class="content">
                                {{Global?.siteName}}科技有限公司是国内专业的软件开发、人工智能研究、定制开发公司。自成立以来，秉承"诚信、协作、奉献、超越"的精神，着力打造集战略咨询、平台技术和专业服务为一体的软件企业。在银行、医疗、物流、制造、培训、核能、汽车等行业拥有丰富的软件开发经验。
                                我公司涵盖多种应用与技术平台，拥有成熟的信息系统和软件开发外包业务范围，我们的专业团队将作为您的IT部门来开展长期紧密的合作，立足于您的业务和信息化目标，开发符合您业务目标和商业价值的软件。
                                我们将抓住机遇，坚持以人为本，加大自主产品创新，提升重大工程实施能力，加快规范化进程，实现规模经济和跨越式发展，立志打造“中国软件行业优秀企业”。</p>
                        </div>
                    </div>
                    <div>
                        <div class="contact-box">
                            <h1>{{Global?.siteName}}</h1>
                            <ul class="content">
                                <li class="">
                                    <span></span><span>{{Global?.company}}</span>
                                </li>
                                <!-- <li class="hidden">
                                    <span>地址</span><span>-</span>
                                </li> -->
                                <!-- <li class="">
                                  <span>电子邮件</span><span>-</span>
                                </li>
                                <li class="">
                                   <span>官方网站</span><span>https://www.dayan.win</span>
                                </li> -->
                                
                                <!-- <div  class=" float-left absolute left-0">hello</div> -->
                            </ul>
                            <div class="pb-48 flex ">
                               <div class="flex flex-col">
                                <li> 电子邮件</li>
                               <span>-</span>
                               </div>
                               <div class="flex flex-col">
                                <li> 官方网站</li>
                               <span>{{Global?.domain}}</span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>