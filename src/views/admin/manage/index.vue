<template>
  <div class="execution">
    <basic-container>
      <!-- 供应商管理费 -->
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
                 @row-update="update">
        <template slot-scope="scope" slot="menu">
          <!-- <el-button type="text" 
                     icon="el-icon-plus"
                     size="mini"
                     v-if="sys_manage_lok">
            查看
          </el-button> -->
          <el-button type="text"
                     icon="el-icon-check"
                     size="mini"
                     v-if="sys_manage_add"
                     @click="handleEdit(scope.row,scope.index)">
               修改
          </el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { fetchList,putObj} from '@/api/admin/manage'         //引入接口
import {tableOption} from '@/const/crud/admin/manage'         //引入表格头
import {mapGetters} from 'vuex'       //mapGetters工具函数会将store中的getter映射到局部计算属性中。

export default {
name: 'manage',
data() {
    return {
      supname:"",                 //保存supname                 
      form:{},                    //为当前编辑或者新增的表单对象
      tableData: [],              //保存的空数组
      page: {
      total: 0,           // 总页数
      currentPage: 1,   // 当前页数
      pageSize: 10 //每页显示多少条
      },
      tableLoading: false,          //加载
      tableOption: tableOption,     //表格头
      sys_manage_lok:false,
      sys_manage_add:false,
    }
},
created() {
   this.sys_manage_lok=this.permissions["sys_manage_lok"],
   this.sys_manage_add=this.permissions["sys_manage_add"]
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
        supName:this.supname,       //传入的supname
        current: page.currentPage,  //传入的当前页数
        size: page.pageSize         //传入的多少条
    }, params)).then(res => {
        this.tableData = res.data.result.records;       //返回的数据
        this.page.total = res.data.result.total;        //总的数据
        this.page.currentPage=res.data.result.current;  //当前页数
        this.page.pageSize=res.data.result.size;        //每页显示多少条
        if(page.total==0){
            this.supname=""   //清空supname
        }
        this.tableLoading=false;    //加载
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

//供应商比例按钮
handleEdit(row, index,code) {
  //按钮的显隐全部接受Boolean类型的值;columnBtn为列动态显隐按钮;
  //refreshBtn刷新按钮;addBtn表格新增按钮;editBtn行编辑按钮;delBtn行删除按钮;
  //自定义按钮调用组件中对应方法即可,例如编辑方法rowEdit
  this.$refs.crud.rowEdit(row, index);
},

//编辑数据后确定触发该事件
update(row, index, done, loading){
    putObj(this.form).then(() => {
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

//搜索功能
handleFilter(form) {
    this.page.currentPage=1         //搜索时转到第一页
    this.supname=form.supName;
    this.getList(this.page,form)
},


}
}
</script>

<style lang="scss" scoped>

</style>
