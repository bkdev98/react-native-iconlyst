import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNextCircleOutline = ({
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
      fillRule="evenodd"
      d="M2.5 12c0-5.384 4.365-9.75 9.75-9.75S22 6.616 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.999 8.56c.544-.31 1.194-.31 1.803-.067l.006.002a10.1 10.1 0 0 1 2.958 1.874l.005.004c.478.444.76 1.019.756 1.639-.003.618-.289 1.185-.759 1.616a9.9 9.9 0 0 1-2.953 1.872c-.577.244-1.218.247-1.761-.04-.554-.294-.917-.843-1.004-1.516l-.002-.014a18 18 0 0 1 0-3.851l.001-.017c.079-.634.402-1.192.95-1.503m.54 1.68a16.7 16.7 0 0 0-.001 3.516c.032.236.136.335.218.378.093.05.257.077.476-.016l.007-.003a8.4 8.4 0 0 0 2.512-1.59l.003-.003c.21-.192.272-.377.273-.518 0-.138-.058-.328-.275-.53a8.6 8.6 0 0 0-2.506-1.589c-.273-.107-.434-.063-.507-.022-.07.04-.17.139-.2.377M15.805 8.26a.75.75 0 0 1 .75.75v5.98a.75.75 0 0 1-1.5 0V9.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNextCircleOutline;
