<template>
  <div class="execution">
    <basic-container>
      <!-- 在售管理 -->
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
          <template slot-scope="scope"
          slot="menu">
          <el-button type="text" 
              icon="el-icon-edit"
              size="mini"
              v-if="sys_soldOut_add"
              :disabled="scope.row.status == 0 || scope.row.status == 2"                     
              @click="handleEdit(scope.row,scope.index)">申请
          </el-button>
          </template> 
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { fetchList,putObj,postObj} from '@/api/admin/soldOut'         //引入接口
import {tableOption} from '@/const/crud/admin/soldOut'         //引入表格头
import {mapGetters,mapState} from 'vuex'       //mapGetters工具函数会将store中的getter映射到局部计算属性中。

export default {
name: 'manage',
data() {
    return {
      supname:"",                 //保存supname                 
      form:{
        shelfName:this.username,
        shelfType:1,
        phone:this.phone,
        shelfId:this.userId
      },                    //为当前编辑或者新增的表单对象
      tableData: [],              //保存的空数组
      page: {
      total: 0,           // 总页数
      currentPage: 1,   // 当前页数
      pageSize: 10 //每页显示多少条
      },
      tableLoading: false,          //加载
      tableOption: tableOption,     //表格头
      sys_soldOut_lok:false,
      sys_soldOut_add:false,
      username:"",
      phone:"",
      userId:"",

    }
},
created() {
   this.sys_soldOut_lok=this.permissions["sys_soldOut_lok"],
   this.sys_soldOut_add=this.permissions["sys_soldOut_add"],
   this.username = this.userInfo.username
   this.phone = this.userInfo.phone
   this.userId= this.userInfo.userId
   this.info.username = this.userInfo.username
   this.info.phone = this.userInfo.phone
   this.info.userId= this.userInfo.userId
},
mounted: function () {

},

computed: {
    ...mapGetters(['permissions']),   //使用对象扩展操作符把getter混入到computed中
    ...mapState({
        userInfo: state => state.user.userInfo
      }),
},
methods: {
getList(page, params) {
    this.tableLoading = true    //加载
    fetchList(Object.assign({     //复制fetchList对象
        statusNum:1,
        supcustName:this.supname,
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

//下架按钮
handleEdit(row, index,code) {
  //按钮的显隐全部接受Boolean类型的值;columnBtn为列动态显隐按钮;
  //refreshBtn刷新按钮;addBtn表格新增按钮;editBtn行编辑按钮;delBtn行删除按钮;
  //自定义按钮调用组件中对应方法即可,例如编辑方法rowEdit
  this.$refs.crud.rowEdit(row, index);
},

//编辑数据后确定触发该事件
update(row, index, done, loading){
  console.log(this.username)
  console.log(this.phone)
  console.log(this.userId)  

 postObj({
        supcustNo:row.mainSupcust,       
        supcustName:row.supcustName,
        itemSubCode:row.itemSubNo,
        itemSize:row.itemSize,
        shelfDownDate:row.shelfDownDate,
        remarks:row.remarks,
        itemNo:row.itemNo,
        itemName:row.itemName,
        shelfName:this.username,
        shelfType:1,
        phone:this.phone,
        shelfId:this.userId
        }).then(() => {
          this.getList(this.page);
          done();
          this.$notify({
            title: "成功",
            message: "修改成功",
            type: "success",
            duration: 2000
          });
        }).catch(() => {
          loading();
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
    this.supname=form.supcustName;
    this.getList(this.page,form)
},


}
}
</script>

<style lang="scss" scoped>

</style>
