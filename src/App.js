import {AppContext,store} from './redux'
import One from './one';
import Two from './two';
import Three from './three';
import './index.css'



function App() {
  // const [state,setState] =useState({
  //   user:{name:'丑八怪',age:18}
  // })

  return (
    <AppContext.Provider value={store}>
        <One />
        <Two />
        <Three />
    </AppContext.Provider>
  );
}

export default App;
