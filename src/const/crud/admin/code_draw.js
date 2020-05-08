
export const tableOption = {
    menuWidth:180,
    border: true,                       //表格的是否显示边框
    index: true,                        //表格是否显示序号 
    indexLabel: '序号',
    stripe: true,                       //是否显示表格的斑马条纹
    menuAlign: 'center',
    align: 'center',
    refreshBtn: false,
    showClomnuBtn: false,
    tree:false,
    searchSize: 'mini',
    editBtn: false,
    delBtn: false,
    viewBtn:true,     //查看按钮
    addBtn: false,                  //添加按钮不显示
    menu:false,
    column: [ {
      width: 250,       //表格宽度
      label: '公司名称',      //表格头名称
      prop: 'supcustName',   //服务器传来的字段
      search: true,       //搜索
    }, {
      label: '公司编号',
      prop: 'supcustNo',
    }, {
      width:200,
      label: '累计销售总额',
      prop: 'salesAmount',
    }, {
      width:200,
      label: "累计结算销售额",
      prop: 'saleSettleAmt',
    },
    {
      width:150,
      label: '未结算销售额',
      prop: 'unSalSettleAmt',
    },
    {
      width:150,
      label: '服务费',
      prop: 'serviceFeeAmt',
    },
    { 
      width:200,
      label: '微信手续费',
      prop: 'payPassAmt',
    },
    {
      width:200,
      label:"应扣税款",
      prop:"taxationAmt",
    },
    {
      width:200,
      label:"货款抵扣",
      prop:"creditAmt",
    },
    {
      width:200,
      label:"扣点",
      prop:"deductAmt",
    },
    {
      width:200,
      label:"实际付款",
      prop:"actualPayAmt",
    },
    {
      width: 200,
      label: '结算开始时间',
      prop: 'settleStartDate',
      type: 'datetime',
      format: 'yyyy-MM-dd ',
      valueFormat: "yyyy-MM-dd ",
      dialogModal:true,
      span: 24
    },
    {
      width: 200,
      label: '结算结束时间',
      prop: 'settleEndDate',
      type: 'datetime',
      format: 'yyyy-MM-dd ',
      valueFormat: "yyyy-MM-dd ",
      dialogModal:true,
      span: 24
    },
     {
      width: 200,
      label: '创建时间',
      prop: 'createDate',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      dialogModal:true,
      span: 24
    },
    {
      width: 200,
      label: '修改时间',
      prop: 'modifyDate',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      dialogModal:true,
      span: 24
    },
  ],
} 