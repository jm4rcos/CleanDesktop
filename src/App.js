import React from 'react';
import { Drawer } from './components/Drawer';
import { ProjectView } from './components/ProjectView';
import { NavigationProvider } from './contexts/NavigationContext';

function App({ props }) {
  return (
    <div
      className="App"
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        background: "#F6F7F9",
      }}
    >
      <NavigationProvider>
        <Drawer props={props} />
        <ProjectView />
      </NavigationProvider>
    </div>
  );
}

export default App;
