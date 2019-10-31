<template>
  <div class="login-container"
       @keyup.enter.native="handleLogin">
    <div class="login-weaper  animated bounceInDown">
      <div class="login-left">
        <img class="img"
             src="/img/sz1.png"
             alt="">
        <p class="title">{{website.infoTitle}}</p>
        <p>{{code}}</p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <userLogin v-if="activeName==='user'"></userLogin>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '@/styles/login.scss'
  import userLogin from "./userlogin";
  import {mapGetters} from "vuex";
  import {getStore, setStore} from "@/util/store";
  import {dateFormat} from "@/util/date";
  import {validatenull} from "@/util/validate";

  export default {
    name: "login",
    components: {
      userLogin
    },
    data() {
      return {
        activeName: "user",
        code:""
      };
    },
    watch: {},
    created() {
            let nowDate = new Date();
            let date = { 
            year: nowDate.getFullYear(),
            month: nowDate.getMonth() + 1,
            date: nowDate.getDate(),
            }
          
            let systemDate = date.year + '年'  + date.month + '月'+ date.date +"日";
            this.code=systemDate;
    },
    mounted() {
    },
    computed: {
      ...mapGetters(["website"])
    },
    props: [],
    methods: {

    }
  };
</script>

