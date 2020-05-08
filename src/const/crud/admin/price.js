
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
    // menu:false,      是否显示编辑栏
    viewBtn:true,
    column: [ {
     label:"ID",
     prop:"id",
     labelWidth:140,
    },{
      width: 250,       //表格宽度
      label: '公司名称',      //表格头名称
      prop: 'supcustName',   //服务器传来的字段
      search: true,       //搜索
      labelWidth:140,
    }, {
      label: '公司编号',
      prop: 'supNo',
      labelWidth:140,
    }, {
      label: '门店编号',
      prop: 'involvementStoreId',
      labelWidth:140,
    }, {
      width:100,
      label: "门店名称",
      prop: 'involvementStoreName',
      labelWidth:140,
    },
    {
      label: '调价种类',
      prop: 'itemPurchasedType',
      labelWidth:140,
    },
    {
      label: '商品调价类型',
      prop: 'itemPurchasedStyle',
      labelWidth:140,
    },
    { 
      width:200,
      label: '产品名称',
      prop: 'itemName',
      labelWidth:140,
      overHidden:true,
    },
    {
      width:150,
      label:"产品编码",
      prop:"itemCode",
      labelWidth:140,
    },
    {
      label:"产品单位",
      prop:"itemUnit",
      labelWidth:140,
    },
    {
      label:"规格",
      prop:"itemSellNorms",
      labelWidth:140,
    },
    {
      label:"出厂价",
      prop:"factoryInvoicePrice",
      labelWidth:140,
    },
    {
      width:100,  
      label:"调整出厂价",
      prop:"factoryInvoicePriceChange",
      labelWidth:140,
    },
    {
        label:"零售价",
        prop:"retailPrice",
        labelWidth:140,
      },
      {
        width:100,
        label:"调整零售价",
        prop:"retailPriceChange",
        labelWidth:140,
      },
      {
        label:"会员价",
        prop:"itemVipPrice",
        labelWidth:140,
      },
      {
        width:100,
        label:"调整会员价",
        prop:"itemVipPriceChange",
        labelWidth:140,
      },
      {
        label:"活动价",
        prop:"activityPrice",
        labelWidth:140,
      },
      {
        width:100,
        label:"调整活动价",
        prop:"activityPriceChange",
        labelWidth:140,
      },
      {
        label:"预估量",
        prop:"estimateNum",
        labelWidth:140,
      },
      {
        label:"是否限量",
        prop:"whetherLimit",
        dicData:[{       //过滤
            label:"是",
            value:0
        },{
            label:"否",
            value:1
        }],
        labelWidth:140,
      },
      {
        label:"每天限量",
        prop:"whetherLimitStoreDay",
        labelWidth:140,
      },
      {
        label:"每人限量",
        prop:"whetherLimitPeople",
        labelWidth:140,
      },
      {
        width: 150,
        label:"限购时间段",
        prop:"limitedCustomerDate",
        labelWidth:140,
        dicData:[{
            label:null,
            value:"undefined - undefined"
        }]
      },
    {
      width: 150,
      label: '开始时间',
      prop: 'startDate',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      dialogModal:true,
      labelWidth:140,
    },
    {
      width: 150,
      label: '结束时间',
      prop: 'endDate',
      type: 'datetime',
      format: 'yyyy-MM-dd ',
      dialogModal:true,
      labelWidth:140,
    },
     {
      width: 150,
      label: '创建时间',
      prop: 'createDate',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      dialogModal:true,
      overHidden:true,
      labelWidth:140,
    },
    {
      width: 200,
      label: '供应商备注',
      overHidden:true,
      type:"textarea",
      prop: 'supRemarks',
      dialogModal:true,
      labelWidth:140,
      span: 24
    },
  ],
} 