
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
      prop:"applyId",
      hide:true,             //隐藏列
      labelWidth:140,
 
    },
    {
      width:100,
      label:"申请人姓名",
      prop:"applyUser",
      labelWidth:140,
 

    }, {
      width: 150,       //表格宽度
      label: '手机电话',
      prop: 'supTel',
      labelWidth:140,

  
    }, {
        width:150,
        overHidden:true,
        label: "品牌",
        prop: 'itemBrandName',
        hide:true,             //隐藏列
        labelWidth:140,

      },
      {
      width:150,
      overHidden:true,
      label: "产品名称",
      prop: 'itemName',
      labelWidth:140,

    },
    {
        width:150,
        overHidden:true,
        label: "产品条码",
        prop: 'itemCode',
        hide:true,             //隐藏列
        labelWidth:140,

      },
    {
      label: '产品单位',
      prop: 'itemUnit',
      hide:true,             //隐藏列
      labelWidth:140,

    },
    { 
      label: '产品规格',
      prop: 'itemNorms',
      hide:true,             //隐藏列
      labelWidth:140,

    },
    {
      label:"装箱规格",
      prop:"itemBoxNorms",
      labelWidth:140,
      width:150,
    },
    {
      label:"售卖规格",
      prop:"itemSellNorms",
      hide:true,             //隐藏列
      labelWidth:140,

    },
    {
        label:"出厂价",
        prop:"factoryInvoicePrice",
        hide:true,             //隐藏列
        labelWidth:140,

    },
    {
        label:"零售价",
        prop:"retailPrice",
        hide:true,             //隐藏列
        labelWidth:140,

    },
    {
        label:"会员价",
        prop:"itemVipPrice",
        hide:true,             //隐藏列
        labelWidth:140,

    },
    {
        label:"活动价",
        prop:"activityPrice",
        hide:true,             //隐藏列
        labelWidth:140,
    },
    {
        label:"保质期",
        prop:"itemPeriQuality",
        hide:true,             //隐藏列
        labelWidth:140,

    },
    { 
      label: '产品产地',
      prop: 'placeOrigin',
      hide:true,             //隐藏列
      labelWidth:140,

    },
    { 
        label: '审核人',
        prop: 'reviewName',
        labelWidth:140,

    },
    { 
        label: '审核人电话',
        prop: 'reviewPhone',
        width:150,
        labelWidth:140,

    },
    {
        label:'产品一级分类',
        prop:"firstItemClass",
        hide:true,             //隐藏列
        labelWidth:140,

    },
    {
        label:"产品二级分类",
        prop:"secondItemClass",
        hide:true,             //隐藏列
        labelWidth:140,

    },
   {
        label:"产品三级分类",
        prop:"thirdItemClass",
        labelWidth:140,
        hide:true,             //隐藏列
    }, 
    {
        label:"供应商备注",
        prop:"supRemarks",
        labelWidth:140,
        type:"textarea",
        overHidden:true,
    },
    {
        label:"招商经理备注",
        prop:"managerMessage",
        labelWidth:140,
        type:"textarea",
        overHidden:true,
    },
    {
        label: '状态',
        prop: 'status',
        solt:true,
        labelWidth:140,
    },
    {
        width: 200,
        label: '创建时间',
        prop: 'createDate',
        type: 'date',
        format: 'yyyy-MM-dd HH:mm:ss',
        span: 24,
        // hide:true,             //隐藏列
        labelWidth:140,
      },
      {
        width: 200,
        label: '建档时间',
        prop: 'modifilyDate',
        type: 'date',
        format: 'yyyy-MM-dd HH:mm:ss',
        span: 24,
        // hide:true,             //隐藏列
        labelWidth:140,
      },   
  ],
} 