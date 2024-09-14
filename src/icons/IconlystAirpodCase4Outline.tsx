import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase4Outline = ({
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
      d="M8.765 3.75a3.567 3.567 0 0 0-3.567 3.567v9.365a3.57 3.57 0 0 0 3.567 3.568h6.969a3.57 3.57 0 0 0 3.567-3.568V7.317a3.567 3.567 0 0 0-3.567-3.567zM3.698 7.317c0-2.799 2.27-5.067 5.067-5.067h6.969A5.067 5.067 0 0 1 20.8 7.317v9.365a5.07 5.07 0 0 1-5.067 5.068H8.765a5.07 5.07 0 0 1-5.067-5.068zm3.788.846a.75.75 0 0 1 .75-.75h8.027a.75.75 0 1 1 0 1.5H8.236a.75.75 0 0 1-.75-.75m5.129 3.186a.75.75 0 0 1 .3 1.017l-.793 1.46h1.516a.75.75 0 0 1 .658 1.108L12.9 17.5a.75.75 0 1 1-1.317-.718l.793-1.456H10.86a.75.75 0 0 1-.659-1.108l1.396-2.568a.75.75 0 0 1 1.018-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodCase4Outline;
