<template>
    <div class="add">
        {{ruleForm}}
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- 标题头 -->
        <div class="one">
            <p>
            <span><h2>编辑案例</h2></span>
            </p>
            <div>
                <el-form-item label="姓名：" prop="realname"
                :rules="[
                    { required: true, message: '姓名不能为空'},
                    ]"
                >
                    <el-input v-model="ruleForm.realname" style="width:500px"></el-input>
                    <span>建议20个汉字以内，文案生动，吸引眼球</span>
                </el-form-item>
            </div>
            <div class="o_one"></div>
        </div>
            <!-- 文字输入 -->
            <div class="two">
                <p class="t_one">
                    <el-form-item label="性别：" prop="gender"
                    :rules="[
                    { required: true, message: '性别不能为空'},
                    ]"
                    >
                        <el-input
                        v-model="ruleForm.gender"
                        style="width:500px"
                        type="textarea"
                        >
                        </el-input>
                        <span>已输入{{ruleForm.gender.length}}字,已输入{{Math.ceil(ruleForm.gender.length/24)}}行</span>
                    </el-form-item>
                </p>

                <p class="t_two">
                    <el-form-item label="种类：" prop="type"
                    :rules="[
                    { required: true, message: '种类不能为空'},
                    ]"
                    >
                        <el-input
                        v-model="ruleForm.type"
                        style="width:500px"
                        type="textarea"
                        >
                        </el-input>
                        <span>已输入{{this.ruleForm.type.length}}字,已输入{{Math.ceil(this.ruleForm.type.length/24)}}行</span>
                    </el-form-item>
                </p>

                <p class="t_two">
                    <el-form-item label="状态：" prop="status"
                    :rules="[
                    { required: true, message: '状态不能为空'},
                    ]"
                    >
                        <el-input
                        v-model="ruleForm.status"
                        style="width:500px"
                        type="textarea"
                        >
                        </el-input>
                        <span>已输入{{ruleForm.status.length}}字,已输入{{Math.ceil(ruleForm.status.length/24)}}行</span>
                    </el-form-item>
                </p>

                <p class="t_two">

                    <el-form-item label="用户名：" prop="username"
                    :rules="[
                    { required: true, message: '用户名不能为空'},
                    ]"
                    >
                        <el-input
                        v-model="ruleForm.username"
                        style="width:500px"
                        type="textarea"
                        >
                        </el-input>
                        <span>已输入{{ruleForm.username.length}}字,已输入{{Math.ceil(ruleForm.username.length/24)}}行</span>
                    </el-form-item>
                </p>
                <el-form-item>
                    <p style="margin-left:80px">建议背景、目标、策略、效果累计150个汉字，目前已累计{{Math.ceil(ruleForm.status.length/24)
                    +Math.ceil(ruleForm.gender.length/24)+Math.ceil(ruleForm.type.length/24)+Math.ceil(ruleForm.username.length/24)}} 行。</p>
                </el-form-item>
                
                <div class="t_th"></div>
            </div>
        

             <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"> -->
            <!-- 下拉框选择 -->
            <div class="three">
                <div class="th_one">
                    <el-form-item label="案例标签：">
                        <span>标签1和标签2必填，如无相关解决方案，标签3留空即可</span>
                    </el-form-item>
                </div>

                <!-- <div class="th_two">
                    <el-form-item label="标签1：">
                        <el-form-item label="相关行业" prop="value"
                        :rules="[
                        { required: true, message: '请选择'},
                        ]"
                        >
                            <el-select v-model="ruleForm.value"  size="small" style="width:150px">
                            <el-option
                            v-for="item in arr"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        </el-form-item>
                    </el-form-item>
                   
                </div> -->

                <div class="th_three">
                    <el-form-item label="标签2：" size="small">
                        <el-form-item label="相关产品" prop="value"
                        :rules="[
                        { required: true, message: '请选择'},
                        ]"
                        >
                            <el-select v-model="ruleForm.value" size="small" style="width:150px">
                                <el-option
                                v-for="item in arr"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                >
                                </el-option>
                            </el-select>

                            <el-select v-model="ruleForm.value" size="small" style="width:150px">
                                <el-option
                                v-for="item in arr1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                >
                                </el-option>
                            </el-select>

                            <span>标签文案：</span>
                            <el-input v-model="input" placeholder="请输入内容" size="small" style="width:150px"></el-input>
                            <el-checkbox v-model="checked">在产品页面显示此案例</el-checkbox>
                            
                            </el-form-item>
                    </el-form-item>
                    
                </div>

                <div class="th_four">
                    <el-form-item label="标签3：" >
                        <el-form-item label="相关方案"  prop="value2"
                        :rules="[
                        { required: true, message: '请选择'},
                        ]">
                            <el-select v-model="ruleForm.value2" placeholder="请选择" size="small" style="width:150px">
                                <el-option
                                v-for="item in vv1"
                                :key="item.value2"
                                :label="item.label"
                                :value="item.value2"
                                >
                                </el-option>
                            </el-select>
                            <span>标签文案：</span>
                            <el-input v-model="input" placeholder="请输入内容" size="small" style="width:150px"></el-input>
                            <el-checkbox v-model="checked">在解决方案页面显示此案例</el-checkbox>
                        </el-form-item>
                    </el-form-item>
                </div>


                <div class="th_f"></div>
            </div>
        
        <!-- 数据展示 -->
        <div class="four">
            <div class="f_one">
                <el-form-item label="案例数据：">
                    <span>请至少填写一条数据</span>
                </el-form-item>
                
            </div>
            <div class="f_two">

                <el-form-item label="数据" style="float:left">
                    <el-input v-model="data"  size="small" style="width:100px"></el-input>
                </el-form-item>
                <el-form-item label="数据" >
                    <el-input v-model="bai"  size="small" style="width:100px"></el-input>
                </el-form-item>

                
                
            </div>

            <div class="f_three">
                <el-form-item label="描述" style="float:left">
                    <el-input v-model="data1"  size="small" style="width:100px"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="bai1"  size="small" style="width:100px"></el-input>
                </el-form-item>
                <div class="f_f"></div>
            </div>
        </div>
        <div class="five"></div>
        <div class="six">
            <div class="s_one">
                
                    <el-button type="primary"  @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="toBack">返回</el-button>
                
            </div>
            
        </div>
        </el-form>

    </div>
</template>

<script>
export default {
    data(){
        var checkTitle = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('标题不能为空'));
            }
        };

        return{
            input:"",
            textarea:"",
            data:"2100人",
            bai:"26%",
            data1:"有效转化",
            bai1:"转化率",
            ruleForm:{
                username:"",
                realname:"",
                status:"",
                type:"",
                gender:"",
                value:"",
            },
            rules:{
                realname:[
                    { validator: checkTitle, trigger: 'blur' }
                ]
            },
            arr:[
                {
                    value:1,
                    label:"热销",
                    
                }
            ],
            arr1:[
                {
                    value:1,
                    label:"馒头"
                }
            ],
            vv1:[
                {
                    value2:1,
                    label:"方案一"
                }
            ],
            
        }
    },
    methods:{
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      toBack(){
          this.$router.push("./First")
      }

    }
}
</script>

<style>
.o_one,.t_th,.th_f,.f_f{
    border-bottom: 1px dashed #333333;
}
.s_one>.el-button{
   margin-left: 280px; 
}

</style>

