<template>
  <div class="execution">
    <basic-container>
      <!-- 财务结算文件 -->
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
                 :option="tableOption"  
                 @row-update="update"
                 @refresh-change="refreshChange"
                 @search-change="handleFilter"
                 @search-reset="hondleno"
                 @row-save="settle">
        <template slot="supcustName" slot-scope="scope" >
          <span>{{scope.row.supcustName}}</span>
        </template>
        <template slot-scope="scope" slot="menuLeft">
            <el-button type="primary"
            icon="el-icon-plus"
            size="small"
            plain
            v-if="sys_settle_add"
            @click.stop="handleCreate()">新增</el-button>
        </template>
        <template slot-scope="scope" slot="menu">
          <!-- <el-button type="text" 
                     icon="el-icon-plus"
                     size="mini"
                     v-if="sys_settle_lok"
                     >
            查看
          </el-button> -->
          <el-button type="text"
                     icon="el-icon-check"
                     size="mini"
                     v-if="sys_settle_edit"
                     @click="handleEdit(scope.row,scope.index)">
                     修改
          </el-button>
        </template>
        <template slot="search" > 
            <el-form-item label="公司名称" >
              <el-input  placeholder="请输入公司名称" v-model="form.supcustName"  clearable/>
            </el-form-item>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { fetchList,putObj,addObj,appObj} from '@/api/admin/settle'         //引入接口
import {tableOption} from '@/const/crud/admin/settle'         //引入表格头
import {mapGetters} from 'vuex'       //mapGetters工具函数会将store中的getter映射到局部计算属性中。

export default {
name: 'settle',
data() {
    return {
      supcustName:"",                 //保存supname                 
      form:{},                    //为当前编辑或者新增的表单对象
      tableData: [],              //保存的空数组   
      timeout:  null,
      state:"",
      page: {
        total: 0,           // 总页数
        currentPage: 1,   // 当前页数
        pageSize: 10 //每页显示多少条 
      },
      tableLoading: false,          //加载
      tableOption: tableOption,     //表格头
      treeDeptData:[],
      sys_settle_lok:false,
      sys_settle_edit:false,
      sys_settle_add:false,
    }
},
created() {
  this.sys_settle_lok=this.permissions["sys_settle_lok"]
  this.sys_settle_edit=this.permissions["sys_settle_edit"]
  this.sys_settle_add=this.permissions["sys_settle_add"]
},
mounted: function () {

},

computed: {
    ...mapGetters(['permissions'])   //使用对象扩展操作符把getter混入到computed中
},
methods: {
getList(page, params) {
    this.tableLoading = true    //加载
    fetchList(Object.assign({     //复制fetchList对象
        supcustName:this.supcustName,       //传入的supname
        current: page.currentPage,  //传入的当前页数
        size: page.pageSize         //传入的多少条
    }, params)).then(res => {
        this.tableData = res.data.result.records;       //返回的数据
        this.page.total = res.data.result.total;        //总的数据
        this.page.currentPage=res.data.result.current;  //当前页数
        this.page.pageSize=res.data.result.size;        //每页显示多少条
        if(page.total==0){
         this.supcustName=""   //清空supname
        }
        this.tableLoading=false;    //加载
    })
},
/**
 * @title 打开新增窗口
 * @detail 调用crud的handleadd方法即可
 *
 **/
handleCreate:function(){
    this.$refs.crud.rowAdd();
},

//新增按钮添加
settle:function(row,done,loading){
     addObj(this.form).then(() => {
        this.getList(this.page);
        done();            //修改成功后退出编辑框
        this.$notify({
            title: "成功",
            message: "修改成功",
            type: "success",
            duration: 2000
        });
    }).catch(() => {   //失败后的事件
        const h = this.$createElement;
        this.$notify({
          title: '失败',
          message: h('i', { style: 'color: red'}, '注意看看格式是否正确')
        });
        loading();         //失败后修改按钮取消加载
    });
},

//修改按钮
handleEdit(row, index,code) {
  this.$refs.crud.rowEdit(row, index,code);
},

//编辑数据后确定触发该事件
update(row, index, done, loading){
    putObj(this.form).then((res) => {
        this.getList(this.page);
        done();            //修改成功后退出编辑框
        this.$notify({
            title: "成功",
            message: "修改成功",
            type: "success",
            duration: 2000
        });
    }).catch(() => {   //失败后的事件
        const h = this.$createElement;
        this.$notify({
          title: '失败',
          message: h('i', { style: 'color: red'}, '注意看看格式是否正确')
        });
        loading();         //失败后修改按钮取消加载
    });
},

//刷新按钮
refreshChange(){
    this.page.currentPage=1
    this.getList(this.page)
},

hondleno(){
  this.supcustName="";
  console.log("我被清空了")
},

//搜索功能
handleFilter(params) {
    this.page.currentPage=1         //搜索时转到第一页
    this.supcustName=this.form.supcustName;
    // console.log(this.form.supcustName)
    this.getList(this.page,this.supcustName)
},

}
}
</script>

<style lang="scss" scoped>

</style>

