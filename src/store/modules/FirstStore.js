import axios from '@/store/axios.js'




export default{
    //定义数据
    state:{
        tableData:null
    },
    //获取数据
    getters:{
        getTableData:(state)=>{
            return state.tableData
        }
    },
    //突变，修改数据
    mutations:{
        alterTableData:(state,data)=>{
            state.tableData=data
        }
    },
    //异步操作，不能修改数据
    actions:{
        //查找所有信息
        findTableData:(context)=>{
            return new Promise((resolve,reject)=>{
                axios.get('/student/findAll').then(({data})=>{
                        if(data.status == 200){
                        context.commit('alterTableData',data.data),
                        resolve(data),
                        console.log(data)
                    }
                })
            }).catch((error)=>{
                reject(error)
            })
        },
        // 通过id删除信息
		deleteGradeById:(context,id)=>{
			return new Promise((resolve,reject)=>{
				axios.get('/student/deleteStudentById',{params:{id}}).then(({data})=>{
					if(data.status == 200){
						resolve(data);
					} else { reject(data) }
				}).catch((error)=>{
					reject(error);
				});
			});
        },
        //保存或更新年级信息
		saveOrUpdateGrade:(context,student)=>{
			return new Promise((resolve,reject)=>{
				axios.post('/student/saveStudent',student).then(({data})=>{
					if(data.status == 200){
						resolve(data);
					} else {reject(data)}
				}).catch((error)=>{
					reject(error);
				});
			});
        },
    }

}