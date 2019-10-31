
export const tableOption = {
    border: true,                       //表格的是否显示边框
    index: true,                        //表格是否显示序号 
    indexLabel: '序号',
    stripe: true,                       //是否显示表格的斑马条纹
    menuAlign: 'center',
    headerAlign: 'center',
    align: 'center',
    refreshBtn: false,
    showClomnuBtn: false,
    defaultExpandAll:true,        //可以隐藏
    tree:false,
    searchSize: 'mini',
    editBtn: false,
    delBtn: false,
    addBtn: false,                  //添加按钮不显示
    column: [{
      width: 220,
      label: '供应商名称',
      prop: 'supName',
      search: true,       //搜索框
      searchTip:'供应商名称',
      labelWidth:110,
    }, {
      width: 100,           //表格宽度
      label: '供应商编号',      //表格头的名称
      prop: 'supcustNo',        //服务器传来的字段
      editDisabled:true,    //禁用
      // span:10,          //编辑框的格式宽度
      labelWidth:110,       //编辑左边字体的宽度
    }, {
      width:150,
      label: '助记词',
      prop: 'subNo',
      labelWidth:110,
    }, {
      width: 150,
      label: '供应商类型',
      prop: 'supcustType',
      dialogModal:true,
      labelWidth:110,
    }, {
      width:150,
      label: '送货周期',
      prop: 'poCycle',
      labelWidth:110,
    }, {
      width:150,
      label: '经营方式名称',
      prop: 'salewayName',
      // span: 19
      labelWidth:110,
    },
  {
    width:150,
    label: '联营保底金额',
    prop: 'supLyAmt',
    // type: 'select',
    labelWidth:110,
  }, {
    width: 150,
    label: '结算门店名称',
    prop: 'settleBranchname',
    labelWidth:110,
  }, {
    width:150,
    label: '采购单据进价',
    prop: 'accLevel',
    labelWidth:110,
  }, {
    width: 150,
    label: '付款方式',
    prop: 'payWay',
    dialogModal:true,
    labelWidth:110,
  }, {
    width:150,
    label: '结算方式',
    prop: 'checkOutFlag',
    labelWidth:110,
  }, {
    width:150,
    label: '结算周期',
    prop: 'checkOutDay',
    labelWidth:110,
    // span: 24
  },
{
    width:150,
    label: '月结日期',
    prop: 'checkOutDate',
    labelWidth:110,
    type:"date",
    placeholder:"选择日期",
}, {
    width: 150,
    label: '返利类型',
    prop: 'rebateWay',
    labelWidth:110,
  }, {
    width:150,
    label: '联系人',
    prop: 'supMan',
    labelWidth:110,
  }, {
    width: 150,
    label: '电话',
    prop: 'supTel',
    dialogModal:true,
    labelWidth:110,
    rules: [{
      min: 6,
      max: 11,
      message: '长度有误',
      trigger: 'blur'
    }],
    // dicData:[{
    //   label:"NULL",
    //   value:""
    // }]
  }, {
    width:150,
    label: '传真',
    prop: 'supFax',
    labelWidth:110,
  }, {
    width:150,
    label: '手机',
    prop: 'mobile',
    labelWidth:110,
    rules: [{
      min: 6,
      max: 11,
      message: '长度有误',
      trigger: 'blur'
    }]
  },
{
    width:300,  
    label: '地址',
    prop: 'supAddr',
    labelWidth:110,
    span:20
}, {
    width: 210,
    label: '开户银行',
    prop: 'supAcctBack',
    labelWidth:110,
  }, {
    width:210,
    label: '银行账号',
    prop: 'supAcctNo',
    labelWidth:110,
  }, {
    width: 150,
    label: '税务登记号',
    prop: 'supTaxNo',
    dialogModal:true,
    labelWidth:110,
  }, {
    width:150,
    label: '区域',
    prop: 'regionNo',
    labelWidth:110, 
  }, {
    width:150,
    label: '类型',
    prop: 'supType',
    labelWidth:110,
    // span: 24,
 
  },
{
    width:150,
    label: '冻结账款状态',
    prop: 'payFlag',
    labelWidth:110,
}
, {
    width: 150,
    label: '冻结业务状态',
    prop: 'orderFlag',
    labelWidth:110,
  }, {
    width: 200,
    label: '邮箱',
    prop: 'supEmail',
    rules:[           //element-ui表单规格
      { 
        type: 'email',   
        message: '请输入正确的邮箱地址',
        trigger: ['blur', 'change']
      }
    ],
    labelWidth:110,
  }, {
    width: 300,
    label: '备注',
    prop: 'memo',
    labelWidth:110,
    span:20
  }, {
    width: 150,
    label: '供应商管理费率',
    labelWidth:110,
    prop: 'rate',
  }
  ],
} 