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
                 :data="data"
                 :table-loading="tableLoading"
                 :option="tableOption"
                 @on-load="getList"
                 @row-del="rowDel">
        <template slot-scope="scope"
                  slot="menu">
          <el-button type="text"
                     v-if="permissions.sys_dict_edit"
                     icon="el-icon-check"
                     size="mini"
                     plain
                     @click="handleEdit(scope.row,scope.index)">授权
          </el-button>
          <el-button type="text"
                     v-if="permissions.sys_dict_del"
                     icon="el-icon-delete"
                     size="mini"
                     plain
                     @click="handleDel(scope.row,scope.index)">拒绝
          </el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
  import {addObj, delObj, fetchList, putObj} from '@/api/admin/dict'
  import {tableOption,data} from '@/const/crud/admin/impower'
  import {mapGetters} from 'vuex'

  export default {
    name: 'dict',
    data() {
      return {
        tableData: [],
        page: {
          total: 0,           // 总页数
          currentPage: 1,   // 当前页数
          pageSize: 10 // 每页显示多少条
        },
          tableLoading: false,
          tableOption: tableOption,
          data:data
      }
    },
    created() {
    },
    mounted: function () {
    },
    computed: {
      ...mapGetters(['permissions'])
    },
    methods: {
      getList(page, params) {
        //   console.log(page)
        //   console.log(params)
        this.tableLoading = true
        //复制fetchlist对象
        fetchList(Object.assign({
          current: page.currentPage,
          size: page.pageSize
        }, params)).then(response => {
            // console.log(params)
            // console.log(response)
          this.tableData = response.data.data.records
          this.page.total = response.data.data.total
          this.tableLoading = false
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
      handleEdit(row, index) {
        this.$confirm('是否确认授权给: '+row.name, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        let _this=this;
        console.log(row.name+":data")
        // this.$refs.crud.rowEdit(row, index)
      },
      handleDel( index) {
        this.$refs.crud.rowDel.splice(row)
      },
      rowDel: function ( row,index) {
        var _this = this
        this.$confirm('是否确认拒绝授权给：'+row.name, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {     
        this.row.splice(row);
          _this.$message({
            showClose: true,
            message: '拒绝成功',
            type: 'success'
          })
        }).catch(function () {
            this.$message({
            type: 'info',
            message: '已取消'
          });    
        })
      },

      searchChange(form) {
        this.getList(this.page, form)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

