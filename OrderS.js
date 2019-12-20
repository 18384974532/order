    window.onload = function (){
    		//指定图表的配置项和数据
    		option = {
    				//标题
    			    title: {
    			        text: '热卖前三口味统计'
    			    },
    			    tooltip: {},
    			    legend: {
    			        data: ['叉烧包', '辣炒年糕','美味大闸蟹']
    			    },
    			    radar: {
    			        // shape: 'circle',
    			        name: {
    			            textStyle: {
    			                color: '#fff',
    			                backgroundColor: '#999',
    			                borderRadius: 3,
    			                padding: [3, 5]
    			           }
    			        },
    			        indicator: [
    			           { name: '甜度', max: 10000},
    			           { name: '咸度', max: 10000},
    			           { name: '辣度', max: 10000},
    			           { name: '酸度', max: 10000},
    			           { name: '麻度', max: 10000},
    			           { name: '苦度', max: 10000}
    			        ]
    			    },
    			    series: [{
    			        name: '预算 vs 开销（Budget vs spending）',
    			        type: 'radar',
    			        // areaStyle: {normal: {}},
    			        data : [
    			            {
    			                value : [5000, 8000, 1000, 4000, 7000, 4000],
    			                name : '叉烧包'
    			            },
                      {
    			                value : [5000, 6000, 8000, 2000, 3000, 5000],
    			                name : '辣炒年糕'
    			            },
    			             {
    			                value : [2000, 6000, 4000, 1000, 7000, 1000],
    			                name : '美味大闸蟹'
    			            }
    			        ]
    			    }]
    			};
    			//获取dom容器
    			var myChart = echarts.init(document.getElementById('chartmain'));
    			// 使用刚指定的配置项和数据显示图表。
    			myChart.setOption(option);


          var option = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 120, '叉烧包'],
            [57.1, 34, '牛肉丸粿条'],
            [74.4, 29, '反沙芋头'],
            [50.1, 77, '广东肠粉'],
            [89.7, 67, '臭豆腐'],
            [68.1, 45, '麻婆豆腐'],
            [19.6, 103, '辣炒年糕'],
            [10.6, 88, '煲仔饭'],
            [10.6, 145, '美味大闸蟹'],
            [32.7, 15, '桂花糖藕']
        ]
    },
    grid: {containLabel: true},
    xAxis: {name: '份数'},
    yAxis: {name:'种类',type: 'category'},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#D7DA8B', '#E15457']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
            }
        }
    ]
};

      			//获取dom容器
      			var myChart1 = echarts.init(document.getElementById('chartmain1'));
      			// 使用刚指定的配置项和数据显示图表。
      			myChart1.setOption(option);


            option = {
    backgroundColor: '#FAE8C8',

    title: {
        text: '食材种类',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#555'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'肉禽蛋类'},
                {value:310, name:'水产类'},
                {value:274, name:'蔬菜类'},
                {value:235, name:'豆类'},
                {value:400, name:'果品类'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'black'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'black'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

              var myChart3 = echarts.init(document.getElementById('chartmain3'));
        			// 使用刚指定的配置项和数据显示图表。
        			myChart3.setOption(option);

    }
