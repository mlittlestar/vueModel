<template>
    <div id="line" :style="{width: '100%', height: '400px'}">
        {{msg}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"Hello"
        }
    },
    mounted(){
        var dom = document.getElementById('line')
        var myChart = this.echarts.init(dom)

        // 绘制图表
        myChart.setOption({
            title: {
                
            },
            tooltip: {},
            color:['red','green','orange'],
            legend: {
                data:[{
                    name:'新报',
                },
                {
                    name:'流失',
                },
                {
                    name:'续费',
                }
                ],
                bottom:5
            },
            xAxis: {
                data: ["100","200","20","30","60","89"],
                // splitLine:{show: false},//去除网格线
            },
            yAxis: {
                splitLine:{      
                    show:true,
                    lineStyle:{
                        type:'dashed'   //设置虚线
                    }
                },
                axisLine: {show:false},
            },
            series: [
                {
                    smooth: true,
                    name: '新报',
                    type: 'line',
                    data: [800, 900, 220, 180, 630, 240],
                    
                },
                {
                    smooth: true,
                    name: '流失',
                    type: 'line',
                    data: [180, 490, 100, 210, 130, 80],
                    // itemStyle:{
                    //     normal:{
                    //         // color: "#386db3",//折线点的颜色
                    //         lineStyle: {
                    //         color: "green"//折线的颜色
                    //         }
                    //     }
                    // }
                    
                },
                {
                    smooth: true,
                    name: '续费',
                    type: 'line',
                    data: [180, 490, 40, 50, 790, 80],
                    // itemStyle:{
                    //     normal:{
                    //         // color: "#386db3",//折线点的颜色
                    //         lineStyle: {
                    //         color: "orange"//折线的颜色
                    //         }
                    //     }
                    // }
                }
            ]
        })
    },
    
}
</script>