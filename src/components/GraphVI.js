import ReactApexChart from 'react-apexcharts'

const GraphVI = ({voltages, currents, xvalues}) => {
  const series = [{
    name: 'Voltage',
    data: voltages
  }, {
    name: 'Current',
    data: currents
  }]

var options = {
    chart: {
    height: 350,
    type: 'area',
    animations:{
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  grid:{
    borderColor: '#455A64'
  },
  legend:{
    labels:{
      colors: ["#FFFFFF"]
    }
  },
  yaxis: [
    {
      title: {
        text: "Voltage"
      },
      labels:{
        style:{
          colors: ["#FFFFFF"]
        }
      },
    },
    {
      opposite: true,
      title: {
        text: "Current",
      },
      labels:{
        style:{
          colors: ["#FFFFFF"]
        }
      },
    },
  ],
  xaxis: {
    type: 'datetime',
    categories: xvalues,
    labels:{
      style:{
        colors:["#FFFFFF", "#FFFFFF","#FFFFFF", "#FFFFFF","#FFFFFF", "#FFFFFF", "#FFFFFF","#FFFFFF", "#FFFFFF", "#FFFFFF"]
      }
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };
    return (
        <div className="container-graph">
            <h1>REAL TIME GRAPH</h1>
            <ReactApexChart options={options} series={series} type="area" height={350}/>
        </div>
    )
}

export default GraphVI
