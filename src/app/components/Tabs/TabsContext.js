import React, { createContext } from 'react';

const TabsContext = createContext( null );

export function TabsContextProvider( { children, value } ) {
  return (
    <TabsContext.Provider value={value}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabsContext() {
  const context = React.useContext( TabsContext );
  if ( !context ) {
    throw new Error( 'useTabsContext must be used within a TabsProvider' );
  }
  return context;
}
