
export const tableOption = {
    menuWidth:180,
    border: true,                       //表格的是否显示边框
    index: false,                        //表格是否显示序号 
    indexLabel: '序号',
    stripe: true,                       //是否显示表格的斑马条纹
    menuAlign: 'center',
    menu:false,                         //操作隐藏
    align: 'center',
    refreshBtn: false,
    showClomnuBtn: false,
    tree:false,
    searchSize: 'mini',
    editBtn: false,
    delBtn: false,
    addBtn: false,                  //添加按钮不显示
    column: [
    {
     label:'id',
     prop:"id",
     editDisabled:true,    //禁用
     labelWidth:140,
    },
    {
      label: '公司编号',
      prop: 'supNo',
      dialogModal:true,
    },  
     {
      width: 250,             //表格宽度
      label: '公司名称',      //表格头名称
      prop: 'supcustName',   //服务器传来的字段
      search: true,       //搜索
      editVisdiplay:false,    //编辑隐藏
    }, 
    {
      width:150,
      label:"申请人编号",
      prop:"createNum",
      editVisdiplay:false,    //编辑隐藏
    },
    {
      width:150,
      label:"申请人姓名",
      prop:"createMan",
      editVisdiplay:false,    //编辑隐藏
    },{
      width: 150,       //表格宽度
      label: '申请人电话',
      prop: 'supTel',
      editVisdiplay:false,    //编辑隐藏
    },
    {
        label:"文件地址",
        prop:"batchApplyFileAddr",
        labelWidth:140,
        type:"textarea",
        overHidden:true,
        solt:true,
    },
    {
        width: 200,
        label: '创建时间',
        prop: 'createDate',
        type: 'datetime',
        format: 'yyyy-MM-dd HH:mm:ss',
        valueFormat: "yyyy-MM-dd HH:mm:ss",
        dialogModal:true,
        span: 24,
        editVisdiplay:false,    //编辑隐藏
      }
  ],
} 