// change canvas size
document.getElementById('mychart').width = 400;
document.getElementById('mychart2').width = 400;

let myChart = document.getElementById('mychart').getContext('2d');
let blue = 'rgb(24, 116, 210)'
const image1 = new Image();
// image.src = ['image/arcgis.png','image/R.jpg','image/CSS.png','image/ae.png','image/react.png']
image1.src = 'image/arcgis.png'
let massPopChart = new Chart(myChart,{
  type:'radar',// bar, horizontalBar, Pie, Line, doughnet, radar, polarArea
  data:{
    labels:['ArcGIS','QGIS','Python','HTML,CSS,JS','GeoServer'],
    datasets:[
      {label: 'Skills',
        data:[4.8, 4.9, 4.3, 3.8, 3.5,],
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: blue,
        clip: -2
      }
    ]
  },
  options:{
    scales:{
      // for radial charts = r
      r: {
        ticks: {
          color: 'rgba(0,0,0,1)',
          backdropColor: 'rgba(255,255,255,0)',
          display:true,
          stepSize: 1,
        },
        beginAtZero: true,
        pointLabels: {
          font:{
            family: "sans-serif",
            style: 'italic',
            size: 18,
          }
        }
      },
      title:{
        text: 'hello',
        display: false
      }
    },
    plugins:{
      legend:{
        display: false,
      },
      labels:{
        font:{
          size: 20,
        }
      }
    }
  },
});

let myChart2 = document.getElementById('mychart2').getContext('2d');

let massPopChart1 = new Chart(myChart2,{
  type:'radar',// bar, horizontalBar, Pie, Line, doughnet, radar, polarArea
  data:{
    labels:['Solution-finding','Efficiency','Communication','Stamina','Accuracy'
    ],
    datasets:[
      {label: 'Skills',
        data:[4.7, 4.8, 3.7, 4.7, 3.9],
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: blue,
        clip: -2
      }
    ]
  },
  options:{
    scales:{
      // for radial charts = r
      r: {
        ticks: {
          color: 'rgba(0,0,0,1)',
          backdropColor: 'rgba(255,255,255,0)',
          display:true,
          stepSize: 1,
        },
        beginAtZero: true,
        pointLabels: {
          font:{
            family: "sans-serif",
            style: 'italic',
            size: 18,
          }
        }
      },
      title:{
        text: 'hello',
        display: false
      }
    },
    plugins:{
      legend:{
        display: false,
      },
      labels:{
        font:{
          size: 20,
        }
      }
    }
  },
});

Chart.defaults.font.size = 10;