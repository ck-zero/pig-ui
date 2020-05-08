<template>
  <div class="execution">
    <basic-container>
      <!-- 建档管理 -->
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
                 v-model="form"
                 @refresh-change="refreshChange"
                 @search-change="handleFilter"
                 :option="tableOption"
                 >
        <template slot="status" slot-scope="scope" >
        <span v-if="scope.row.status==8" style="color:red">待下架</span>
        <span v-if="scope.row.status==1" style="color:#00ec00">已下架</span>
        </template>         
        <template slot-scope="scope" slot="menuLeft">
            <el-radio v-model="radio2" label="" border size="medium" @change="handleZero">全部</el-radio>
            <el-radio v-model="radio2" label="8" border size="medium" @change="handleSelect">待下架</el-radio>
            <el-radio v-model="radio2" label="1" border size="medium" @change="handleOnlod">已下架</el-radio>
        </template>
        <template slot-scope="scope" slot="menu">
          <el-button type="text"
                     icon="el-icon-check"
                     size="mini"
                     v-if="sys_newFile_add"
                     :disabled="scope.row.status ==1"
                     @click="handleEdit(scope.row,scope.index)">
               下架
          </el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import {fetchList,putObj} from '@/api/admin/discard'         //引入接口
import {tableOption} from '@/const/crud/admin/discard'         //引入表格头
import {mapGetters} from 'vuex'       //mapGetters工具函数会将store中的getter映射到局部计算属性中。

export default {
name: 'manage',
data() {
    return {           
      form:{},                    //为当前编辑或者新增的表单对象
      tableData: [],              //保存的空数组
      page: {
      total: 0,           // 总页数
      currentPage: 1,   // 当前页数
      pageSize: 10 //每页显示多少条
      },
      tableLoading: false,          //加载
      tableOption: tableOption,     //表格头
      sys_newFile_lok:false,
      sys_newFile_add:false,
      radio2:"",
    }
},
created() {
   this.sys_newFile_lok=this.permissions["sys_newFile_lok"],
   this.sys_newFile_add=this.permissions["sys_newFile_add"]
},
mounted() {

},

computed: {
    ...mapGetters(['permissions'])   //使用对象扩展操作符把getter混入到computed中
},

methods: {  
handleZero(item){
  this.getList(item)
},
handleOnlod(item){
    this.getList(item)
},
handleSelect(item){
//  this.secondItemClass=item.itemClsName
   this.getList(item)
},
getList(page, params) {
    this.tableLoading = true    //加载
    fetchList(Object.assign({     //复制fetchList对象
        supcustName:this.supname,
        status:this.radio2,
        current: page.currentPage,  //传入的当前页数
        size: page.pageSize         //传入的多少条
    }, params)).then(res => {
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
        //    this.$message.error('这是一条无数据的消息');
           this.tableData=undefined
           this.tableLoading=false;    //加载
           
        }
    })
},
/**
 * @title 打开新增窗口
 * @detail 调用crud的handleadd方法即可
 *
 **/
handleAdd: function () {
    this.$refs.crud.rowAdd()
},  

handleEdit(row, index,code) {
    let _this=this;
    _this.$confirm("是否确认建档 ", {    //提示框
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(()=>{
      putObj(Object.assign({
          id: row.id,    //传入id 
      })).then(res => {
          _this.getList(_this.page)      //刷新页面
          _this.$notify({     
              title: "成功",
              message: "操作成功",     //成功的提示
              type: "success",
              duration: 2000
          });
      })
    }).catch(function(){        //取消的事件
      _this.$message({
        type: 'info',
        message: '已取消'
      });    
    })
},



//刷新按钮
refreshChange(){
    this.page.currentPage=1
    this.getList(this.page)
},

//搜索功能
handleFilter(form) {
    this.page.currentPage=1         //搜索时转到第一页
    this.supname=form.supcustName;
    this.getList(this.page,form)
},


}
}
</script>

<style lang="scss" scoped>

</style>
