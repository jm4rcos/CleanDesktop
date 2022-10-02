import React, { createContext, useState } from "react";

const NavigationContext = createContext({
  projectData: [],
  setProjectData: () => {},
  forceUpdate: Boolean,
  setForceUpdate: () => {},
});

export const NavigationProvider = ({ children }) => {
    const [projectData, setProjectData] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(false);

    return (
      <NavigationContext.Provider
        value={{
          projectData,
          setProjectData,
          forceUpdate,
          setForceUpdate
        }}
      >
        {children}
      </NavigationContext.Provider>
    );
}

export default NavigationContext;