import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockwiseClockRedoBulk = ({
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
      d="M21.827 13.444a1 1 0 0 0-1.23.698 7.97 7.97 0 0 1-5.097 5.411c-2.019.7-4.187.57-6.106-.364a7.93 7.93 0 0 1-4.056-4.588A7.92 7.92 0 0 1 5.706 8.5a7.94 7.94 0 0 1 4.577-4.056c3.045-1.059 6.355-.16 8.475 2.125H17.69a1 1 0 0 0 0 2h3.281a1 1 0 0 0 1-1v-3.3a1 1 0 1 0-2 0v.67A10 10 0 0 0 9.628 2.551a9.93 9.93 0 0 0-5.72 5.072 9.91 9.91 0 0 0-.46 7.63 9.92 9.92 0 0 0 5.07 5.733A9.9 9.9 0 0 0 12.878 22a10 10 0 0 0 3.275-.555 9.97 9.97 0 0 0 6.372-6.77 1 1 0 0 0-.698-1.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.548 7.568a1 1 0 0 0-1 1v4.1c0 .351.185.677.486.858l3.175 1.9a1 1 0 0 0 1.371-.344 1 1 0 0 0-.344-1.372l-2.688-1.609V8.568a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClockwiseClockRedoBulk;
