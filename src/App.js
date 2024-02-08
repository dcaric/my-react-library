import './App.css';
import { Panel_ColorLegend } from './Components/Panel_ColorLegend';

//const myDataJson = { "availableColorLegendTypes": [{ "name": "Segment", "checked": true, "value": "sector" }, { "name": "PSC/PCI", "checked": false, "value": "pci" }], "segmentNamesWithNodeCount": { "10/24041": 36, "10/44041": 18, "10/24053": 70, "10/24063": 5 }, "pciValuesWithNodeCount": { "129": 57, "467": 67, "468": 5 }, "activeColorLegendType": "sector", "idPrefix": "la_" };
//const myData = {"availableColorLegendTypes":[{"name":"Segment","checked":true,"value":"sector"},{"name":"PSC/PCI","checked":false,"value":"pci"}],"segmentNamesWithNodeCount":{"10/24041":36,"10/44041":18,"10/24053":70,"10/24063":5},"pciValuesWithNodeCount":{"129":57,"467":67,"468":5},"activeColorLegendType":"sector","idPrefix":"anroid_"};
const myDataJson = '{"availableColorLegendTypes":[{"name":"Segment","checked":true,"value":"sector"},{"name":"PSC/PCI","checked":false,"value":"pci"}],"segmentNamesWithNodeCount":{"10/24041":36,"10/44041":18,"10/24053":70,"10/24063":5},"pciValuesWithNodeCount":{"129":57,"467":67,"468":5},"activeColorLegendType":"sector","idPrefix":"la_"}';

const myData = JSON.parse(myDataJson);


function App() {
  return (
    <div>
      <Panel_ColorLegend {...myData} />
    </div>
  );
}

export default App;
