import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <h1 className='names how'>How are you ? </h1>
      <h1>{2+2}</h1>
      <h1>{new Date().getTime()}</h1>
      <img/>
      <button onClick={()=>alert("Hellow")}></button>
      <h3 style={
        {
          color: 'red'
        }
      }>Inline Style</h3>
    </Fragment>
  );
};

export default App;