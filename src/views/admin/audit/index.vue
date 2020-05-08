<!-- 企业资质审核 -->
<template>
  <div class="execution">
    <basic-container>
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
        <!-- 营业执照 -->
        <template slot="businessLicense" slot-scope="scope" >
          <el-image style="width:70px; height:80px;line-height:80px"
          :src="scope.row.businessLicense" 
          :preview-src-list="[scope.row.businessLicense]"
          >
            <div slot="error" class="image-slot">
             <span style="color: red;">无上传图片</span>
            </div>
          </el-image>
        </template>
        <!-- 食品经营许可证 -->
        <template slot="foodBusinessLicense" slot-scope="scope">
           <el-image style="width:70px; height:80px;line-height:80px" 
           :src="scope.row.foodBusinessLicense" 
           :preview-src-list="[scope.row.foodBusinessLicense]"
           >           
          <div slot="error" class="image-slot">
              <span style="color: red;">无上传图片</span>
          </div>
        </el-image>
        </template>
        <!-- 食品生产许可证 -->
        <template slot="foodProductLicense" slot-scope="scope">
           <el-image style="width:70px; height:80px;line-height:80px" 
           :src="scope.row.foodProductLicense" 
           :preview-src-list="[scope.row.foodProductLicense]"
           >
            <div slot="error" class="image-slot">
              <span style="color: red;">无上传图片</span>
            </div>
          </el-image>
        </template>
        <!-- 表单营业执照 -->
        <template slot-scope="scope" slot="businessLicenseForm">
             <el-image style="width:70px; height:80px;"
             :src="scope.row.businessLicense" 
             :preview-src-list="[scope.row.businessLicense]"
             >
            <div slot="error" class="image-slot">
             <span style="color:red">无上传图片</span>
            </div>
          </el-image>
        </template>
        <!-- 表单食品经营许可证 -->
        <template slot-scope="scope" slot="foodBusinessLicenseForm">
             <el-image style="width:70px; height:80px;" 
             :src="scope.row.foodBusinessLicense" 
             :preview-src-list="[scope.row.foodBusinessLicense]"
             >
            <div slot="error" class="image-slot">
             <span style="color:red">无上传图片</span>
            </div>
          </el-image>
        </template>
        <!-- 表单食品生产许可证 -->
        <template slot-scope="scope" slot="foodProductLicenseForm">
             <el-image style="width:70px; height:80px;" 
             :src="scope.row.foodProductLicense" 
             :preview-src-list="[scope.row.foodProductLicense]"
             >
            <div slot="error" class="image-slot">
             <span style="color:red">无上传图片</span>
            </div>
          </el-image>
        </template>
        <template slot-scope="scope"
                  slot="menu">
          <el-button type="text" 
                     icon="el-icon-check"
                     size="mini"
                     v-if="sys_audit_add"
                     :disabled="scope.row.status == 2 || scope.row.status == 1"
                     @click="handleEdit(scope.row,scope.index)">同意
          </el-button>
                   <el-button type="text"       
                     icon="el-icon-edit"
                     size="mini"
                     v-if="sys_audit_edit"
                     :disabled="scope.row.status == 2 || scope.row.status == 1"
                     @click="handleDel(scope.row,scope.index)">拒绝
          </el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { Lock,fetchList,reject} from '@/api/admin/audit'   //引入接口
import {tableOption} from '@/const/crud/admin/audit'   //表格头
import {mapGetters} from 'vuex'       //mapGetters工具函数会将store中的getter映射到局部计算属性中。

export default {
name: 'impower',
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
        sys_audit_add:false,
        sys_audit_edit:false,
        sys_audit_lok:false,
    }
},

created() {
  this.sys_audit_add = this.permissions['sys_audit_add']
  this.sys_audit_edit = this.permissions['sys_audit_edit']
  this.sys_audit_lok = this.permissions['sys_audit_lok']
},

mounted: function () {
  
},

computed: {
  ...mapGetters(['permissions'])   //使用对象扩展操作符把getter混入到computed中
},

methods: {
//返回数据的方法
getList(page, params) {
    this.tableLoading = true        //加载
    fetchList(Object.assign({       //复制fetchList对象
        supName:this.supname,       //传入supname
        current: page.currentPage,  //传入当前页数
        size: page.pageSize         //传入每页显示多少条
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
  this.$refs.crud.rowAdd()   //
},

//同意接口
handleEdit(row, index) {
    let _this=this;
    _this.$confirm("是否确认同意: "+row.employeeName, {    //提示框
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(()=>{
      Lock(Object.assign({
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

//拒绝接口
handleDel( row,index) {
    var _this = this         //赋值this
     this.$prompt('请输入您的意见', '意见', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType:"textarea"
        }).then(({ value }) => {
          reject(Object.assign({
          id: row.id,                     //传入的id
          verificationOpinion:value
          })).then(res => {
              this.getList(this.page)               //刷新
              _this.$notify({                       //提示拒绝成功
                  title: "操作",
                  message: "成功拒绝",
                  type: "success",
                  duration: 2000
              });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
},



//搜索功能
handleFilter(form) {
    this.page.currentPage=1       //搜索时跳转到第一页
    this.supname=form.supName;     //保存supname
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

  .co_size{
    color: rgb(184, 184, 184);
    font-size: 0.1em;
  }
</style>

