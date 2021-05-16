import React, { useId, useRef } from 'react';

const TabList = ( props ) => {
  const { children, ...additionalProps } = props;
  const ref = useRef( null );
  const id = useId();

  return (
    <div
      id={id}
      ref={ref}
      role="tablist"
      aria-orientation="horizontal"
      className="flex flex-inline space-x-2 px-1 mb-2 py-2 overflow-auto"
      {...additionalProps}>
      { children }
    </div>
  )
};

TabList.displayName = 'TabList';

export default TabList;
