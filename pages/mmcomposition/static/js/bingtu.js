var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

var data = [
    {
        name: 'Perception',
        itemStyle: {
            color: '#84c3b7'
        },
        children: [
            {
                name: 'Object\nPerception',
                value: 1,
                itemStyle: {
                    color: '#e9eee0'
                }
            },
            {
                name: 'Attribute\nPerception',
                value: 1,
                itemStyle: {
                    color: '#ebf1b7'
                }
            },
            {
                name: 'Relation\nPerception',
                value: 1,
                itemStyle: {
                    color: '#e2ebcf'
                }
            },
            {
                name: 'Counting\nPerception',
                value: 1,
                itemStyle: {
                    color: '#d6e4bb'
                }
            },
            {
                name: 'Difference\nSpotting',
                value: 1,
                itemStyle: {
                    color: '#eef5d9'
                }
            },
            {
                name: 'Text\nRendering',
                value: 1,
                itemStyle: {
                    color: '#d5ead5'
                }
            },
            {
                name: 'Visual\nSimilarity',
                value: 1,
                itemStyle: {
                    color: '#c8d6cf'
                }
            }
        ]
    },
    {
        name: 'Reasoning',
        itemStyle: {
            color: '#f2b56f'
        },
        children: [
            {
                name: 'Object\nReasoning',
                value: 1,
                itemStyle: {
                    color: '#ffcea2'
                }
            },
            {
                name: 'Attribute\nReasoning',
                value: 1,
                itemStyle: {
                    color: '#faeed3'
                }
            },
            {
                name: 'Counting\nReasoning',
                value: 1,
                itemStyle: {
                    color: '#fedec0'
                }
            },
            {
                name: 'Object\nInteraction',
                value: 1,
                itemStyle: {
                    color: '#fbe7d2'
                }
            },
            {
                name: 'Spatial\nRelation\nReasoning',
                value: 1,
                itemStyle: {
                    color: '#f8f3da'
                }
            },
            {
                name: 'VL\nComposition\nProbing',
                value: 1,
                itemStyle: {
                    color: '#fcecd0'
                }
            }
        ]
    }
];

option = {
    series: {
        type: 'sunburst',
        data: data,
        radius: [0, '95%'],
        sort: undefined,
        emphasis: {
            focus: 'ancestor'
        },
        startAngle: 180,  // Adjust start angle to split horizontally
        label: {
            textStyle: {
                fontSize: 12,
                fontFamily: 'serif'
            }
        },
        levels: [
            {},
            {
                r0: '16%',
                r: '40%',
                itemStyle: {
                    borderRadius: 6,
                    borderWidth: 4
                },
                label: {
                    rotate: 'tangential'
                }
            },
            {
                r0: '40%',
                r: '75%',
                itemStyle: {
                    borderRadius: 6,
                    borderWidth: 4
                },
                label: {
                    align: 'right'
                }
            },
            {
                r0: '75%',
                r: '77%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {}
            }
        ]
    }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
