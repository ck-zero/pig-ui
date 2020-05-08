<template>
  <div class="execution">
    <basic-container>
      <!-- 批量申请日志 -->
        <!--row-update 编辑数据后确定触发该事件 -->
        <!-- search-change 点击搜索后触发该事件 -->
        <!-- page	分页配置选项，具体看下表 -->
        <!-- row-save	新增数据后点击确定触发该事件 -->
        <!-- row-del	行数据删除时触发该事件 -->
        <!-- on-load返回数据的事件 -->
        <!-- :data返回数据的存储的空数组 -->
        <!-- table-loading加载 -->
      <avue-crud  ref="crud"
                 :page="page"
                 :data="tableData"
                 @on-load="getList"
                 :table-loading="tableLoading"
                 @search-change="handleFilter"
                 @refresh-change="refreshChange"
                 :option="tableOption">
        <template slot-scope="scope" slot="batchApplyFileAddr">
            <el-link :href="'https://view.officeapps.live.com/op/view.aspx?src='+scope.row.batchApplyFileAddr" target="_blank">{{scope.row.batchApplyFileAddr}}</el-link>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { batchList} from '@/api/admin/putaway'   //引入接口
import {tableOption} from '@/const/crud/admin/batch'   //表格头

export default {
name: 'putaway',
data() {
    return {
        supname:"",                 //保存supname
        tableData: [],              //空数组
        page: {
          total: 0,                   // 总页数
          currentPage: 1,             // 当前页数
          pageSize: 10                // 每页显示多少条
        },
        tableLoading: false,        //加载
        tableOption: tableOption,   //赋值表格头

    }
},

created() {

},

mounted: function () {
  
},

computed: {
 
},

methods: {  


//返回数据的方法 
getList(page, params) {
    this.tableLoading = true        //加载
    batchList(Object.assign({       //复制fetchList对象
        supcustName:this.supname,
        current: page.currentPage,  //传入当前页数
        size: page.pageSize         //传入每页显示多少条
    }, params)).then(res => {
        console.log(res)
        if(res.data.code == 10000){
            this.tableData = res.data.result.records;       //返回的数据
            this.page.total = res.data.result.total;        //总的数据
            this.page.currentPage=res.data.result.current;  //当前页数
            this.page.pageSize=res.data.result.size;        //每页显示多少条
            if(page.total==0){
            this.supname=""   //清空supname
            }
           this.tableLoading=false;    //加载
        }
       else if(res.data.code == 10008){
           this.tableData=undefined
           this.tableLoading=false;    //加载
        }
    })
 
},

  

//搜索功能
handleFilter(form) {
    this.page.currentPage=1       //搜索时跳转到第一页
    this.supname=form.supcustName;     //保存supname
    this.getList(this.page,form)   //调用方法
},

//刷新接口
refreshChange(){
    this.page.currentPage=1
    this.getList(this.page)
},
}
}
</script>

<style lang="scss" scoped>
 .over{
   overflow: scroll;
 }
 .height{
   line-height: 183px;
 }
  .co_size{
    color: rgb(184, 184, 184);
    font-size: 0.1em;
  }
</style>

