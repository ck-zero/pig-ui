<template>
  <div class="execution">
    <basic-container>
      <!-- 上架新品 -->
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
                 @row-update="update"
                 :table-loading="tableLoading"
                 @search-change="handleFilter"
                 @refresh-change="refreshChange"
                 :option="tableOption">
        <!-- 一级连 -->
        <template slot="firstItemClassForm" slot-scope="scope">
          <el-select v-model="firstItemClass" value-key="itemClsName"  @change="editDriftStatus" placeholder="请选择产品一级分类" >
            <el-option
            v-for="item in options"
            :key="item.itemClsNo"
            :label="item.itemClsName"
            :value="item">
            </el-option>
          </el-select>
        </template>
        <!-- //二级链 -->  
        <template slot="secondItemClassForm" slot-scope="scope">
          <el-select v-model="secondItemClass"  placeholder="请选择产品一级分类" >
            <el-option
            v-for="item in restaurants"
            :key="item.itemClsName"
            :label="item.itemClsName"
            :value="item.itemClsName">
            </el-option>
          </el-select>
        </template>
        <!-- //三级链 -->  
        <template slot="thirdItemClassForm" slot-scope="scope">
          <el-select v-model="thirdItemClass"  placeholder="请选择产品一级分类">
            <el-option
            v-for="item in restauran"
            :key="item.itemClsName"
            :label="item.itemClsName"
            :value="item.itemClsName">
            </el-option>
          </el-select>
        </template>
        <!-- <template slot="secondItemClassForm" slot-scope="scope">
          <el-autocomplete
          class="inline-input"
          type="select"
          value-key="itemClsName"
          v-model="secondItemClass"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
          ></el-autocomplete>
        </template> -->
        <template slot-scope="scope"
                  slot="menu">
          <el-button type="text"
                    icon="el-icon-view"
                    size="mini"
                    @click="router(scope.row,scope.index)">
            详情
          </el-button>
          <el-button type="text" 
                     icon="el-icon-edit"
                     size="mini"
                     v-if="sys_putaway_add"
                     :disabled="scope.row.status ==12 || scope.row.status == 11"                     
                     @click="handleEdit(scope.row,scope.index)">同意
          </el-button>
          <el-button type="text"       
                     icon="el-icon-delete"
                     size="mini"
                     v-if="sys_putaway_edit"
                     :disabled="scope.row.status ==12 || scope.row.status == 11"
                     @click="handleDel(scope.row,scope.index)">拒绝
          </el-button>
        </template> 
      </avue-crud>
      <!-- 抽屉 -->
      <el-drawer
        title="我是详情页面"
        :visible.sync="drawer"
        :with-header="true"
        size="43%"
        class="over"
        >
          <el-row :gutter="20" style="margin-top:40px" >
            <el-col :span="4" :offset="1"><div class="bg-purple"> <span class="grid-content">公司编号：</span> <span style="color:#000">{{item.supNo}}</span>  </div> </el-col>
            <el-col :span="9" :offset="2"><div class=" bg-purple-light"><span class="grid-content">公司名称：</span> <span style="color:#000">{{item.supcustName}}</span> </div></el-col>
            <el-col :span="6" :offset="1"><div class=" bg-purple"> <span class="grid-content">手机：</span> <span style="color:#000">{{item.supTel}}</span> </div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around" style="margin-top:20px">
            <el-col :span="22"><div class="bg-purple width"  > <span class="grid-content">产品名称：</span> <span style="color:#000">{{item.itemName}}</span> </div></el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="4" :offset="1"><div class=" bg-purple">  <span class="grid-content">产品单位：</span> <span style="color:#000">{{item.itemUnit}}</span>  </div></el-col>  
            <el-col :span="7" :offset="2"><div class=" bg-purple"> <span class="grid-content">品牌名称：</span> <span style="color:#000">{{item.itemBrandName}}</span>  </div></el-col>
            <el-col :span="6" :offset="1"><div class=" bg-purple-light"><span class="grid-content">产品产地：</span> <span style="color:#000">{{item.placeOrigin}}</span></div></el-col>  
            </el-row>
            <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="6" :offset="1" ><div class="bg-purple-light"><span class="grid-content">规格：</span> <span style="color:#000">{{item.itemNorms}}</span></div></el-col>
            <el-col :span="8"><div class="bg-purple-light"><span class="grid-content">产品条码：</span> <span style="color:#000"> {{item.itemCode}}</span> </div></el-col>
            <el-col :span="8"><div class="bg-purple"><span class="grid-content">装箱规格：</span> <span style="color:#000"> {{item.itemBoxNorms}}</span></div></el-col>  
            </el-row>
            <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="4" :offset="1"><div class=" bg-purple"><span class="grid-content">保质期：</span> <span style="color:#000">  {{item.itemPeriQuality}}</span> </div></el-col>
            <el-col :span="7" :offset="2"><div class=" bg-purple-light"><span class="grid-content">售卖单位：</span> <span style="color:#000">  {{item.itemSellNorms}}</span> </div></el-col>
            <el-col :span="6" :offset="1"><div class=" bg-purple"><span class="grid-content">活动价：</span> <span style="color:#000">  ￥{{item.activityPrice}}</span> </div></el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="4" :offset="1"><div class="bg-purple"><span class="grid-content">零售价：</span> <span style="color:#000">  ￥{{item.retailPrice}}</span></div></el-col>
            <el-col :span="7" :offset="2"><div class="bg-purple"><span class="grid-content">出厂价：</span> <span style="color:#000">  ￥{{item.factoryInvoicePrice}}</span> </div></el-col>
            <el-col :span="6" :offset="1"><div class="bg-purple-light"><span class="grid-content">会员价：</span> <span style="color:#000">  ￥{{item.itemVipPrice}}</span> </div></el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top:20px">  
            <el-col  :offset="1"><div class=" bg-purple"><span class="grid-content">备注：</span> <span style="color:#000">  {{item.supRemarks}}</span> </div></el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="10" :offset="1"><div class="grid-content bg-purple">品牌logo:</div></el-col>
            <el-col :span="10" ><div class="grid-content bg-purple">产品图片:</div></el-col>
            </el-row>
            <el-row :gutter="20" >
            <el-col :span="8" :offset="3"><div ><el-image style="width: 183px;
    height: 183px;line-height:80px" :src="item.itemBrandLog"   :preview-src-list="[item.itemBrandLog]" fit="cover"> </el-image> </div></el-col>
            <el-col :span="8" :offset="2"><div ><el-image style="width:183px; height:183px;line-height:80px"  :src="item.itemPicture"  :preview-src-list="[item.itemPicture]" fit="cover"></el-image> </div></el-col>
            </el-row>
            <el-col  :offset="1"  style="margin-top:20px"><div class="grid-content bg-purple-light">检疫检验报告：<a icon="el-icon-edit" :href="checkout" target="_blank" rel="nofollow">{{item.inspeQuarReport}}</a> </div></el-col>
            <el-row type="flex" class="row-bg" justify="end">
            <el-col :span="4" ><div class="grid-content bg-purple">申请人： {{item.reviewName}} </div></el-col>
            <el-col :span="7" ><div class="grid-content bg-purple">审核人电话：{{item.reviewPhone}} </div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="end" v-if="item.reviewName">
              <el-col :span="6"><div class=" bg-purple"><span class="grid-content">审请人：</span> <span style="color:#000">  {{item.reviewName}}</span></div></el-col>
              <el-col :span="8" ><div class=" bg-purple-light"><span class="grid-content">审核人电话：</span> <span style="color:#000"> {{item.reviewPhone}}</span> </div></el-col>
            </el-row>
      </el-drawer>
    </basic-container>
  </div>
