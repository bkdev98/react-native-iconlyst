import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst7daysCalendarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.768 3.084v1.94M8.239 3.084v1.94"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.32 5.025-8.625.001c-2.534 0-4.116 1.411-4.116 4.005v7.807c0 2.635 1.582 4.079 4.116 4.079l8.618-.001c2.542 0 4.116-1.419 4.116-4.013V9.03c.007-2.594-1.567-4.005-4.108-4.005"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.103 15.739 1.968-5.355H7.694M15.883 10.084v5.69m-.284-1.455a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0"
      opacity={0.4}
    />
  </Svg>
);
export default Iconlyst7daysCalendarTwoTone;
