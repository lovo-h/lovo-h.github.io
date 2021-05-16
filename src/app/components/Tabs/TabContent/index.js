import React from 'react';
import { useTabsContext } from '../TabsContext';

const TabContent = ( props ) => {
  const { id, activeTabAnchor } = useTabsContext();
  const { anchor, children, ...additionalProps } = props;
  const tabPanelId = `tabpanel-${id}-${anchor}`;
  const tabId = `tab-${id}-${anchor}`;
  const isVisible = activeTabAnchor === anchor;

  return (
    <div
      id={tabPanelId}
      style={{ display: isVisible ? 'block' : 'none' }}
      role="tabpanel"
      aria-labelledby={tabId}
      aria-hidden={!isVisible}
      {...additionalProps}>
      { children }
    </div>
  );
};

TabContent.displayName = 'TabContent';

export default TabContent;
