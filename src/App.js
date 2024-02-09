import './App.css';
import Tab_Handover from './Components/Tab_Handover';

const myData = {
  "legendData": [
    {
      "name": "Segment",
      "checked": true,
      "value": "Segment",
      "colorLegendItems": [
        { "text": "Item 1", "color": { "r": 255, "g": 0, "b": 0, "a": 1 }, "count": 10 },
        { "text": "Item 2", "color": { "r": 0, "g": 255, "b": 0, "a": 0.8 }, "count": 20 },
        { "text": "Item 3", "color": { "r": 0, "g": 0, "b": 255, "a": 0.6 }, "count": 30 }
      ]
    },
    {
      "name": "PSC/PCI",
      "checked": false,
      "value": "PSC/PCI",
      "colorLegendItems": [
        { "text": "Item 1", "color": { "r": 255, "g": 255, "b": 0, "a": 1 }, "count": 15 },
        { "text": "Item 2", "color": { "r": 255, "g": 0, "b": 255, "a": 0.8 }, "count": 25 },
        { "text": "Item 3", "color": { "r": 0, "g": 255, "b": 255, "a": 0.6 }, "count": 35 },
        { "text": "Item 4", "color": { "r": 128, "g": 0, "b": 128, "a": 0.4 }, "count": 45 },
        { "text": "Item 5", "color": { "r": 0, "g": 128, "b": 0, "a": 0.2 }, "count": 55 }
      ]
    }
  ],
}

//const myData = JSON.parse(myDataJson);


function App() {
  return (
    <div>
      <Tab_Handover {...myData} />
    </div>
  );
}

export default App;
