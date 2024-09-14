import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst3GCircleLight = ({
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
      d="M16.15 9.662a2.6 2.6 0 0 0-1.025-.267c-1.365-.068-2.495 1.108-2.552 2.474-.062 1.501.935 2.742 2.42 2.742.87 0 1.49-.31 1.49-1.18V12h-1.49M7.575 14.131a1.605 1.605 0 1 0 1.135-2.739l1.61-1.994h-2.8"
    />
  </Svg>
);
export default Iconlyst3GCircleLight;
