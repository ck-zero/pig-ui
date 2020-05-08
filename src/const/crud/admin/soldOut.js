
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
    updateBtnTitle:"提交",
    editBtn: false,
    delBtn: false,
    addBtn: false,                  //添加按钮不显示
    viewBtn:true,
    column: [{
      width: 250,       //表格宽度
      label: '公司名称',      //表格头名称
      prop: 'supcustName',   //服务器传来的字段
      search: true,       //搜索
      labelWidth:140,
      editDisabled:true,    //禁用
    },
    {
        label:"产品名称",
        prop:"itemName",
        labelWidth:140,
        overHidden:true,
        width:150,
        editDisabled:true,    //禁用
    },
    {
      label:"产品编码",
      prop:"itemNo",
      labelWidth:140,
      width:150,
      editDisabled:true, //禁用
    }, {
      label: '自编号',
      prop: 'itemSubNo',
      labelWidth:140,
      overHidden:true,
      editVisdiplay:false,    //编辑隐藏
      width:150,
    }, {
      label: '简称',
      prop: 'itemSubName',
      labelWidth:140,
      overHidden:true,
      width:150,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    }, {
      width:80,
      label: "类别编码",
      prop: 'itemClsNo',
      labelWidth:140,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    },
    {
      label: '类别名称',
      prop: 'itemClsName',
      labelWidth:140,
      overHidden:true,
      width:150,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    },
    {
      label: '助记词',
      prop: 'itemRem',
      labelWidth:140,
      width:120,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    },
    { 
      label: '规格',
      prop: 'itemSize',
      labelWidth:140,
      overHidden:true,
      editDisabled:true,    //禁用
    },
    {
      editVisdiplay:false,    //编辑隐藏
      width:150,
      label:"产地",
      prop:"productArea",
      labelWidth:140,
      overHidden:true,
      width:130,
    },
    {
      width:100,  
      label:"主供应商ID",
      prop:"mainSupcust",
      labelWidth:140,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    },
    {
      width:200,
      label:"主供应商名称",
      prop:"supcustName",
      labelWidth:140,
      overHidden:true,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    },
    {
      label:"经营方式",
      prop:"itemSupFlag",
      labelWidth:140,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    },
    {
      width:100,  
      label:"进价",
      prop:"price",
      labelWidth:140,
      editVisdiplay:false,    //编辑隐藏
    },
    {
        label:"毛利率",
        prop:"profitRate",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        width:100,
        label:"零售价",
        prop:"salePrice",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"最低售价",
        prop:"saleMinPrice",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        width:100,
        label:"配送价",
        prop:"transPrice",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"批发价",
        prop:"basePrice",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        width:120,
        label:"营业员提成方案",
        prop:"omRateType",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        label:"营业员提成比例",
        prop:"orderManRate",
        width:120,
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        label:"是否积分",
        prop:"vipAccFlag",
        dicData:[{       //过滤
            label:"是",
            value:0
        },{
            label:"否",
            value:1
        }],
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"积分值",
        prop:"vipAccNum",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"损耗率",
        prop:"loseRate",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"进项税",
        prop:"purchaseTax",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"销项税",
        prop:"saleTax",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"联营扣率",
        prop:"supLyRate",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"批发价1",
        prop:"basePrice1",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"批发价2",
        prop:"basePrice2",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"批发价3",
        prop:"basePrice3",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"批发价4",
        prop:"basePrice4",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"会员价",
        prop:"vipPrice",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        label:"进货价格",
        prop:"purchaseSpec",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        width: 150,
        label:"商品类型编码",
        prop:"combineSta",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"商品类型名称",
        prop:"combineStaName",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"产品库存",
        prop:"itemStock",
        labelWidth:140,
        dicData:[{       //过滤
            label:"是",
            value:0
        },{
            label:"否",
            value:1
        }],
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"物流模式编码",
        prop:"direct",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"物流模式名称",
        prop:"directName",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"品牌代码",
        prop:"itemBrand",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"品牌名称",
        prop:"itemBrandName",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        width: 150,
        label:"产品状态编码",
        prop:"status",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"产品状态名称",
        prop:"statusName",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"计价方式",
        prop:"num3",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"保质期",
        prop:"num2",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        
      },
      {
        width: 130,
        label:"配送规格",
        prop:"shipmentSpec",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        width: 200,
        label:"停购日期",
        prop:"stopDate",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        width: 150,
        label:"附加条码",
        prop:"itemBarCode",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
      },
      {
        width: 150,
        label:"其他供应商编号",
        prop:"otherSupNo",
        labelWidth:140,
        overHidden:true,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"其他供应商名称",
        prop:"otherSupName",
        labelWidth:140,
        overHidden:true,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"采购周期",
        prop:"poCycle",
        labelWidth:140,
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"是否高值",
        prop:"isHigh",
        labelWidth:140,
        dicData:[{       //过滤
            label:"是",
            value:0
        },{
            label:"否",
            value:1
        },],
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
      {
        width: 150,
        label:"是否关注",
        prop:"isFocus",
        labelWidth:140,
        dicData:[{       //过滤
            label:"是",
            value:0
        },{
            label:"否",
            value:1
        },],
        editVisdiplay:false,    //编辑隐藏
        hide:true,
      },
    {
      width: 150,
      label: '前台议价',
      prop: 'changePrice',
      labelWidth:140,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    },
    {
      width: 150,
      label: '前台打折',
      prop: 'enDis',
      labelWidth:140,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    },
     {
      width: 150,
      label: '分店变价',
      prop: 'branchPrice',
      labelWidth:140,
      editVisdiplay:false,    //编辑隐藏
      hide:true,
    }, {
      label:"下架时间",
      prop:"shelfDownDate",
      labelWidth:140,
      type: 'date',
      format: 'yyyy-MM-dd',
      valueFormat: "yyyy-MM-dd",
      hide:true,
    },{
      label:"备注",
      prop:"remarks",
      labelWidth:140,
      type: 'textarea',
      hide:true,
    },
  ],
} 