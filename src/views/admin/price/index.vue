<template>
  <div class="execution">
    <basic-container>
      <!-- 调价管理 -->
        <!--row-update 编辑数据后确定触发该事件 -->
        <!-- search-change 点击搜索后触发该事件 -->
        <!-- page	分页配置选项，具体看下表 -->
        <!-- row-save	新增数据后点击确定触发该事件 -->
        <!-- row-del	行数据删除时触发该事件 -->
        <!-- on-load返回数据的事件 -->
        <!-- :data返回数据的存储的空数组 -->
        <!-- table-loading加载 -->
      <avue-crud ref="crud"
                 :page="page"
                 :data="tableData"
                 @on-load="getList"
                 :table-loading="tableLoading"
                 @search-change="handleFilter"
                 @refresh-change="refreshChange"
                 :option="tableOption">             
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { Londin } from '@/api/admin/price'         //引入axios接口
import {tableOption} from '@/const/crud/admin/price'    //引入表格头
import {mapGetters} from 'vuex'      //mapGetters工具函数会将store中的getter映射到局部计算属性中。   

export default {
name: 'code_draw',
data() {
  return {
    supname:"",                     //传入搜索的值
    tableData: [],                  //返回数据的空数组     
    page: {         
      total: 0,                       // 总页数
      currentPage: 1,                 // 当前页数
      pageSize: 10                    // 每页显示多少条
    },
    tableLoading: false,            //加载的显示
    tableOption: tableOption,       //表格头的信息
  }
},

created() {

},

mounted: function () {

},

computed: {
    ...mapGetters(['permissions'])    //使用对象扩展操作符把getter混入到computed中
},

methods: {

//axios获取传来的json数据
getList(page, params) {
  this.tableLoading = true          //加载显示
  Londin(Object.assign({            //复制Londin对象       
      supcustName:this.supname,             //搜索名称
      current: page.currentPage,        //当前页
      size: page.pageSize               //显示多少条
  }, params)).then(res => {             
      this.tableData = res.data.result.records;       //返回的数据
      this.page.total = res.data.result.total;        //总共多少条数据
      if(page.total==0){             
          this.supname=""       //清空搜索name，为了实现刷新
      }
      this.tableLoading=false;  
  })
},

//搜索功能
handleFilter(form) {
    this.supname=form.supcustName;      //保存supName
    this.getList(this.page,form)    //调用方法
},

//刷新功能
refreshChange(){
   this.getList(this.page)        //调用方法
},
}
}
</script>

<style lang="scss" scoped>
</style>

