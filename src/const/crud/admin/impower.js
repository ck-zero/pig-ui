
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
      width: 150,      //表格宽度
      label: 'id',     //表格头的名称
      prop: 'id',     //服务器传来的字段
    }, {
      width: 150,
      label: '姓名',
      prop: 'name',
    }, {
      label: '公司名称',
      prop: 'supName',
      search: true,    //搜索框
      searchTip:'输入公司名称',   //搜索提示框
    }, {
      width: 150,
      label: '公司编号',
      prop: 'supcustNo',
      dialogModal:true,
    }, {
      label: '电话',
      prop: 'phone',
    }, {
      label: '创建时间',
      prop: 'createDate',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',      //过滤时间
      valueFormat: "yyyy-MM-dd HH:mm:ss",  
      dialogModal:true,
      span: 24
    },
    {
      label: '状态',
      prop: 'status',
      type: 'select',  //什么类型
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
      label:"角色",
      prop:"roleName",
    }
  ],
} 
