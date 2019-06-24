// code/index.vue  净收益  
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
    border: true,
    index: false,
    indexLabel: '编号',
    stripe: true,
    menuAlign: 'center',
    editBtn: false,
    delBtn: false,
    align: 'center',
    addBtn: false,
    column: [ {
      fixed: true,
      label: '货号',
      prop: 'phone',
      type: 'phone',
      search: true,
      searchTip:'搜索货号',
      searchTipPlacement:"buttom",      
      value: '',
      span: 24,
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
      prop: 'role',
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
  