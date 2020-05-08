
// 隐藏搜索清空按钮
// searchResetBtn:false
// 隐藏搜索搜索按钮
// searchSubBtn:false

let baseUrl="/sup/supcust/info/like"

export const tableOption = {
  page:false,
  border: true,                       //表格的是否显示边框
  index: false,                        //表格是否显示序号 
  indexLabel: '序号',
  stripe: true,                       //是否显示表格的斑马条纹
  menuAlign: 'center',
  headerAlign: 'center',
  align: 'center',
  refreshBtn: false,
  showClomnuBtn: false,
  defaultExpandAll:false,        //可以隐藏
  tree:false,
  searchSize: 'mini',
  editBtn: false,
  delBtn: false,
  viewBtn:true,     //查看按钮
  addBtn: false,                  //添加按钮不显示
  column: [
    {
      width:100,
      label:"ID",
      prop:"id",
      addVisdiplay:false,     //新增隐藏
      editVisdiplay:false,    //编辑隐藏
    },
    {
      width: 220,           //表格宽度
      label: '公司名称',      //表格头的名称
      prop: 'supcustNo',        //服务器传来的字段
      slot:true,
      type:"select",
      props:{
        res:"result",
        label:"supName",
        value:"supcustNo",
      },
      dicUrl:`${baseUrl}`,
      dicMethod:"get",
      placeholder:"请选择公司名称",
      filterable:true,
      labelWidth:140,       //编辑左边字体的宽度
    },
  {
    width:150,
    label: '公司编号',
    // search: true,    //搜索框
    prop: 'supcustNo',
    labelWidth:140,  
    editDisabled:true,
    addDisabled:true,
    // addVisdiplay:false,     //新增按钮点击后隐藏
    // editVisdiplay:false,    //编辑按钮点击后隐藏
  }, {
    width: 150,
    label: '销售结算金额',
    prop: 'saleSettlementAmt',
    rules:[{
      required:true,
      message:"请输入销售结算金额",
      trigger:"blur"
    }],
    dialogModal:true,
    labelWidth:140,
  },
  {
    width: 150,
    label: '服务费金额',
    prop: 'serviceFeeAmt',
    rules:[{
      required:true,
      message:"请输入服务费金额",
      trigger:"blur"
    }],
    dialogModal:true,
    labelWidth:140,
  }, {
    width:150,
    label: '支付扣点金额',
    rules:[{
      required:true,
      message:"请输入支付通道扣点金额",
      trigger:"blur"
    }],
    prop: 'payPassAmt',
    labelWidth:140,
  },{
    width:150,
    label: '应扣税金',
    prop: 'taxationAmt',
    rules:[{
      required:true,
      message:"请输入应扣税金",
      trigger:"blur"
    }],
    labelWidth:140,
  },{
    width:150,
    label: '货款抵扣金额',
    prop: 'creditAmount',
    rules:[{
      required:true,
      message:"请输入货款抵扣金额",
      trigger:"blur"
    }],
    labelWidth:140,
  }, {
    width:150,
    label: '扣点总金额',
    prop: 'deductAmountSum',
    rules:[{
      required:true,
      message:"请输入扣点总金额",
      trigger:"blur"
    }],
    labelWidth:140,
  },{
    width:150,
    label: '实际付款金额',
    prop: 'actualPayAmount',
    rules:[{
      required:true,
      message:"请输入实际付款金额",
      trigger:"blur"
    }],
    labelWidth:140,
  },
  {
    width:200,
    label:"备注",
    prop:"remarks",
    type:"textarea",
    labelWidth:140
  },
  {
    width: 160,
    label: '结算开始时间',
    prop: 'settleStartDate',
    type:"datetime",
    rules:[{
      required:true,
      message:"请选择结算开始时间",
      trigger:"blur"
    }],
    format: 'yyyy-MM-dd ',
    valueFormat: "yyyy/MM/dd",
    dialogModal:true,
    labelWidth:140,
  }, {
    width:160,
    label: '结算结束时间',
    type:"datetime",
    prop: 'settleEndDate',
    rules:[{
      required:true,
      message:"请选择结算结束时间",
      trigger:"blur"
    }],
    placeholder:"选择结束日期",
    format: 'yyyy-MM-dd ',
    valueFormat: "yyyy/MM/dd",
    dialogModal:true,
    labelWidth:140,
  }, {
  width: 160,
  label: '付款时间',
  prop: 'paymentDate',
  type:"datetime",
  placeholder:"选择日期",
  rules:[{
    required:true,
    message:"请选择付款时间",
    trigger:"blur"
  }],
  format: 'yyyy-MM-dd ',
  valueFormat: "yyyy/MM/dd ",
  dialogModal:true,
  labelWidth:140,
}, {
  width:160,
  label: '创建时间',
  prop: 'createDate',
  type:"datetime",
  placeholder:"选择日期",
  format: 'yyyy-MM-dd ',
  valueFormat: "yyyy/MM/dd ",
  dialogModal:true,
  labelWidth:140,
  addVisdiplay:false,     //新增按钮点击后隐藏
  editVisdiplay:false,    //编辑按钮点击后隐藏
},
],
} 