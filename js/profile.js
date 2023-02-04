//checbox img change
document.addEventListener('DOMContentLoaded', function () {
    var checkbox_items = document.querySelectorAll('.row2__col2__checklist-item');
    checkbox_items.forEach(element => {
        if (element.classList.contains('is-checked'))
            element.querySelector('.row2__col2__checklist-item-img').src = "./img/icons/checkboxes/checked.svg";
    });
});

//chart2
const bar_chart = document.getElementById('user-profit-chart').getContext('2d');
const chart2 = new Chart(bar_chart, {
    "type": "bar",
    "data": {
        "datasets": [
            {
                "label": "ROTO",
                "data": [
                    12000,
                    31000,
                    15000,
                    27000,
                    25000,
                    20000,
                    37000
                ],
                "fill": false,
                "spanGaps": false,
                "lineTension": 0.4,
                "pointRadius": 3,
                "pointHoverRadius": 3,
                "pointStyle": "circle",
                "borderDash": [
                    0,
                    0
                ],
                "barPercentage": 0.1,
                "categoryPercentage": 1,
                "type": "bar",
                "borderColor": "",
                "backgroundColor": "#2F53FF",
                "borderWidth": 0,
                "hidden": false,
                "yAxisID": "Y1"
            }
        ],
        "labels": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    "options": {
        "title": {
            "display": true,
            "position": "top",
            "fontSize": 14,
            "fontFamily": "Roboto",
            "fontColor": "#F2AE14",
            "fontStyle": "bold",
            "padding": 10,
            "lineHeight": 1.2,
            "text": "Всего заработано за период: "
        },
        "layout": {
            "padding": {
                "left": 25,
                "right": 25,
                "top": 25,
                "bottom": 25
            }
        },
        "legend": {
            "display": true,
            "position": "top",
            "align": "center",
            "fullWidth": true,
            "reverse": false,
            "labels": {
                "fontSize": 15,
                "fontFamily": "Roboto",
                "fontColor": "#ffff",
                "fontStyle": "normal",
                "padding": 10
            }
        },
        "scales": {
            "xAxes": [
                {
                    "id": "X1",
                    "display": true,
                    "position": "bottom",
                    "type": "category",
                    "stacked": false,
                    "time": {
                        "unit": false,
                        "stepSize": 1,
                        "displayFormats": {
                            "millisecond": "h:mm:ss.SSS a",
                            "second": "h:mm:ss a",
                            "minute": "h:mm a",
                            "hour": "hA",
                            "day": "MMM D",
                            "week": "ll",
                            "month": "MMM YYYY",
                            "quarter": "[Q]Q - YYYY",
                            "year": "YYYY"
                        }
                    },
                    "distribution": "linear",
                    "gridLines": {
                        "display": true,
                        "color": "rgba(0, 0, 0, 0.1)",
                        "borderDash": [
                            0,
                            0
                        ],
                        "lineWidth": 1,
                        "drawBorder": true,
                        "drawOnChartArea": true,
                        "drawTicks": true,
                        "tickMarkLength": 10,
                        "zeroLineWidth": 1,
                        "zeroLineColor": "rgba(0, 0, 0, 0.25)",
                        "zeroLineBorderDash": [
                            0,
                            0
                        ]
                    },
                    "angleLines": {
                        "display": true,
                        "color": "rgba(0, 0, 0, 0.1)",
                        "borderDash": [
                            0,
                            0
                        ],
                        "lineWidth": 1
                    },
                    "pointLabels": {
                        "display": true,
                        "fontColor": "#666",
                        "fontSize": 10,
                        "fontStyle": "normal"
                    },
                    "ticks": {
                        "display": true,
                        "fontSize": 12,
                        "fontFamily": "sans-serif",
                        "fontColor": "#666666",
                        "fontStyle": "normal",
                        "padding": 0,
                        "stepSize": null,
                        "minRotation": 0,
                        "maxRotation": 50,
                        "mirror": false,
                        "reverse": false
                    },
                    "scaleLabel": {
                        "display": false,
                        "labelString": "Axis label",
                        "lineHeight": 1.2,
                        "fontColor": "#666666",
                        "fontFamily": "sans-serif",
                        "fontSize": 12,
                        "fontStyle": "normal",
                        "padding": 4
                    }
                }
            ],
            "yAxes": [
                {
                    "id": "Y1",
                    "display": true,
                    "position": "left",
                    "type": "linear",
                    "stacked": false,
                    "time": {
                        "unit": false,
                        "stepSize": 1,
                        "displayFormats": {
                            "millisecond": "h:mm:ss.SSS a",
                            "second": "h:mm:ss a",
                            "minute": "h:mm a",
                            "hour": "hA",
                            "day": "MMM D",
                            "week": "ll",
                            "month": "MMM YYYY",
                            "quarter": "[Q]Q - YYYY",
                            "year": "YYYY"
                        }
                    },
                    "distribution": "linear",
                    "gridLines": {
                        "display": true,
                        "color": "rgba(255, 255, 255, 0.2)",
                        "borderDash": [
                            0,
                            0
                        ],
                        "lineWidth": 1,
                        "drawBorder": true,
                        "drawOnChartArea": true,
                        "drawTicks": true,
                        "tickMarkLength": 10,
                        "zeroLineWidth": 0,
                        "zeroLineColor": "#ffffff",
                        "zeroLineBorderDash": [
                            0,
                            0
                        ]
                    },
                    "angleLines": {
                        "display": true,
                        "color": "rgba(0, 0, 0, 0.1)",
                        "borderDash": [
                            0,
                            0
                        ],
                        "lineWidth": 1
                    },
                    "pointLabels": {
                        "display": true,
                        "fontColor": "#666",
                        "fontSize": 10,
                        "fontStyle": "normal"
                    },
                    "ticks": {
                        "display": true,
                        "fontSize": 10,
                        "fontFamily": "Roboto",
                        "fontColor": "rgba(255, 255, 255, 0.2)",
                        "fontStyle": "normal",
                        "padding": 10,
                        "stepSize": null,
                        "minRotation": 0,
                        "maxRotation": 50,
                        "mirror": false,
                        "reverse": false
                    },
                    "scaleLabel": {
                        "display": false,
                        "labelString": "Axis label",
                        "lineHeight": 1.2,
                        "fontColor": "#666666",
                        "fontFamily": "sans-serif",
                        "fontSize": 12,
                        "fontStyle": "normal",
                        "padding": 4
                    }
                }
            ]
        },
        "plugins": {
            "datalabels": {
                "display": true,
                "align": "center",
                "anchor": "center",
                "backgroundColor": "#eee",
                "borderColor": "#ddd",
                "borderRadius": 6,
                "borderWidth": 1,
                "padding": 4,
                "color": "#666666",
                "font": {
                    "family": "sans-serif",
                    "size": 10,
                    "style": "normal"
                }
            },
            "datalabelsZAxis": {
                "enabled": false
            },
            "googleSheets": {},
            "airtable": {},
            "tickFormat": ""
        },
        "cutoutPercentage": 50,
        "rotation": -1.5707963267948966,
        "circumference": 6.283185307179586,
        "startAngle": -1.5707963267948966
    }
});