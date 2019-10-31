
<template>
  <div class="code">
    <basic-container>
      <avue-crud
        :option="option"   
        @on-load="getList"
        :table-loading="listLoading"
        @refresh-change="handleRefreshChange"
        :data="list"
      >
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { addObj, delObj, fetchList, getObj, putObj } from "@/api/admin/user";
import { deptRoleList } from "@/api/admin/role";
import { fetchTree } from "@/api/admin/dept";
import { tablecode } from "@/const/crud/admin/code_info";
import { mapGetters } from "vuex";

export default {
  name: "table_user",
  data() {
    return {
      option: tablecode,
      list: [],
      listLoading: true,
    };
  },
  computed: {
    ...mapGetters(["permissions"])
  },
  watch: {
    role() {
      this.form.role = this.role;
    }
  },
  created() {
    this.sys_user_add = this.permissions["sys_user_add"];
    this.sys_user_edit = this.permissions["sys_user_edit"];
    this.sys_user_del = this.permissions["sys_user_del"];
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList().then(response => {      
        this.list = response.data.data.records;           //返回表格数据
        this.listLoading = false;                        //表格的显示与不显示
      });
    
    },
    handleRefreshChange() {    
      this.getList(this.page);      //刷新功能
    },

  }
};
</script>
<style lang="scss">
.code {
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
.code .avue-crud{
  width:70%;
}
</style>

