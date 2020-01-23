import React from 'react';

const Header = props => (
   <header className="top">
      <h1>
         Prise
         <span className="ofThe">
            <span className="of">de </span>
            <span className="the">la</span>
         </span>
         matinée
      </h1>
      <h3 className="tagline">
         <span>{props.tagline}</span>
      </h3>
   </header>
);

export default Header;
