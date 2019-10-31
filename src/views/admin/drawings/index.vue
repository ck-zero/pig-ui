<template>
  <div class="execution">
    <basic-container>
      <!-- 财务模块 -->
        <!--row-update 编辑数据后确定触发该事件 -->
        <!-- search-change 点击搜索后触发该事件 -->
        <!-- page	分页配置选项，具体看下表 -->
        <!-- row-save	新增数据后点击确定触发该事件 -->
        <!-- row-del	行数据删除时触发该事件 -->
        <!-- on-load返回数据的事件 -->
        <!-- :data返回数据的存储的空数组 -->
        <!-- table-loading加载 -->
        <!-- @keyup.enter.native  -->
        <!-- ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例： -->
      <avue-crud ref="crud"
                 :page="page"
                 :data="tableData"
                 @on-load="getList"
                 :table-loading="tableLoading"
                 @search-change="handleFilter"
                 @refresh-change="refreshChange"
                 :option="tableOption">
         <template>          
          <el-button 
             slot="menuLeft"
             size="mini"                     
             @click="drawings()">财务综合管理
          </el-button>
        </template>       
        <template slot-scope="scope" slot="menu">
          <el-button type="text" 
                     icon="el-icon-check"
                     size="mini"
                     :disabled="scope.row.status == 1 || scope.row.status == 2"
                     @click="handleEdit(scope.row,scope.index)">同意
          </el-button>
          <el-button type="text"
                     icon="el-icon-delete"
                     size="mini"
                     :disabled="scope.row.status ==2 || scope.row.status == 1"
                     @click="handleDel(scope.row,scope.index)">拒绝
          </el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { fetchList,Lock,reject} from '@/api/admin/drawings'   //引入axios接口
import {tableOption} from '@/const/crud/admin/drawings'   //引入表格头
import {mapGetters} from 'vuex'     //mapGetters工具函数会将store中的getter映射到局部计算属性中。

export default {
name: 'drawings',
data() {
    return {
        supname:"",                 //传入的name
        tableData: [],              //返回数据的空数组
        page: {
        total: 0,                   // 总页数
        currentPage: 1,             // 当前页数
        pageSize: 10                // 每页显示多少条
        },
        tableLoading: false,        //加载
        tableOption: tableOption,   //表格头信息
    }
},
created() {

},
mounted: function () {

},

computed: {
    ...mapGetters(['permissions'])     //使用对象扩展操作符把getter混入到computed中
},
methods: {

//返回数据的方法
getList(page, params) {
    this.tableLoading = true            //加载
    fetchList(Object.assign({           //复制fetchList对象
        supName:this.supname,           //获取保存的supname
        current: page.currentPage,      //当前页
        size: page.pageSize             //显示多少条
    }, params)).then(res => {
        this.tableData = res.data.result.records;       //数据返回到空数组
        this.page.total = res.data.result.total;        //总页数
        this.page.currentPage=res.data.result.current;  //当前页
        this.page.pageSize=res.data.result.size;        //显示多少条
        if(page.total==0){
          this.supname=""    //清空搜索name，为了实现刷新
        }
        this.tableLoading=false;
    })
},
/**
* @title 打开新增窗口
* @detail 调用crud的handleadd方法即可
*
**/

//
handleAdd: function () {
  this.$refs.crud.rowAdd()
},

//授权点击事件
handleEdit(row, index) {
  //row当前行
  //index当前下标
    let _this=this;                       //赋值this
    this.$confirm("是否确认提款", {        //提示框
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(()=>{       
      Lock(Object.assign({
          id: row.id,       //传入服务器id值
      })).then(res => {
          this.getList(this.page)   //操作完后刷新
          _this.$notify({           //提示
              title: "成功",
              message: "授权成功",
              type: "success",
              duration: 2000
          });
      })
    }).catch(function(){
      _this.$message({      //提示框的取消
          type: 'info',
          message: '已取消'
      });    
    })
},

//拒绝点击事件
handleDel( row,index) {
    var _this = this      
    _this.$confirm("是否确认拒绝提款", {    //提示框
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {     
      reject(Object.assign({
          id: row.id,                 //传入的id
      })).then(res => {
        this.getList(this.page)       //刷新
        _this.$notify({
            title: "拒绝",
            message: "成功拒绝",
            type: "success",
            duration: 2000
        });
      })
    }).catch(function () {
      _this.$message({
          type: 'info',
          message: '已取消'
      });    
    })
},

//搜索功能
handleFilter(form) {
    this.page.currentPage=1         //搜索时转到第一页
    this.supname=form.supName;
    this.getList(this.page,form)
},

//刷新页面
refreshChange(){
    this.page.currentPage=1
    this.getList(this.page)
},

//按钮跳转
drawings(){
  this.$router.push({ path: "/code/drawing" });
}

}
}
</script>

<style lang="scss" scoped>
</style>

