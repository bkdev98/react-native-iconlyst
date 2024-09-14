import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailTimeWaitOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M7.598 20.03a4.84 4.84 0 0 1-3.49-1.42 5.71 5.71 0 0 1-1.605-4.1V8.63a5.21 5.21 0 0 1 5.112-5.522h8.411a5.21 5.21 0 0 1 5.112 5.522v1.6a.75.75 0 1 1-1.5 0v-1.6a3.706 3.706 0 0 0-3.612-4.022h-8.41A3.707 3.707 0 0 0 4.002 8.63v5.884a4.22 4.22 0 0 0 1.165 3.033 3.37 3.37 0 0 0 2.433.982h4.142a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M17.929 20.891a4.076 4.076 0 1 1 .002-8.152 4.076 4.076 0 0 1-.003 8.152m0-6.652a2.576 2.576 0 1 0 2.577 2.576 2.58 2.58 0 0 0-2.578-2.573z"
    />
    <Path
      fill={props.color}
      d="M18.953 18.432a.75.75 0 0 1-.384-.106l-1.05-.628a.75.75 0 0 1-.367-.644v-1.352a.75.75 0 0 1 1.5 0v.926l.687.41a.75.75 0 0 1-.386 1.394M11.844 13.145a2.7 2.7 0 0 1-1.69-.59l-3.843-3.1a.75.75 0 1 1 .944-1.164l3.839 3.1a1.215 1.215 0 0 0 1.515 0l3.8-3.09a.75.75 0 0 1 .946 1.15l-3.806 3.1a2.74 2.74 0 0 1-1.705.594"
    />
  </Svg>
);
export default IconlystEmailTimeWaitOutline;
