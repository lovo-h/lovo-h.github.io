import React, { forwardRef, useId } from 'react';
import { TabsContextProvider } from './TabsContext';
import Tab from './Tab';
import TabList from './TabList';
import TabContent from './TabContent';

const TabsRoot = forwardRef( ( props, ref ) => {
  const {
    children,
    defaultTab,
    ...additionalProps
  } = props;
  const id = useId();
  const [ activeTabAnchor, setActiveTabAnchor ] = React.useState( defaultTab );

  const contextValue = {
    id,
    activeTabAnchor,
    setActiveTabAnchor,
  };

  return (
    <TabsContextProvider value={ contextValue }>
      <div id={id} ref={ ref } { ... additionalProps }>
        { children }
      </div>
    </TabsContextProvider>
  );
} );

TabsRoot.displayName = 'TabsRoot';

const Tabs = Object.assign( TabsRoot, {
  Tab: Tab,
  List: TabList,
  Content: TabContent,
} );

export default Tabs;
