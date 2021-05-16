import React from 'react';
import { useTabsContext } from '../TabsContext';

const Tab = React.forwardRef( ( props, ref ) => {
  const {
    anchor, children, ...additionalProps
  } = props;

  const {
    id, activeTabAnchor, setActiveTabAnchor
  } = { ...useTabsContext() };

  const tabId = `tab-${id}-${anchor}`;
  const panelId = `tabpanel-${id}-${anchor}`;
  const handleClick = () => {
    setActiveTabAnchor( anchor );
  };
  const isSelected = activeTabAnchor === anchor;

  let classes = 'flex flex-inline justify-center items-center focus-visible:outline-0 focus-visible:bg-gray-200/50 rounded-none text-base px-2.5 py-1.5 border-b-2';
  classes += isSelected ? ' text-gray-100 border-b-blue-700' : ' text-gray-500 border-b-blue-300 hover:border-b-blue-500';
  return (
    <button
      id={tabId}
      ref={ref}
      type="button"
      role="tab"
      aria-selected={ isSelected }
      aria-controls={panelId}
      tabIndex={ isSelected ? 0 : -1}
      onClick={handleClick}
      className={ classes }
      {...additionalProps}>
      { children }
    </button>
  );
} );

Tab.displayName = 'Tab';

export default Tab;
