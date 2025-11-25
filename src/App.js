
import './App.css';
import Linechart from './components/LineChart';
import PieChartDemo from './components/PieChartDemo';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="container mt-4">
      <div className='row'>

        <div className='col-6'>
          <div className='card'>
            <div className='card-header'>
              <h3>Pie Chart</h3>
            </div>
            <div className='card-body'>
              <PieChartDemo />
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='card'>
            <div className='card-header'>
              <h3>Vertical Bar charts</h3>
            </div>
            <div className='card-body'></div>
            <Linechart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
