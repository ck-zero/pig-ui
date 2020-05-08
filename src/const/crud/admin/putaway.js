
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
    updateBtnTitle:"提交",
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
      label: '编号',
      prop: 'supNo',
      editVisdiplay:false,    //编辑隐藏
      // hide:true,             //隐藏列
    }, {
      width: 250,             //表格宽度
      label: '公司名称',      //表格头名称
      prop: 'supcustName',   //服务器传来的字段
      search: true,       //搜索
      editVisdiplay:false,    //编辑隐藏
    },{
      width:100,
      label:"申请人编号",
      prop:"applyId",
      editVisdiplay:false,    //编辑隐藏
    },
    {
      width:100,
      label:"申请人姓名",
      prop:"applyName",
      editVisdiplay:false,    //编辑隐藏

    }, {
      width: 150,       //表格宽度
      label: '手机电话',
      prop: 'supTel',
      editVisdiplay:false,    //编辑隐藏
    }, {
      width:150,
      overHidden:true,
      label: "产品名称",
      prop: 'itemName',
      editVisdiplay:false,    //编辑隐藏
    },
    {
      label: '产品单位',
      prop: 'itemUnit',
      editVisdiplay:false,    //编辑隐藏
    },
    { 
      label: '产品规格',
      prop: 'itemNorms',
      editVisdiplay:false,    //编辑隐藏
    },
    { 
      label: '产品产地',
      prop: 'placeOrigin',
      editVisdiplay:false,    //编辑隐藏
    },
    { 
        label: '品牌名称',
        prop: 'itemBrandName',
        editVisdiplay:false,    //编辑隐藏
    },
    {
        label:'产品一级分类',
        prop:"firstItemClass",
        formsolt:true,
        // cascader: ['secondItemClass','thirdItemClass'],
        // placeholder:"请选择产品一级分类",
        // labelWidth:140,
        // type:"select",
        // props:{
        //   res:"result",
        //   label:"itemClsName",
        //   value:"itemClsNo",
        // },
        // dicUrl:`/item/class/first`,
        // dicMethod:"get",
        // // filterable:true,
        labelWidth:140,       //编辑左边字体的宽度
        // rules: [{
        //     required: true,
        //     message: '请选择产品一级分类'
        //   }],
          // cascaderFirst:true,
    },
    {
        label:"产品二级分类",
        prop:"secondItemClass",
        // type:"select",
        formsolt:true,

        // dicUrl:`/item/class/second?clsno={{key}}`,
        // props:{
        //   res:"result",
        //   label:"itemClsName",
        //   value:"itemClsNo",
        // },
        // dicMethod:"get",
        // row: true,
        // dicFlag: false,
        // filterable:true,
          labelWidth:140,       //编辑左边字体的宽度
          // rules: [{
          //     required: true,
          //     message: '请选择产品二级分类'
          //   }]
    },
   {
        label:"产品三级分类",
        prop:"thirdItemClass",
        // placeholder:"请选择产品三级分类",
        labelWidth:140,
        formsolt:true,
        // type:"select",
        // props:{
        //   res:"data.result",
        //   label:"itemClsName",
        //   value:"itemClsNo",
        // },
        // dicUrl:`/item/class/third?clsno={{key}}`,
        // dicMethod:"get",
        // dicFlag: false,
        // // filterable:true,
        // labelWidth:140,       //编辑左边字体的宽度
        // rules: [{
        //     required: true,
        //     message: '请选择产品三级分类'
        //   }]
    }, 
    {
        label:"备注",
        prop:"investManagerRemarks",
        labelWidth:140,
        type:"textarea",
        overHidden:true,
    },
    {
        label: '状态',
        prop: 'status',
        dicData:[{       //过滤
            label:"未授权",
            value:10
        },{
            label:"已授权",
            value:11
        },{
            label:"已拒绝",
            value:12
        }],
        editVisdiplay:false,    //编辑隐藏
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
      },
      {
        width: 200,
        label: '修改时间',
        prop: 'modifilyDate',
        type: 'datetime',
        format: 'yyyy-MM-dd HH:mm:ss',
        valueFormat: "yyyy-MM-dd HH:mm:ss",
        dialogModal:true,
        span: 24,
        editVisdiplay:false,    //编辑隐藏
      },   
  ],
} 