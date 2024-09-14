import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4GCircleLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 0 0-9-9 9 9 0 1 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.985 14.582v-1.19m0 0h1.01m-1.01 0H7.082l2.903-4.038zM16.584 9.629a2.6 2.6 0 0 0-1.025-.267c-1.365-.068-2.496 1.108-2.552 2.473-.063 1.502.935 2.742 2.42 2.742.87 0 1.49-.31 1.49-1.18v-1.43h-1.49"
    />
  </Svg>
);
export default Iconlyst4GCircleLight;
