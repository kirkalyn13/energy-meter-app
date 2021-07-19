import ReactApexChart from 'react-apexcharts'

const GraphPE = ({xvalues, powers, nets, imports, exports}) => {
    const series = [{
      name: 'Power',
      type: 'area',
      data: powers
    }, {
      name: 'Net Energy',
      type: 'line',
      data: nets
    },
    {
      name: 'Import Energy',
      type: 'bar',
      data: imports
    }, {
      name: 'Export Energy',
      type: 'bar',
      data: exports
    }, ]
    
    var options = {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
        animations:{
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      grid:{
        borderColor: '#455A64'
      },
      labels: xvalues,
      markers: {
        size: 0
      },
      yaxis: [
        {
          labels:{
            style:{
              colors: ["#FFFFFF"]
            }
          },
        },
        {
          opposite: true,
          labels:{
            style:{
              colors: ["#FFFFFF"]
            }
          },
        },
      ],
      xaxis: {
        type: 'datetime',
        labels:{
          style:{
            colors:["#FFFFFF", "#FFFFFF","#FFFFFF", "#FFFFFF","#FFFFFF", "#FFFFFF", "#FFFFFF","#FFFFFF", "#FFFFFF", "#FFFFFF"]
          }
        }
      },
      legend:{
        labels:{
          colors: ["#FFFFFF"]
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    }
        return (
            <div className="container-graph">
                <h1>POWER & ENERGY</h1>
                <ReactApexChart options={options} series={series} type="area" height={350}/>
            </div>
        )
}

export default GraphPE
