import './App.css';
import './components/CustomTextBox.js'
import CustomTextBox from './components/CustomTextBox.js';
import HexagonImage from './components/DP.js';
import MobileNavigation from './components/HamburgerMenu.js';

function App() {
  return (
    <div>
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <body class="App-body">
      <h1 class = "App-header">SAGAR VINCENT</h1>
        <CustomTextBox/>
        <HexagonImage/>
        <MobileNavigation/>
      </body>
      
    </div>
  );
}

export default App;
