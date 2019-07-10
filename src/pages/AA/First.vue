<template>
    <div id="first">
        <!-- 搜索 -->
        <div class="search">
            <span>搜索</span>
            <el-input v-model="input" placeholder="搜索" style="width:240px"></el-input>
            <el-button @click="toSearch">搜索</el-button>
         <el-button type="primary" @click="addContent">新增案列</el-button>
         <el-button type="primary" @click="toBatchDelete">批量删除</el-button>
        </div>
        <!-- form表单 -->
        <el-dialog
            title="新增案列" 
            :visible.sync="visible"
        >
            <el-form :model="form">
                {{form}}
                
                <el-form-item label="姓名">
                    <el-input v-model="form.realname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="form.gender" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="种类">
                    <el-input v-model="form.type" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-input v-model="form.status" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="form.username" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span>
                <el-button v-on:click="addContent=false">取消</el-button>
                <el-button type="success" v-on:click="saveDatas" round>确定</el-button>
            </span>
        </el-dialog>

        <!-- 筛选下拉框 -->
        <div class="select">
            <span>筛选：</span>
            <span>相关产品</span>
            {{value1}}
            <!-- {{JSON.stringify(arr.item)}} -->
            <el-select v-model="value1" placeholder="请选择" size="small" >
                <el-option
                v-for="item in arr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                
                
                >
                
                </el-option>
            </el-select>
            {{value2}}
            <el-select v-model="value2"  placeholder="请选择" size="small" >
                <el-option
                v-if="item.type==value1"
                v-for="item in arr1"
                :key="item.pro"
                :label="item.label"
                :value="item.pro"
                
                >
                </el-option>
            </el-select>

            相关解决方案 
            {{resolve}}
            <el-select v-model="resolve" placeholder="请选择" size="small">
                <el-option
                v-for="item in fanan"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                
                >
                </el-option>
            </el-select>
            {{result}}
            <el-select v-model="result" placeholder="请选择" size="small">
                <el-option
                v-if="item.type==resolve"
                v-for="item in an"
                :key="item.val"
                :label="item.label"
                :value="item.val"
                >
                </el-option>
            </el-select>
        </div>

        <!-- 图表 -->
        <div class="table">
            <el-table :data="getTableData" border>

            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
            prop="id"
            label="序号"
            
            >
            </el-table-column>
            <el-table-column
            prop="realname"
            label="姓名"
            >
            </el-table-column>
            <el-table-column
            prop="gender"
            label="性别"
            >
            </el-table-column>
            <el-table-column
            prop="type"
            label="种类"
            >
            </el-table-column>
            <el-table-column
            prop="status"
            label="状态"
            >
            </el-table-column>
            <el-table-column
            prop="username"
            label="用户名"
            >
            </el-table-column>
            <el-table-column
            prop="password"
            label="密码"
            >
            </el-table-column>
            <el-table-column
            label="操作"
            width="70"
            >
            <template slot-scope="scope" class="first_btn">
                <el-button type="text" size="small" @click="toUpdate(scope.row)">编辑</el-button>
                <el-button type="text" size="small" @click="toUp=true">下线</el-button>
                <el-button  type="text" size="small" @click.prevent="toDelete(scope.row)">删除</el-button>
            </template>
            </el-table-column>
            </el-table>
        </div>

        <!-- 绑定下线按钮弹框 -->
        <el-dialog
            title="显示" 
            :visible.sync="toUp"
        >
        <span>
            <el-button v-on:click="toUp=false">取消</el-button>
            <el-button type="success" v-on:click="toUp=false" round>确定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
    data(){
        return{
            input:"",
            // 下拉框1
            arr:[
                {
                    value:1,
                    label:"套餐"
                },
                {
                    value:2,
                    label:"热销"
                },

            ],
            value1:"",
            value2:"",
            tableData:[],
            //下拉框2
            arr1:[
                {
                   pro:1,
                   label:"米饭" ,
                   type:1
                   
                },
                {
                   pro:1,
                   label:"馒头",
                   type:1
                   
                },
                {
                   pro:6,
                   label:"花卷" ,
                   type:2
                   
                },

            ],
            fanan:[
                {
                    value:1,
                    label:"方案一"
                },
                {
                    value:2,
                    label:"方案二"
                }
            ],
            an:[
                {
                    val:4,
                    label:"处理",
                    type:1
                },
                {
                    val:5,
                    label:"等待",
                    type:2
                },
                {
                    val:6,
                    label:"获取",
                    type:1

                }
            ],
            resolve:"",
            result:"",
            // 表格数据
            toUp:false,
            // 表单数据
            form:{
                realname:'',
                gender:'',
                type:'',
                status:'',
                username:''
            },
            visible:false,	 //可见性
        }
    },

    computed:{
        ...mapGetters(['getTableData'])
    },

    created() {
            this.findTableData();
            // this.loadData();
        },
    
    methods:{

        ...mapActions(['findTableData']),
        // 数据显示
        // loadData(){
        //     $.get("http://203.195.251.185:8282/student/findAll",(result)=>{
        //         console.log(result)
        //         this.tableData=result.data
        //     });
        // },

        //添加
        addContent(){
            this.visible=true
            this.form=""  //初始化模态框
        },

        saveDatas(){

        },
        
        // //修改
        // toUpdate(row){
        //     // this.visible=true
        //     // this.form=row
        //     // alert(JSON.stringify(row))
        //     this.$router.push(
        //         {
        //             name:'AddPages',
        //             params:{aa:row}
        //         }
        //     )
        // },
        // //保存
        // saveDatas(){
        //     alert(JSON.stringify(this.form))
        //     $.post("http://203.195.251.185:8282/student/saveStudent",this.form,()=>{
        //         this.visible=false;
        //         this.loadData();
        //     })
        // },
        
        // // 删除
        // toDelete(row){
        //     this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
        //     confirmButtonText: '确定',
        //     cancelButtonText: '取消',
        //     type: 'warning',
        //     center: true
        //     }).then(() => {
        //         // alert(JSON.stringify(row.id))
        //         let id=row.id
        //         $.get("http://203.195.251.185:8282/student/deleteStudentById?id="+id,()=>{
        //             alert("success");
        //             this.loadData();
        //         })
        //     }).catch(() => {
        //     this.$message({
        //         type: 'info',
        //         message: '已取消删除'
        //     });
        //     });
        // },
        // 批量删除
        toBatchDelete(){

        },

        // 搜索
        toSearch(){

        }
    }
    
}
</script>

<style>

.el-table th{
    background: rgb(196, 236, 236);

}
.cell{
    text-align: center
}

.cell>.el-button{
    float: left;
    margin-left: 10px
}

.select{
    padding-bottom: 30px
}




</style>



