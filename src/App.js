import logo from './logo.svg';
import quizimage from "./quiz-2058883_1280.png"
import './App.css';
import './Quizz.css';

function App() {
  return (<section className="cadrecentrale">
            
              <div>
                <img src={quizimage}></img>
              </div>
              <div>
                  <h1>Welcome In QuiZZ</h1>
                  <p class="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</p>
              </div>
              <div>
                <button> Start </button>
              </div>
            

          </section>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