</template>

<script>
import { fetchList,putObj,reject,getData,oneObj,twoObj,threeObj} from '@/api/admin/putaway'   //引入接口
import {tableOption} from '@/const/crud/admin/putaway'   //表格头
import {mapGetters,mapState} from 'vuex'       //mapGetters工具函数会将store中的getter映射到局部计算属性中。

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
        sys_putaway_add:false,
        sys_putaway_edit:false,
        sys_putaway_eit:false,
        sys_putaway_lok:false,
        drawer:false,
        item:[],
        checkout:"",
        restaurants:[],
        secondItemClass:"",
        options:[],
        firstItemClass:"",
        restauran:[],
        thirdItemClass:"",
        username:"",
        phone:"",
    }
},

created() {
  this.sys_putaway_add = this.permissions['sys_putaway_add']
  this.sys_putaway_edit = this.permissions['sys_putaway_edit']
  this.sys_putaway_eit = this.permissions['sys_putaway_eit']
  this.sys_putaway_lok = this.permissions['sys_putaway_lok']
  this.username = this.userInfo.username
  this.phone = this.userInfo.phone
  this.userId= this.userInfo.userId
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
editDriftStatus(evel,params){
  this.firstItemClass=evel.itemClsName
  this.secondItemClass="";
  this.thirdItemClass=""
    twoObj(Object.assign({       
        clsno:evel.itemClsNo
    }, params)).then((res) => {
        // let restaurants = [res.result];
        this.restaurants=res.data.result;
    })
    threeObj(Object.assign({       
        clsno:evel.itemClsNo
    }, params)).then((res) => {
        // let restaurants = [res.result];
        this.restauran=res.data.result;
    })
},

//返回数据的方法
getList(page, params) {
  console.log(this.username,this.phone,this.userId)
    this.tableLoading = true        //加载
    fetchList(Object.assign({       //复制fetchList对象
        supcustName:this.supname,
        current: page.currentPage,  //传入当前页数
        size: page.pageSize         //传入每页显示多少条
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
    //一级连数据
    oneObj().then((res) => {
        this.options=res.data.result
    })
},

router(row,index,params){
  getData(Object.assign({       //复制fetchList对象
        id: row.id,  
        }, params)).then(res => {
        let fileName = res.data.result.inspeQuarReport.lastIndexOf(".");//获取到文件名开始到最后一个“.”的长度。
        let fileNameLength = res.data.result.inspeQuarReport.length;//获取到文件名长度
        let fileFormat = res.data.result.inspeQuarReport.substring(fileName + 1, fileNameLength);//截取后缀名
        if (fileFormat != "pdf") {
          this.checkout="https://view.officeapps.live.com/op/view.aspx?src=" + res.data.result.inspeQuarReport
        } else {
          this.checkout=res.data.result.inspeQuarReport
        }
        this.item= res.data.result;       //返回的数据  
        })
  this.drawer=true;      
},
/**
 * @title 打开新增窗口
 * @detail 调用crud的handleadd方法即可
 *
 **/
// handleAdd: function () {
//   this.$refs.crud.rowAdd()   //
// },
handleEdit(row, index,code) {
  this.$refs.crud.rowEdit(row, index,code);
},

update(row, index, done, loading,params){
  // console.log(JSON.stringify(row.secondItemClass))
  let secondItemClass=this.secondItemClass;
  let firstItemClass=this.firstItemClass;
  let thirdItemClass=this.thirdItemClass;
  let investManagerRemarks=row.investManagerRemarks;
  if(secondItemClass =="" && firstItemClass == "" || thirdItemClass == "" ){
    this.$message({
          showClose: true,
          message: '注意产品分类不能为空',
          type: 'error'
        });
    loading();
  }else{
   putObj(Object.assign({
        id:row.id,       
        firstItemClass:firstItemClass,
        secondItemClass:secondItemClass,
        thirdItemClass:thirdItemClass,
        investManagerRemarks:investManagerRemarks,
        reviewName:this.username,
        reviewPhone:this.phone
    }, params)).then((res) => {
        this.secondItemClass="";
        this.firstItemClass="";
        this.thirdItemClass="";
        this.getList(this.page);
        done();            //成功后退出编辑框
        this.$notify({
            title: "成功",
            message: "成功完成",
            type: "success",
            duration: 2000
        });
        
   }).catch(() => {   //失败后的事件
        this.secondItemClass="";
        this.firstItemClass="";
        this.thirdItemClass="";
        const h = this.$createElement;
        this.$notify({
          title: '失败',
          message: h('i', { style: 'color: red'}, '注意产品分类不能为空')
        });
        loading();         //失败后修改按钮取消加载
    });
  }

},

//拒绝接口
handleDel( row,index) {
    var _this = this         //赋值this
     this.$prompt('请留下您的备注', '意见', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType:"textarea"
        }).then(({ value }) => {
          reject(Object.assign({
          id: row.id,                     //传入的id
          investManagerRemarks:value
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
.grid-content{
  color: rgb(73, 73, 73);
  font-weight: bold;
}
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

