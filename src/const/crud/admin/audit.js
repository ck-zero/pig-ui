
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
    viewBtn:true,     //查看按钮
    delBtn: false,
    addBtn: false,                  //添加按钮不显示
    column: [{
      label: 'id',     //表格头的名称
      prop: 'id',     //服务器传来的字段
    }, {
      label: '姓名',
      prop: 'employeeName',
    }, {
      width:200,
      label: '公司名称',
      prop: 'supName',
      search: true,    //搜索框
      searchTip:'输入公司名称',   //搜索提示框
    }, {
      label: '公司编号',
      prop: 'supNo',
      dialogModal:true,
    }, {
      label: '电话',
      prop: 'employeeTel',
      width:120,
    }, 
    {
     width:150,
     label:"营业执照",
     solt:true,
     prop:"businessLicense",
     dataType: 'string',
     type:"img", 
     formsolt:true,
     labelWidth:140,
    },
    {
    width:150,
    label:"食品经营许可证",
    solt:true,
    prop:"foodBusinessLicense",
    dataType: 'string',
    type:"img", 
    formsolt:true,
    labelWidth:140,
    },
    {
    width:150,    
    label:"食品生产许可证",
    solt:true,
    prop:"foodProductLicense",
    dataType: 'string',
    type:"img",  
    formsolt:true,
    labelWidth:140,
    },
    {
      width:100,
      label: '提交时间',
      prop: 'createDate',
      type: 'datetime',
      format: 'yyyy-MM-dd',      //过滤时间
      // valueFormat: "yyyy-MM-dd HH:mm:ss",  
      dialogModal:true,
    },
    {
      width:100,
      label: '操作后时间',
      prop: 'modifyDate',
      type: 'datetime',
      format: 'yyyy-MM-dd',      //过滤时间
      // valueFormat: "yyyy-MM-dd HH:mm:ss",  
      dialogModal:true,
      labelWidth:140,
    },
    {
      label: '状态',
      prop: 'status',
      dicData:[{       //过滤
        label:"未授权",
        value:0
      },{
        label:"已授权",
        value:1
      },{
        label:"已拒绝",
        value:2
      },{
        label:"已锁定",
        value:9
      }]
    },{
      label:"审核意见",
      prop:"verificationOpinion",
      overHidden:true,
      labelWidth:140,
    }
  ],
} 
