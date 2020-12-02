import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0){
      amount = 0
    }
    if(count > 8){
      amount = alert("8 is the maximum paragraphs at one time")
      amount = 0;
    }
    setText(data.slice(0, amount));
  }
  return (
  <section className="section-center"><h3>Tired of boring lorem ipsum?</h3>
  <form className="lorem-form" onSubmit={handleSubmit}>
    <label htmlFor="amount"> 
    paragraphs:
    </label>
    <input type="number" name="amount" id="amount" 
    value={count}
    onChange={(e)  => setCount(e.target.value)}
    />
    <button type="submit" class="btn">Generate</button>
  </form>
  <article className="lorem-text">
  {text.map((item,index)=> {
    return <p key={index}> {item}</p>
  })}
   
  </article>
  </section>
    )
}

export default App;
