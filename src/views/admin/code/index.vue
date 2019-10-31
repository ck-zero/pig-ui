<template>
  <div class="user">
    <basic-container>
      <!-- ref  定义组件的名称和给元素注册引用信息  -->
      <!-- refresh-change	点击刷新按钮触发该事件 -->
      <!-- search-change搜索触发事件按钮 -->
      <!-- page页码 -->
      <!-- option:数据 -->
      <!-- on-load返回数据的事件 -->
      <!-- :data返回数据的存储的空数组 -->
      <!-- table-loading加载 -->
      <avue-crud
        :option="option"
        ref="crud"      
        v-model="form"
        :page="page"
        @on-load="getList"
        :table-loading="listLoading"
        @search-change="handleFilter"
        @refresh-change="handleRefreshChange"
        :data="list"
      >
        <!-- <template slot="menuLeft">
          <el-button
            v-if="sys_user_add"
            class="filter-item"
            @click="handleCreate"
            size="small"
            type="primary"
            icon="el-icon-edit"
          >添加</el-button>
        </template>-->

        <template slot="username" slot-scope="scope">
          <span>{{scope.row.username}}</span>
        </template>

        <template slot="role" slot-scope="scope">
          <span v-for="(role,index) in scope.row.roleList" :key="index">
            <el-tag>{{role.roleName}}</el-tag>&nbsp;&nbsp;
          </span>
        </template>

        <template slot="deptId" slot-scope="scope">{{scope.row.deptName}}</template>

        <template @search-change="handleFilter" slot="lockFlag" slot-scope="scope">
          <el-tag>{{scope.label}}</el-tag>
        </template>

        <template slot="menu" slot-scope="scope">
          <el-button
            v-if="sys_user_edit"
            size="small"
            type="text"
            icon="el-icon-edit"
            @click="handlecode()"
          >比价</el-button>
        <!-- <el-button
            v-if="sys_user_del"
            size="small"
            type="text"
            icon="el-icon-delete"
            @click="deletes(scope.row,scope.index)"
          >删除</el-button>-->
        </template>

        <template slot="roleForm" slot-scope="scope">
          <avue-crud-select
            v-model="role"
            multiple
            placeholder="请选择角色"
            :dic="rolesOptions"
            :props="roleProps"
          ></avue-crud-select>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { addObj, delObj, fetchList, getObj, putObj } from "@/api/admin/user";
import { deptRoleList } from "@/api/admin/role";
import { fetchTree } from "@/api/admin/dept";
import { tabletwo } from "@/const/crud/admin/code";
import { mapGetters } from "vuex";
import { constants } from "fs";
import { connect } from "tls";

export default {
  name: "table_user",
  data() {
    return {
      option: tabletwo,
      treeDeptData: [],
      checkedKeys: [],
      roleProps: {
        label: "roleName",
        value: "roleId"
      },
      defaultProps: {
        label: "name",
        value: "id"
      },
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20, // 每页显示多少条,
        isAsc: false //是否倒序
      },
      list: [],
      listLoading: true,
      role: [],
      form: {},
      rolesOptions: []
    };
  },
  computed: {
    ...mapGetters(["permissions"])
  },
  watch: { //响应role的变化
    role() {
      this.form.role = this.role;
    }
  },
  created() {
    this.sys_user_add = this.permissions["sys_user_add"];
    this.sys_user_edit = this.permissions["sys_user_edit"];
    this.sys_user_del = this.permissions["sys_user_del"];
    // this.init();
  },
  methods: {
    getList(page, param) {
      this.listLoading = true;
      fetchList(
        Object.assign(
          {
            current: page.currentPage,
            size: page.pageSize
          },
          param   //uname phone
        )
      ).then(response => {
        this.list = response.data.data.records;           //返回表格数据保存在list空数组中
        this.page.total = response.data.data.total;      //分页的页数页条
        this.listLoading = false;                        //表格的显示与不显示
      });
    
    },

    //搜索
    handleFilter(param) {
      this.page.page = 1;         
      this.getList(this.page, param);
    },

    //刷新按钮
    handleRefreshChange() {
      this.getList(this.page);
    },

    //跳转按钮
    handlecode() {
      this.$router.push({ path: "/code_info" });
    },
   
  }
};
</script>
<style lang="scss">
.user {
  height: 100%;

  &__tree {
    padding-top: 3px;
    padding-right: 20px;
  }

  &__main {
    .el-card__body {
      padding-top: 0;
    }
  }
}
</style>

