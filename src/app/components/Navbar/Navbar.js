import React from 'react';
import './Navbar.css';


function MenuBar( { refs, isSticky = false } ) {
  const scrollToSection = ( ref ) => {
    const top = ref.current?.offsetTop || 0;
    const offset = 48; // 48 is the height of the navbar.
    window.scrollTo( { top: top - offset, behavior: 'smooth' } );
  };

  return (
    <div className={ `nav ${ isSticky ? 'sticky' : '' }` }>
      <div className="navbar container">
        <div className="menu">
          <div className="item">Hector Lovo</div>
        </div>
        <div className="menu">
          <div className="item" onClick={() => scrollToSection( refs.home )} >Home</div>
          <div className="item" onClick={() => scrollToSection( refs.about )}>About</div>
          <div className="item" onClick={() => scrollToSection( refs.experience )}>Experience</div>
          <div className="item" onClick={() => scrollToSection( refs.contact )}>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar( { refs } ) {
  const [ isSticky, setIsSticky ] = React.useState( false );

  React.useEffect( () => {
    const handleScroll = () => {
      const homeHeight = window.innerHeight - 48; // 48 is the height of the navbar.

      const shouldBeSticky = window.scrollY >= homeHeight;
      setIsSticky( shouldBeSticky );
    };

    window.addEventListener( 'scroll', handleScroll, { passive: true } );
    return () => {
      window.removeEventListener( 'scroll', handleScroll );
    };
  }, [] );

  return (
    <React.Fragment>
      <MenuBar refs={ refs } />
      { isSticky && <MenuBar refs={ refs } isSticky={ true } />}
    </React.Fragment>
  );
}
