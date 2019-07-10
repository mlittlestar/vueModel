<template>
    <div id="echartphoto" :style="{width: '100%', height: '400px'}">
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
    mounted() {
      var dom = document.getElementById('echartphoto')
      var myChart = this.echarts.init(dom)
      // 绘制图表
      myChart.setOption({
        title: {
            text: '2016年12月长宁区合规成本分析'
        },
        tooltip: {},
        legend: {
            data:['包租费', '装修费', '保洁费','物业费']
        },
        dataset: {
            dimensions: ['product', '包租费', '装修费', '保洁费','物业费'],
            source: [
                {product: '新虹桥', '包租费': 20, '装修费': 10, '保洁费': 2,'物业费':0.5},
                {product: '中山公园', '包租费': 12, '装修费': 20, '保洁费': 2,'物业费':2.5},
                {product: '虹桥', '包租费': 32, '装修费': 5, '保洁费': 3,'物业费':3.5},
                {product: '镇宁路', '包租费': 34, '装修费': 8, '保洁费': 4,'物业费':2},
                {product: '天山古北', '包租费': 32, '装修费': 4, '保洁费': 2,'物业费':1}
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {
            name: '总价（万元）',
        },
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ]
      });
    },
}
</script>
