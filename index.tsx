import React from 'react';

interface IComponent1Props {
  readonly myProperty: string;
}

const Component1: React.FC<IComponent1Props> = (props) => {
  const {
    children,
  } = props;
  return (
    <div>
      {children}
    </div>
  );
}


type Test<C, P> = C extends number ? { test: string } : P;
const Component1TypedTwice: React.FC<Test<any, IComponent1Props>> = Component1;

const Component2: React.FC = () => {
  return (
    <>
      <Component1
        myProperty="123"
      >
        123
      </Component1>
      <Component1TypedTwice
        myProperty="123"
      >
        123
      </Component1TypedTwice>
    </>
  )
};