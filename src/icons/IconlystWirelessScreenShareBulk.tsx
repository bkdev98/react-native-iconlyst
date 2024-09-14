import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessScreenShareBulk = ({
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
      d="M16.26 2.5H7.826c-3.16 0-5.283 2.222-5.283 5.529v7.94c0 3.308 2.123 5.531 5.283 5.531h8.433c3.161 0 5.284-2.223 5.284-5.531v-7.94c0-3.307-2.123-5.529-5.283-5.529"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.434 18.77a.75.75 0 0 1-.75-.75c0-3.645-2.968-6.61-6.616-6.61a.75.75 0 0 1 0-1.5c4.475 0 8.116 3.638 8.116 8.11a.75.75 0 0 1-.75.75m-3.673 0a.75.75 0 0 1-.75-.75 2.946 2.946 0 0 0-2.944-2.94.75.75 0 0 1 0-1.5 4.447 4.447 0 0 1 4.444 4.44.75.75 0 0 1-.75.75m-3.612.16a1.01 1.01 0 0 1-1.01-1.01 1.012 1.012 0 0 1 2.022 0c0 .557-.454 1.01-1.012 1.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessScreenShareBulk;
