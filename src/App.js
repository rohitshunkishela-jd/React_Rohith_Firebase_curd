
import './App.css';
import PieChartDemo from './components/PieChartDemo';
import VerticalBarChartDemo from './components/VerticalBarChartDemo';
function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='card'>
          <div className='card-header'>
            <h3>Pie Chart</h3>
          </div>
          <div className='card-body'>
                <PieChartDemo/>
          </div>
          <div className='card'>
            <div className='card-header'>
              <h3>Vertical Bar charts</h3>
            </div>
            <div className='card-body'></div>
            <VerticalBarChartDemo/>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
