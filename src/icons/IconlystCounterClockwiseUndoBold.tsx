import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCounterClockwiseUndoBold = ({
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
      d="M20.978 7.624a9.93 9.93 0 0 0-5.72-5.07A9.99 9.99 0 0 0 4.915 4.935v-.668a1 1 0 0 0-2 0v3.3a1 1 0 0 0 1 1h3.281a1 1 0 1 0 0-2H6.128a8 8 0 0 1 8.476-2.125A7.94 7.94 0 0 1 19.18 8.5a7.93 7.93 0 0 1 .367 6.104 7.93 7.93 0 0 1-4.056 4.586 7.92 7.92 0 0 1-6.108.363 7.97 7.97 0 0 1-5.094-5.41 1 1 0 1 0-1.928.532 9.96 9.96 0 0 0 6.37 6.77c1.071.37 2.176.555 3.278.555a9.9 9.9 0 0 0 4.358-1.012 9.91 9.91 0 0 0 5.07-5.732c.873-2.52.71-5.23-.459-7.63"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.984 15.568a1 1 0 0 0 .513-.142l3.174-1.9c.301-.18.486-.507.486-.858v-4.1a1 1 0 0 0-2 0v3.533l-2.688 1.61a1 1 0 0 0 .515 1.857"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCounterClockwiseUndoBold;
