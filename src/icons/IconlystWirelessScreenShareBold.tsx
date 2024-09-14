import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessScreenShareBold = ({
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
      d="M13.434 18.77a.75.75 0 0 1-.75-.75c0-3.645-2.968-6.61-6.616-6.61a.75.75 0 0 1 0-1.5c4.475 0 8.116 3.638 8.116 8.11a.75.75 0 0 1-.75.75m-3.673 0a.75.75 0 0 1-.75-.75 2.946 2.946 0 0 0-2.944-2.94.75.75 0 0 1 0-1.5 4.447 4.447 0 0 1 4.444 4.44.75.75 0 0 1-.75.75m-3.612.16a1.01 1.01 0 0 1-1.011-1.01 1.012 1.012 0 0 1 2.023 0c0 .557-.454 1.01-1.012 1.01M16.26 2.5H7.825c-3.159 0-5.282 2.222-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessScreenShareBold;
