import React from 'react';

type helloProps = {
  name: string,
};

export const Hello: React.FC<helloProps> = (props) => {
  return <h1>Hello {props.name}!</h1>;
};
