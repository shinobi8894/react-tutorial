import './App.css';
import React from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => (
  <label>
    <div>
      <div className='accordion-header'>{title}</div>
      <input className='accordion-toggle' type='checkbox' />
      <div className='accordion-body'>
        <div className='accordion-body-content'>{children}</div>
      </div>
    </div>
  </label>
);

function App() {
  return (
    <div className="App">
      <h2>React Learning 1 - Accordion</h2>
      <div className='container-flex'>
        <Accordion title="What is React ?">
          <p>
            React is a popular JavaScript library used for building user interfaces for web applications. It was developed by Facebook and is maintained by both Facebook and a community of individual developers and companies.
          </p>
        </Accordion>
        <Accordion title="How to create React project ?">
          <code>npm install -g create-react-app</code>
          <code>npx create-react-app my-react-app</code>
          <code>cd my-react-app</code>
          <code>npm start</code>
        </Accordion>
        <Accordion title="How many life cycle methods on React ?">
          <p>
            <code>componentDidMount</code> : Invoked immediately after a component is mounted (inserted into the tree).
          </p>
          <p>
            <code>componentDidUpdate</code> : Invoked immediately after updating occurs.
          </p>
          <p>
            <code>componentWillUnmount</code>: Invoked immediately before a component is unmounted and destroyed.
          </p>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
