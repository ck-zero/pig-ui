
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
    addBtn: false,                  //添加按钮不显示
    viewBtn:true,
    column: [
    {
     label:'id',
     prop:"id",
     editDisabled:true,    //禁用
     labelWidth:140,
    },    
    {
      label: '编号',
      prop: 'supcustNo',
      labelWidth:140,

      // hide:true,             //隐藏列
    }, {
      width: 250,             //表格宽度
      label: '公司名称',      //表格头名称
      prop: 'supcustName',   //服务器传来的字段
      search: true,       //搜索
      labelWidth:140,
 
    },{
        width:100,
        label:"申请人编号",
        prop:"shelfId",
        labelWidth:140,
    },{
      width:100,
      label:"申请方",
      prop:"shelfType",
      labelWidth:140,
      dicData:[{
        label:"供应商",
        value:0
    },{
        label:"招商",
        value:1
    }]
    },
    {
      width:100,
      label:"申请人姓名",
      prop:"shelfName",
      labelWidth:140,
 

    }, {
      width: 150,       //表格宽度
      label: '申请人电话',
      prop: 'phone',
      labelWidth:140,

  
    }, {
        width:150,
        overHidden:true,
        label: "产品名称",
        prop: 'itemName',
        labelWidth:140,

      },
      {
      width:150,
      overHidden:true,
      label: "产品编码",
      prop: 'itemNo',
      labelWidth:140,

    },
    {
        width:150,
        overHidden:true,
        label: "产品自编码",
        prop: 'itemSubCode',
        labelWidth:140,

      },
    {
      label: '规格',
      prop: 'itemSize',
      labelWidth:140,

    },
    {
        label: '状态',
        prop: 'status',
        solt:true,
        labelWidth:140,
    },
    {
        width: 200,
        label: '下架时间',
        prop: 'shelfDownDate',
        type: 'date',
        format: 'yyyy-MM-dd HH:mm:ss',
        // span: 24,
        // hide:true,             //隐藏列
        labelWidth:140,
      },
      {
        width: 200,
        label: '创建时间',
        prop: 'createDate',
        type: 'date',
        format: 'yyyy-MM-dd HH:mm:ss',
        // span: 24,
        // hide:true,             //隐藏列
        labelWidth:140,
      },   
      {
        label:"备注",
        prop:"remarks",
        labelWidth:140,
        type: 'textarea',
        overHidden:true,
      },
  ],
} 