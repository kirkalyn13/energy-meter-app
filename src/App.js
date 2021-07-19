import './App.css';
import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import DcTable from './components/DcTable'
import AcTable from './components/AcTable'
import GraphVI from './components/GraphVI'
import GraphPE from './components/GraphPE';
import axios from 'axios'



function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(false)
  //Graph Paramters
  const [xaxis, setXaxis] = useState([])
  //DC Metrics
  const [dcVoltages, setDcVoltages] = useState([])
  const [dcCurrents, setDcCurrents] = useState([])
  const [dcPowers, setDcPowers] = useState([])
  const [dcNets, setDcNets] = useState([])
  const [dcImports, setDcImports] = useState([])
  const [dcExports, setDcExports] = useState([])
  //AC Metrics
  const [acVoltages, setAcVoltages] = useState([])
  const [acCurrents, setAcCurrents] = useState([])
  const [acRealPowers, setAcRealPowers] = useState([])
  const [apparentPower,setApparentPower] = useState(0)
  const [powerFactor,setPowerFactor] = useState(0)
  const [acNets, setAcNets] = useState([])
  const [acImports, setAcImports] = useState([])
  const [acExports, setAcExports] = useState([])
  const [frequency, setFrequency] = useState(0)
  

const refresh = () => {
  setRefreshTrigger(!refreshTrigger)
}
  useEffect(() => {
    setTimeout(()=>{
      refresh()
    },5000)
    getGraphValues()
  },[refreshTrigger])

  const getGraphValues = () => {
    axios.get('http://localhost:3001/metrics').then((response)=>{
      //Parse timestamps for XAxis
      setXaxis(response.data.map(value => value.timestamp))
      //Parse DC Metrics
      setDcVoltages(response.data.map(value => value.finalVoltageDC))
      setDcCurrents(response.data.map(value => value.finalCurrentDC))
      setDcPowers(response.data.map(value => value.finalPowerDC))
      setDcNets(response.data.map(value => value.netEnergyDC))
      setDcImports(response.data.map(value => value.importEnergyDC))
      setDcExports(response.data.map(value => value.exportEnergyDC))
      //Parse AC Metrics
      setAcVoltages(response.data.map(value => value.finalRMSVoltageAC))
      setAcCurrents(response.data.map(value => value.finalRMSCurrentAC))
      setAcRealPowers(response.data.map(value => value.realPowerAC))
      setAcNets(response.data.map(value => value.netEnergyAC))
      setAcImports(response.data.map(value => value.importEnergyAC))
      setAcExports(response.data.map(value => value.exportEnergyAC))
      setApparentPower(response.data[0].apparentPowerAC)
      setPowerFactor(response.data[0].powerFactorAC)
      setFrequency(response.data[0].frequencyAC)
    })
  }
  
  
  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
      <div className="container-tables">
        <Route exact path="/">
          <DcTable finalVoltage={dcVoltages[0]} finalCurrent={dcCurrents[0]} finalPower={dcPowers[0]} 
                netEnergy={dcNets[0]} importEnergy={dcImports[0]} exportEnergy={dcExports[0]}/>
          <GraphVI voltages={dcVoltages} currents={dcCurrents} xvalues={xaxis}/>
          <GraphPE xvalues={xaxis} powers={dcPowers} nets={dcNets} imports={dcImports} exports={dcExports} />
        </Route>
        <Route path="/ac">
          <AcTable  finalVoltage={acVoltages[0]} finalCurrent={acCurrents[0]} realPower={acRealPowers[0]} 
            apparentPower={apparentPower} powerFactor={powerFactor} netEnergy={acNets[0]} 
            importEnergy={acImports[0]} exportEnergy={acExports[0]} frequency={frequency}/>
          <GraphVI voltages={acVoltages} currents={acCurrents} xvalues={xaxis}/>
          <GraphPE xvalues={xaxis} powers={acRealPowers} nets={acNets} imports={acImports} exports={acExports}/>
        </Route>
      </div>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
