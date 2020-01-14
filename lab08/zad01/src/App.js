import React from 'react';

// CSS
import './App.css';

// CSS Modules
import styles from './App.module.css';

// Styled Components
import styled from 'styled-components';

const Box = styled.div`
  background-color: red;
  width: 600px;
  height: 200px;
  text-align: center;
`;
const Text = styled.h2`
  color: white;
`;

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: 'red',
          width: '600px',
          height: '200px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ color: 'white' }}>Hello World Inline CSS</h2>
      </div>

      <div className="box">
        <h2 className="text">Hello World CSS</h2>
      </div>

      <div className={styles.box}>
        <h2 className={styles.text}>Hello World CSS Module</h2>
      </div>

      <Box>
        <Text>Hello World Styled Components</Text>
      </Box>
    </>
  );
}

export default App;
