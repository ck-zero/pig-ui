// code/index.vue  净收益  

import { getDetails } from '@/api/admin/user'
var validateUsername = (rule, value, callback) => {
  getDetails(value).then(response => {
    if (window.boxType === 'edit') callback()
    let result = response.data.data
    if (result !== null) {
      callback(new Error('用户名已经存在'))
    } else {
      callback()
    }
  })
}

export const tabletwo = {
    border: true,                  //表格的是否显示边框
    index: false,                  //表格是否显示序号 
    indexLabel: '编号',             //序号名称
    stripe: true,                   //是否显示表格的斑马条纹
    menuAlign: 'center',            //菜单栏对齐方式  
    editBtn: false,                 //编辑按钮
    delBtn: false,                  //删除按钮隐藏false
    align: 'center',                //对其方式居中
    addBtn: false,                  //添加按钮
    column: [ {                     //配置去加载对象注入进去
      fixed: true,                  //是否冻结列        
      label: '货号',                //表格标题  
      prop: 'phone',                //表格的key
      type: 'phone',                //类型  
      search: true,                 //搜索显示
      searchTip:'搜索货号',
      searchTipPlacement:"buttom",      
      value: '',
      span: 24,                     //表单格栅显示的列
      rules: [{
        min: 6,
        max: 20,
        message: '长度在 11 个字符',
        trigger: 'blur'
      }]
    },
      {  
      label: '商品名称',
      prop: 'username',
      editDisabled: true,
      solt: true,
      searchFilterable:true,
      searchMmultiple:true,
      searchTip:'搜索商品名称',
      searchTipPlacement:"buttom",
      search: true,
      span: 24,
      rules: [{
        required: true,
        message: '请输入商品'
      },
      {
        min: 3,
        max: 20,
        message: '长度在 3 到 20 个字符',
        trigger: 'blur'
      },
      { validator: validateUsername, trigger: 'blur' }
      ]
    }, {
      label: '进货价',
      prop: 'deptId',
      value: '',
      span: 24,
      rules: [{
        min: 6,
        max: 20,
        message: '长度在 6 到 20 个字符',
        trigger: 'blur'
      }]
    }, {
      label: '零售价',
      prop: 'phone',
      type: 'phone',
      value: '',
      span: 24,
      rules: [{
        min: 6,
        max: 20,
        message: '长度在 6 到 20 个字符',
        trigger: 'blur'
      }]
    }, {
      label: '会员价',
      prop: 'deptId',
      value: '',
      span: 24,
      rules: [{
        min: 6,
        max: 20,
        message: '长度在 6 到 20 个字符',
        trigger: 'blur'
      }]
    }, {
      label: '毛利润',
      prop: 'deptName',
      overHidden: true,
      addVisdiplay: false,
      editVisdiplay: false,
      span: 24,
    },
    {
      label: '规格',
      prop: 'deptName',
      overHidden: true,
      addVisdiplay: false,
      editVisdiplay: false,
      span: 24,
    },
    {
      label: '单位',
      prop: 'deptName',
      overHidden: true,
      addVisdiplay: false,
      editVisdiplay: false,
      span: 24,
    }, {
      label: '净收益',
      prop: 'lockFlag',
      value: '',
      span: 24,
      rules: [{
        min: 6,
        max: 20,
        message: '长度在 6 到 20 个字符',
        trigger: 'blur'
      }]},
    //   {
    //   label:"比价",
    //   prop: 'deptName',
    //   overHidden: true,
    //   addVisdiplay: false,
    //   editVisdiplay: false,
    //   span: 24,
    // }
  ]
  }
  