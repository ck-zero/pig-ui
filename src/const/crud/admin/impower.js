
export const data=[       
        {
           id:1,
           name:'张三',
           username:'禾木有限公司',
           phone1:"1101",
           phone:"1423212135",
           test:'1994-02-23 00:00:00'
         }, {
           id:2,
           name:'李四',
           username:'悦和有限公司',
           phone1:"1101",
           phone:"15201547885",
           test:'1994-02-23 00:00:00'
         }, {
           id:3,
           name:'老五',
           username:'树叶有限公司',
           phone1:"1101",
           phone:"1652453215",
           test:'1994-02-23 00:00:00'
         }, {
           id:4,
           name:'杨六',
           username:'广东飞跃有限公司',
           phone1:"1101",
           phone:"14752254588",
           test:'1994-02-23 00:00:00'
         },{
            id:5,
            name:'荤七',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:6,
            name:'王八',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:7,
            name:'飞九',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:8,
            name:'小白',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:9,
            name:'小花',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:10,
            name:'小黑',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:11,
            name:'小绿',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:12,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:13,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:14,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:15,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:16,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:17,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:18,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:19,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:20,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          },{
            id:21,
            name:'蔡徐坤',
            username:'广东飞跃有限公司',
            phone1:"1101",
            phone:"14752254588",
            test:'1994-02-23 00:00:00'
          }]

export const tableOption = {
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
    column: [{
      label: 'id',
      prop: 'id',
    }, {
      label: '姓名',
      prop: 'name',
    }, {
      label: '公司名称',
      prop: 'username',
    //   'search': true,
    }, {
      label: '公司编号',
      prop: 'phone1',
    }, {
      label: '电话',
      width: 150,
      prop: 'phone',
    }, {
      label: '创建时间',
      prop: 'test'
    }],
  
  }
  