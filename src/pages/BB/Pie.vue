<template>
    <div id="pie" :style="{width: '100%', height: '400px'}">
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        var dom = document.getElementById('pie')
        var myChart = this.echarts.init(dom)
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直达','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    // avoidLabelOverlap: false,
                    label: {
                        // normal: {
                        //     show: false,
                        //     position: 'center'
                        // },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:[
                        {value:189, name:'直达'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:888, name:'百度'},
                        {value:111, name:'谷歌'},
                        {value:222, name:'必应'},
                        {value:333, name:'其他'},
                    ]
                }
            ]
        })
    }
}
</script>
