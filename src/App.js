import React from 'react';
import { Drawer } from './components/Drawer';
import { ProjectView } from './components/ProjectView';

function App({ props }) {
  return (
    <div
      className="App"
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        background: '#F6F7F9'
      }}
    >
      <Drawer props={props}/>
      <ProjectView />
    </div>
  );
}

export default App;
