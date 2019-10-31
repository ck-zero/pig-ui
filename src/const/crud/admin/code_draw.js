
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
      label: '累计销售总金额',
      prop: 'sumSalesAmount',
    }, {
      width:200,
      label: "已结算销售金额",
      prop: 'settledSalesAmt',
    },
    {
      width:150,
      label: '未结算销售金额',
      prop: 'unsettledSalesAmt',
    },
    { 
      width:200,
      label: '实付金额',
      prop: 'payAmtSum',
    },
    {
      width:200,
      label:"累计扣点总金额",
      prop:"deductAmtSupSum",
    },
    {
      width:200,
      label:"本周未结算金额",
      prop:"unsettledSalesWeekAmt",
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