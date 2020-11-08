import React from 'react';

const Heading: React.FC<{ headingLevel:number, className:string}> = ({children,headingLevel,className}) => {
  const Tag = `h${headingLevel}`;
  return (
        <Tag className={className}>
          {children}
        </Tag>
  );
};

export default Heading;