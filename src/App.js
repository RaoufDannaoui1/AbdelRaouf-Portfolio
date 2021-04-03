import './App.css';
import 'antd/dist/antd.css'
import { BackTop } from 'antd'
import Landing from './Containers/Landing/Landing'
import About from './Containers/About/About'
import Projects from './Containers/Projects/Projects'
import Contact from './Containers/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Projects />
      <Contact />
      <BackTop />
    </div>
  );
}

export default App;
