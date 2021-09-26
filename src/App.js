//import React from 'react'
//import NewProject from "./TestCom/NewProject"
/*const App = () => {
 //return (
    //<div>
      //<NewProject />
    //</div>
  )
}

export default App*/




import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {DummyHome, DummyAbout} from "./TestCom/DummyHome"
import Header from './TestCom/Header'
import NewProject from './TestCom/NewProject'
const App = () => {
  return (
       <Router>
        <Header/>
         <Switch>
            <Route path="/" exact component={DummyHome}></Route>
            <Route path="/newProject" exact component={NewProject}></Route>
            <Route path="/About" exact component={DummyAbout}></Route>
          </Switch>
        </Router>
  )
}

export default App

/*import React from 'react'
import GitHubApp from './OurBuild/GitHubApp';

const App = () => {
  return (
    <div>
      <GitHubApp />
    </div>
  )
}

export default App*/