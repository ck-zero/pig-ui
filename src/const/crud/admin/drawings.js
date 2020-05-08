
export const tableOption = {
    menuWidth:180,
    border: true,                       //表格的是否显示边框
    index: false,                        //表格是否显示序号 
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
    column: [{
      label: 'id',
      prop: 'id',
    }, {
      label: '编号',
      prop: 'supcustNo',
    }, {
      width: 250,      //表格宽度
      label: '公司名称',      //表格名称
      prop: 'supcustName',   //服务器传来的字段
      search: true,     //搜索框
      searchTip:'输入公司名称',   //搜索提示
    }, {
      label: '员工ID',
      prop: 'employeeId',
    }, {
      label: "姓名",
      prop: 'employeeName',
    },
    {
      width:150,
      label: '提现金额',
      prop: 'useAmt',
    },
     {
      width: 200,
      label: '提现时间',
      prop: 'createDate',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      dialogModal:true,
      span: 24
    },
    { 
      width:200,
      label: '供应商联系电话',
      prop: 'tel',
    },
    {
      width:200,
      label:"剩余可提现金额",
      prop:"cashableBalance"
    },
    {
      width: 200,
      label: '结束时间',
      prop: 'examineDate',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      dialogModal:true,
      span: 24
    },
  {
    label: '状态',
    prop: 'status',
    type: 'select',
    dicData:[{
      label:"未授权",
      value:0
    },{
      label:"已同意",
      value:1
    },{
      label:"已拒绝",
      value:2
    }]
  }
  ],
} 