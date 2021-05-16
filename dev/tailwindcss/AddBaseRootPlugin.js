module.exports = ( { addBase, theme } ) => {
  addBase( {
    ':root': {
      '--text-6xl': theme( 'fontSize.6xl' ),
      '--text-5xl': theme( 'fontSize.5xl' ),
      '--text-4xl': theme( 'fontSize.4xl' ),
      '--text-3xl': theme( 'fontSize.3xl' ),
      '--text-2xl': theme( 'fontSize.2xl' ),
      '--text-xl': theme( 'fontSize.xl' ),

      '--font-bold': theme( 'fontWeight.bold' ),
      '--font-semibold': theme( 'fontWeight.semibold' ),
      '--font-medium': theme( 'fontWeight.medium' ),

      '--leading-tight': theme( 'lineHeight.tight' ),
      '--leading-snug': theme( 'lineHeight.snug' ),
      '--leading-normal': theme( 'lineHeight.normal' )
    }
  } );
};
